'use client'

import { useState, useEffect, useRef } from 'react'

// Declare Instagram embed types
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

interface InstagramEmbed {
  id: string
  embedCode: string
  caption?: string
  timestamp?: string
}

interface InstagramEmbedCarouselProps {
  embeds: InstagramEmbed[]
  autoPlayInterval?: number
}

export default function InstagramEmbedCarousel({ 
  embeds, 
  autoPlayInterval = 8000 
}: InstagramEmbedCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const totalSlides = embeds.length

  // Load Instagram embed script
  useEffect(() => {
    // Check if Instagram embed script is already loaded
    if (window.instgrm) {
      setScriptLoaded(true)
      return
    }

    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => {
      setScriptLoaded(true)
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  // Process embeds when script loads (only once)
  useEffect(() => {
    if (scriptLoaded && window.instgrm?.Embeds) {
      // Process embeds once when script loads
      window.instgrm?.Embeds.process()
    }
  }, [scriptLoaded])





  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isUserInteracting && !isHovering && totalSlides > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, autoPlayInterval)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, isUserInteracting, isHovering, totalSlides, autoPlayInterval])

  // Pause auto-play when user interacts
  const handleUserInteraction = () => {
    setIsUserInteracting(true)
    setTimeout(() => setIsUserInteracting(false), 3000)
  }

  // Navigation functions
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    handleUserInteraction()
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    handleUserInteraction()
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    handleUserInteraction()
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    handleUserInteraction()
  }

  if (totalSlides === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 text-center text-gray-500">
        No Instagram posts available
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto" ref={carouselRef}>
      {/* Main Carousel Container */}
      <div 
        className="relative bg-white rounded-lg shadow-lg overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Slides Container */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
          {embeds.map((embed, index) => (
            <div
              key={embed.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Instagram Embed Container */}
              <div className="w-full h-full flex items-center justify-center bg-white p-2">
                <div 
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg"
                  dangerouslySetInnerHTML={{ 
                    __html: embed.embedCode
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Play/Pause Button */}
        {totalSlides > 1 && (
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Slide Indicators */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {embeds.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-blue-600 scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Info */}
      {embeds[currentSlide] && (
        <div className="mt-4 text-center">
          {embeds[currentSlide].caption && (
            <p className="text-gray-700 text-sm mb-1">{embeds[currentSlide].caption}</p>
          )}
          {embeds[currentSlide].timestamp && (
            <p className="text-gray-500 text-xs">{embeds[currentSlide].timestamp}</p>
          )}
        </div>
      )}
    </div>
  )
} 
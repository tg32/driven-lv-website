'use client'
import VideoBackground from '@/components/ui/VideoBackground'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const scrollButtonRef = useRef<HTMLButtonElement>(null)

  // Add keyboard event listener for the scroll button
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (scrollButtonRef.current === document.activeElement) {
          // Scroll to the next section
          const nextSection = document.getElementById('about')
          nextSection?.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const button = scrollButtonRef.current
    button?.addEventListener('keydown', handleKeyDown)

    return () => {
      button?.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleScrollClick = () => {
    const nextSection = document.getElementById('about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="hero"
      className="relative"
      aria-labelledby="hero-heading"
    >
      <VideoBackground 
        role="img"
        aria-label="Background video of DRIVEN LV fitness center"
      >
        <div className="container-max w-full h-full flex flex-col justify-end">
          <h1 id="hero-heading" className="sr-only">
            DRIVEN LV - Empowering Individuals with Disabilities Through Accessible Fitness
          </h1>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 pb-6">
            <button
              ref={scrollButtonRef}
              onClick={handleScrollClick}
              className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-full p-2"
              aria-label="Scroll to next section"
            >
              <span className="sr-only">Scroll to next section</span>
              <svg 
                className="w-12 h-12 text-primary-500 drop-shadow-lg animate-bounce group-hover:animate-none" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
        </div>
      </VideoBackground>
    </section>
  )
} 
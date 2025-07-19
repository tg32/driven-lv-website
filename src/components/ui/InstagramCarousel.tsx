'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { fetchInstagramPosts } from '@/lib/instagram'

interface InstagramPost {
  id: string
  mediaUrl: string
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  thumbnailUrl?: string
  caption: string
  likes: number
  comments: number
  timestamp: string
  altText: string
  permalink: string
}

export default function InstagramCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const totalSlides = instagramPosts.length

  // Fetch Instagram posts on component mount
  useEffect(() => {
    async function loadInstagramPosts() {
      try {
        setIsLoading(true)
        const posts = await fetchInstagramPosts()
        setInstagramPosts(posts)
        setError(null)
      } catch (err) {
        console.error('Failed to load Instagram posts:', err)
        setError('Unable to load Instagram posts')
      } finally {
        setIsLoading(false)
      }
    }

    loadInstagramPosts()
  }, [])

  // Auto-play functionality with fade timing
  useEffect(() => {
    if (isPlaying && !isUserInteracting && totalSlides > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, 10000) // 10 seconds per slide
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
  }, [isPlaying, isUserInteracting, totalSlides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsUserInteracting(true)
    // Reset user interaction after a delay
    setTimeout(() => setIsUserInteracting(false), 5000)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % totalSlides)
  }

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Handle image load errors
  const handleImageError = (imageUrl: string) => {
    setImageErrors(prev => new Set(prev).add(imageUrl))
  }

  // Get the best available image URL for a post
  const getImageUrl = (post: InstagramPost): string => {
    // If the main media URL failed to load, try thumbnail
    if (imageErrors.has(post.mediaUrl) && post.thumbnailUrl) {
      return post.thumbnailUrl
    }
    // For videos, prefer thumbnail if available
    if (post.mediaType === 'VIDEO' && post.thumbnailUrl) {
      return post.thumbnailUrl
    }
    // Default to media URL
    return post.mediaUrl
  }

  // Check if we should show fallback for a post
  const shouldShowFallback = (post: InstagramPost): boolean => {
    const imageUrl = getImageUrl(post)
    // Only show fallback if the image URL is empty or has actually failed to load
    return !imageUrl || imageErrors.has(imageUrl)
  }

  // Keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault()
        prevSlide()
        break
      case 'ArrowRight':
        event.preventDefault()
        nextSlide()
        break
      case ' ':
        event.preventDefault()
        togglePlayPause()
        break
    }
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`
    }
    return num.toString()
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-0.5">
              <div className="h-full w-full rounded-full bg-white p-0.5">
                <div className="h-full w-full rounded-full bg-primary-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">@drivenlv</h2>
              <p className="text-sm text-gray-500">DRIVEN LV</p>
            </div>
          </div>
        </div>
        
        <div className="relative carousel-container rounded-lg overflow-hidden bg-gray-100 w-full max-w-md mx-auto h-[600px] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Instagram posts...</p>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error || totalSlides === 0) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-0.5">
              <div className="h-full w-full rounded-full bg-white p-0.5">
                <div className="h-full w-full rounded-full bg-primary-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">@drivenlv</h2>
              <p className="text-sm text-gray-500">DRIVEN LV</p>
            </div>
          </div>
        </div>
        
        <div className="relative carousel-container rounded-lg overflow-hidden bg-gray-100 w-full max-w-md mx-auto h-[600px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-4">Unable to load Instagram posts</p>
            <a
              href="https://instagram.com/drivenlv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors focus-ring rounded-md p-2"
              aria-label="Visit DRIVEN LV on Instagram (opens in new tab)"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.017 0C8.396 0 7.897.01 7.784.048 2.717.266.266 2.718.048 7.784.01 7.897 0 8.396 0 12.017c0 3.624.01 4.123.048 4.236.218 5.066 2.67 7.518 7.736 7.736.113.038.612.048 4.236.048 3.624 0 4.123-.01 4.236-.048 5.066-.218 7.518-2.67 7.736-7.736.038-.113.048-.612.048-4.236 0-3.621-.01-4.12-.048-4.233C23.734 2.67 21.282.218 16.216.048 16.103.01 15.604 0 12.017 0zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.672c-3.313 0-6 2.687-6 6 0 3.314 2.687 6 6 6s6-2.686 6-6c0-3.313-2.687-6-6-6zm0 9.837c-2.116 0-3.837-1.721-3.837-3.837S9.901 8.018 12.017 8.018s3.837 1.721 3.837 3.837-1.721 3.837-3.837 3.837zm7.982-10.018c0 .773-.627 1.4-1.4 1.4s-1.4-.627-1.4-1.4.627-1.4 1.4-1.4 1.4.627 1.4 1.4 1.4z" clipRule="evenodd" />
              </svg>
              <span>Follow @drivenlv</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Carousel Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-0.5">
            <div className="h-full w-full rounded-full bg-white p-0.5">
              <div className="h-full w-full rounded-full bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">@drivenlv</h2>
            <p className="text-sm text-gray-500">DRIVEN LV</p>
          </div>
        </div>
        
        {/* Play/Pause Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={togglePlayPause}
            className="btn-ghost !p-2"
            aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
            title={isPlaying ? 'Pause carousel' : 'Play carousel'}
          >
            {isPlaying ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Main Fade Carousel */}
      <div
        ref={carouselRef}
        className="relative carousel-container rounded-lg overflow-hidden bg-gray-100 w-full max-w-md mx-auto h-[600px]"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Instagram posts carousel"
        aria-describedby="carousel-instructions"
      >
        {/* Fade Carousel Track */}
        <div className="relative w-full h-full">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className={`absolute inset-0 transition-all duration-4000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{
                transition: 'opacity 4s ease-in-out',
                opacity: index === currentSlide ? 1 : 0
              }}
              role="tabpanel"
              aria-label={`Post ${index + 1} of ${totalSlides}`}
              aria-hidden={index !== currentSlide}
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative"
                aria-label={`View this ${post.mediaType.toLowerCase()} on Instagram (opens in new tab)`}
              >
                {/* Show fallback if image fails to load */}
                {shouldShowFallback(post) ? (
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <p className="text-primary-700 font-medium">DRIVEN LV</p>
                      <p className="text-primary-600 text-sm mt-1">Instagram Post</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Main Image/Thumbnail */}
                    <Image
                      src={getImageUrl(post)}
                      alt={post.altText}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover"
                      priority={index === 0}
                      onError={() => handleImageError(getImageUrl(post))}
                    />
                    
                    {/* Video Play Button Overlay */}
                    {post.mediaType === 'VIDEO' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 rounded-full p-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Post Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/50 to-transparent p-4 text-white">
                  <p className="line-clamp-3 text-sm">{post.caption}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-sm">{formatNumber(post.likes)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21 15a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10z"/>
                      </svg>
                      <span className="text-sm">{formatNumber(post.comments)}</span>
                    </div>
                    <span className="text-sm ml-auto">{post.timestamp}</span>
                  </div>
                </div>

                {/* Media Type Indicator */}
                <div className="absolute top-4 right-4">
                  {post.mediaType === 'VIDEO' && (
                    <div className="bg-black/50 rounded-full p-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  )}
                  {post.mediaType === 'CAROUSEL_ALBUM' && (
                    <div className="bg-black/50 rounded-full p-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
                      </svg>
                    </div>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 focus-ring"
          aria-label="Previous post"
          disabled={totalSlides <= 1}
        >
          <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 focus-ring"
          aria-label="Next post"
          disabled={totalSlides <= 1}
        >
          <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* Caption Section - Full Width */}
      <div className="w-screen p-4 mt-4 bg-white" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
        <div className="space-y-1">
          <p className="text-sm text-gray-900">
            <span className="font-semibold">@drivenlv</span> {instagramPosts[currentSlide].caption}
          </p>
          <p className="text-xs text-gray-500">{instagramPosts[currentSlide].timestamp}</p>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-3" role="tablist" aria-label="Carousel navigation">
        {instagramPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-primary-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to post ${index + 1}`}
          />
        ))}
      </div>

      {/* Screen Reader Instructions */}
      <div id="carousel-instructions" className="sr-only">
        Use arrow keys to navigate between posts, or press spacebar to pause/play the carousel.
      </div>
    </div>
  )
} 
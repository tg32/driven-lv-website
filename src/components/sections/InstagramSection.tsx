'use client'
import { useState, useEffect, useRef } from 'react'

// Your real Instagram posts
const posts = [
  {
    id: '1',
    image: '/driven-lv-website/drivenolym.jpg',
    caption: 'For in-person signups be sure to stop by at the DRIVEN front desk! Early bird pricing ongoing til July 15!\n\nDRIVEN Olympics going strong on its 5th year! 💪🏼\n\nY\'all ready for this??!! 🏆🥇🥈🥉🏅',
    timestamp: '2 hours ago'
  },
  {
    id: '2', 
    video: '/driven-lv-website/ig0703_small.mp4',
    caption: 'DRIVEN Olympics Powered by Move United\nJoin us August 16th, Dula Community Center Gymnasium at 930am.\n\nDRIVEN Olympics offers a variety of inclusive events that are adapted to fit the needs and ability levels of all our members. Each activity was curated and chosen with all members in mind and allows for participants to compete no matter their ability level.\n\nRegistration fees as follows:\n\n6/16-7/15: Early Bird Pricing $10.00\n\n7/16-8/6: Tier II Pricing $15.00\n\n8/7-8/16: Final Call Pricing $25.00\nPay registration fees at DRIVEN Front Desk',
    timestamp: '1 day ago'
  },
  {
    id: '3',
    video: '/driven-lv-website/IG3.mp4',
    caption: 'DRIVEN Olympics Powered by Move United\nJoin us August 16th, Dula Community Center Gymnasium at 930am.\n\nDRIVEN Olympics offers a variety of inclusive events that are adapted to fit the needs and ability levels of all our members. Each activity was curated and chosen with all members in mind and allows for participants to compete no matter their ability level.',
    timestamp: '3 days ago'
  },
  {
    id: '4',
    video: '/driven-lv-website/IG4.mp4',
    caption: 'Ways I Workout as a Quadriplegic 💪🏼\n\nHere at @drivenlv we have so many exercises you couldn\'t do at a regular gym.\n\nThe other day, we used an Xcite to fire my muscles while I am standing giving me a full body workout 🏋️‍♀️',
    timestamp: '4 days ago'
  }
]

export default function InstagramSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeState, setFadeState] = useState<'fadeIn' | 'display' | 'fadeOut'>('fadeIn')
  const [fadeProgress, setFadeProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})



  // Handle video playback when pause state changes
  useEffect(() => {
    const currentPost = posts[currentIndex]
    if (currentPost.video) {
      const videoKey = `${currentPost.id}-${currentIndex}`
      const videoElement = videoRefs.current[videoKey]
      if (videoElement) {
        if (isPaused) {
          videoElement.pause()
        } else {
          videoElement.play()
        }
      }
    }
  }, [isPaused, currentIndex])

  // Reset fade state when resuming from pause
  useEffect(() => {
    if (!isPaused && fadeState === 'fadeOut') {
      // If we're resuming and were in fadeOut state, reset to display state
      setFadeState('display')
      setFadeProgress(1)
    }
  }, [isPaused, fadeState])

  // Auto-advance slides
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined
    let intervalId: NodeJS.Timeout | undefined

    // Don't auto-advance if paused
    if (isPaused) {
      // Clear any existing timers when paused
      if (timeoutId) clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
      return
    }

    const startFadeIn = () => {
      setFadeState('fadeIn')
      setFadeProgress(0)
      
      // Special timing for second, third, and fourth posts - 4s fade in
      const fadeInDuration = (currentIndex === 1 || currentIndex === 2 || currentIndex === 3) ? 4000 : 5000 // 4s for second, third, and fourth posts, 5s for others
      
      // Animate fade in
      const startTime = Date.now()
      intervalId = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / fadeInDuration, 1)
        setFadeProgress(progress)
        
        if (progress >= 1) {
          // Fade in complete, start display time
          setFadeState('display')
          setFadeProgress(1)
          clearInterval(intervalId)
          
          const currentPost = posts[currentIndex]
          
          if (currentPost.video) {
            // Special timing for second post (index 1) - 4s fade in, 2s play, 2s fade out
            if (currentIndex === 1) {
              timeoutId = setTimeout(startFadeOut, 2000) // 2 second play time
            } else if (currentIndex === 2) {
              // Special timing for third post (index 2) - 4s fade in, 5s play, 2s fade out
              timeoutId = setTimeout(startFadeOut, 5000) // 5 second play time
            } else if (currentIndex === 3) {
              // Special timing for fourth post (index 3) - 4s fade in, 29s play, 2s fade out
              timeoutId = setTimeout(startFadeOut, 29000) // 29 second play time
            } else {
              // For other videos, wait for video to finish, then fade out
              const videoElement = document.querySelector(`video[key="${currentPost.id}-${currentIndex}"]`) as HTMLVideoElement
              if (videoElement) {
                const videoDuration = videoElement.duration * 1000 // Convert to milliseconds
                timeoutId = setTimeout(startFadeOut, videoDuration)
              } else {
                // Fallback if video element not found
                timeoutId = setTimeout(startFadeOut, 10000) // 10 second fallback
              }
            }
          } else {
            // For images, show for 4 seconds then fade out
            timeoutId = setTimeout(startFadeOut, 4000) // 4 seconds display time
          }
        }
      }, 50) // Update every 50ms for smooth animation
    }

    const startFadeOut = () => {
      setFadeState('fadeOut')
      setFadeProgress(1)
      
      // Special timing for second, third, and fourth posts - 2s fade out
      const fadeOutDuration = (currentIndex === 1 || currentIndex === 2 || currentIndex === 3) ? 2000 : 5000 // 2s for second, third, and fourth posts, 5s for others
      
      // Animate fade out
      const startTime = Date.now()
      intervalId = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.max(1 - (elapsed / fadeOutDuration), 0)
        setFadeProgress(progress)
        
        if (progress <= 0) {
          // Fade out complete, move to next slide
          setFadeState('fadeIn')
          setFadeProgress(0)
          clearInterval(intervalId)
          setCurrentIndex((currentIndex + 1) % posts.length)
          
          // Start next cycle
          timeoutId = setTimeout(startFadeIn, 100) // Small delay before starting next fade in
        }
      }, 50) // Update every 50ms for smooth animation
    }

    // Start the cycle with fade in
    timeoutId = setTimeout(startFadeIn, 100)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [currentIndex, posts.length, isPaused])

  // Ensure videos play when they become visible
  useEffect(() => {
    const currentPost = posts[currentIndex]
    if (currentPost.video) {
      const videoElement = document.querySelector(`video[key="${currentPost.id}-${currentIndex}"]`) as HTMLVideoElement
      if (videoElement && fadeProgress > 0.5) {
        videoElement.play().catch(console.error)
      }
    }
  }, [currentIndex, fadeProgress])

  const navigateToSlide = (index: number) => {
    let newIndex = index
    if (newIndex < 0) {
      newIndex = posts.length - 1
    } else if (newIndex >= posts.length) {
      newIndex = 0
    }
    setCurrentIndex(newIndex)
    setFadeState('fadeIn') // Reset to fade in state
    setFadeProgress(0)
  }

  const handleSlideClick = () => {
    const newPausedState = !isPaused
    setIsPaused(newPausedState)
    
    // Control video playback based on pause state
    const currentPost = posts[currentIndex]
    if (currentPost.video) {
      const videoKey = `${currentPost.id}-${currentIndex}`
      const videoElement = videoRefs.current[videoKey]
      if (videoElement) {
        if (newPausedState) {
          videoElement.pause()
        } else {
          videoElement.play()
        }
      }
    }
  }

  // Add keyboard support for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSlideClick()
    }
  }



  const currentPost = posts[currentIndex]
  const nextPost = posts[(currentIndex + 1) % posts.length]
  const formattedCaption = currentPost.caption.replace(/\n/g, ' ')
  const mediaType = currentPost.video ? 'video' : 'image'

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gray-50"
      aria-label="Instagram feed"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Follow Our Journey</h2>
          <p className="text-xl text-gray-600">Stay connected with the DRIVEN community on Instagram</p>
        </div>
        
        {/* Carousel Controls - Visible to screen readers */}
        <div className="sr-only">
          <p>Instagram carousel with {posts.length} posts. Use the previous and next buttons to navigate.</p>
          <p>Current slide {currentIndex + 1} of {posts.length}: {formattedCaption}</p>
        </div>

        {/* Instagram Carousel */}
        <div className="flex justify-center" role="region" aria-roledescription="carousel" aria-label="Instagram posts">
          <div className="w-full max-w-xl">
            {/* Media Container */}
            <div 
              ref={carouselRef}
              className="relative overflow-hidden h-[720px] mb-4"
              aria-live="polite"
              aria-atomic="true"
              aria-relevant="additions"
            >
              {/* All Media Containers - Always Present */}
              {posts.map((post, index) => {
                const isCurrent = index === currentIndex
                const isNext = index === (currentIndex + 1) % posts.length
                const isVisible = isCurrent || (fadeState === 'display' && isNext)
                
                if (!isVisible) return null
                
                return (
                  <div 
                    key={post.id}
                    id={`instagram-slide-${index}`}
                    className="absolute top-0 left-0 w-full h-full focus:outline-none cursor-pointer"
                    role="button"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${posts.length} - click to ${isPaused ? 'resume' : 'pause'} carousel`}
                    tabIndex={isCurrent ? 0 : -1}
                    onClick={handleSlideClick}
                    onKeyDown={handleKeyDown}
                    style={{
                      opacity: isCurrent 
                        ? (fadeState === 'fadeIn' ? fadeProgress : fadeState === 'fadeOut' ? fadeProgress : 1)
                        : (fadeState === 'fadeIn' ? 1 - fadeProgress : 0),
                      transition: isPaused ? 'none' : 'opacity 0.05s ease-in-out',
                      zIndex: isCurrent ? 1 : 2
                    }}
                  >
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={`Instagram post by DRIVEN LV: ${post.caption.substring(0, 50)}...`}
                        className="w-full h-full object-cover"
                      />
                    ) : post.video ? (
                      <video 
                        ref={(el) => {
                          const videoKey = `${post.id}-${currentIndex}`
                          videoRefs.current[videoKey] = el
                        }}
                        src={post.video}
                        className="w-full h-full object-cover"
                        autoPlay={!isPaused}
                        muted
                        loop
                        playsInline
                        preload="auto"
                        key={`${post.id}-${currentIndex}`}
                        aria-label={`Instagram video by DRIVEN LV: ${post.caption.substring(0, 50)}...`}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-500">No media available</p>
                      </div>
                    )}
                    
                    {/* Instagram Icon */}
                    <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2">
                      <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <title>Instagram icon</title>
                        <path fillRule="evenodd" d="M12.017 0C8.396 0 7.897.01 7.784.048 2.717.266.266 2.718.048 7.784.01 7.897 0 8.396 0 12.017c0 3.624.01 4.123.048 4.236.218 5.066 2.67 7.518 7.736 7.736.113.038.612.048 4.236.048 3.624 0 4.123-.01 4.236-.048 5.066-.218 7.518-2.67 7.736-7.736.038-.113.048-.612.048-4.236 0-3.621-.01-4.12-.048-4.233C23.734 2.67 21.282.218 16.216.048 16.103.01 15.604 0 12.017 0zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.672c-3.313 0-6 2.687-6 6 0 3.314 2.687 6 6 6s6-2.686 6-6c0-3.313-2.687-6-6-6zm0 9.837c-2.116 0-3.837-1.721-3.837-3.837S9.901 8.018 12.017 8.018s3.837 1.721 3.837 3.837-1.721 3.837-3.837 3.837zm7.982-10.018c0 .773-.627 1.4-1.4 1.4s-1.4-.627-1.4-1.4.627-1.4 1.4-1.4 1.4.627 1.4 1.4z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Pause/Play Indicator - Only show when paused, like background video */}
                    {isPaused && (
                      <div className="absolute bottom-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm pointer-events-none">
                        Carousel Paused - Click to Resume
                      </div>
                    )}
                    

                  </div>
                )
              })}
            </div>

            {/* Caption - Now below the media */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mb-4">
              <div className="text-gray-700 text-sm mb-2 line-clamp-3">
                {posts[currentIndex].caption}
              </div>
              <p className="text-gray-500 text-xs">{posts[currentIndex].timestamp}</p>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
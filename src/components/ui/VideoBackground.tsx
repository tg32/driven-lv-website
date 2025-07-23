'use client'

import { useRef, useState } from 'react'

interface VideoBackgroundProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
  children?: React.ReactNode
  role?: string
  'aria-label'?: string
}

export default function VideoBackground({ 
  className = '', 
  children, 
  role = 'button',
  'aria-label': ariaLabel = 'Background video - click to pause or play',
  ...props 
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <section 
      className={`relative w-full overflow-hidden cursor-pointer ${className}`} 
      style={{ height: '85vh' }}
      onClick={handleVideoClick}
      role={role}
      tabIndex={0}
      aria-label={ariaLabel}
      {...props}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleVideoClick()
        }
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: 0.9 }}
        >
          <source src="/driven-lv-website/cpn-driven-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent pointer-events-none" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 pointer-events-none" style={{ height: '85vh' }}>
        {children}
      </div>

      {/* Play/Pause indicator */}
      {!isPlaying && (
        <div className="absolute bottom-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm pointer-events-none">
          Video Paused - Click to Play
        </div>
      )}
    </section>
  )
} 
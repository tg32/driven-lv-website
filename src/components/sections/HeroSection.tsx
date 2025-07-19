import VideoBackground from '@/components/ui/VideoBackground'

export default function HeroSection() {
  return (
    <VideoBackground 
      aria-labelledby="hero-heading"
    >
      <div className="container-max w-full">
        {/* Container content can go here if needed */}
      </div>
      
      {/* DRIVEN text and arrow positioned relative to VideoBackground, not container */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3 pb-4">
        <span className="font-michroma text-4xl md:text-5xl text-primary-500 drop-shadow-lg">
          DRIVEN
        </span>
        <svg 
          className="w-8 h-8 text-primary-500 drop-shadow-lg animate-bounce" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path 
            fillRule="evenodd" 
            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
    </VideoBackground>
  )
} 
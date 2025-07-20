
'use client'
import { useState } from 'react'

// Sample Instagram posts - placeholder content until real Instagram embeds are available
const samplePosts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
    caption: 'Amazing workout session with our adaptive equipment! 💪 #DrivenLV #AccessibleFitness',
    timestamp: '2 hours ago'
  },
  {
    id: '2', 
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
    caption: 'Another great day at DRIVEN LV! 🏋️‍♂️ #NeuroRecovery #FitnessGoals',
    timestamp: '1 day ago'
  }
]

export default function InstagramSection() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0)
  
  return (
    <section 
      className="section-padding bg-white"
      aria-labelledby="instagram-heading"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 
            id="instagram-heading"
            className="text-section-title text-gray-900 mb-6"
          >
            Follow Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay connected with our community and see the amazing progress our members 
            are making every day. Follow us on Instagram for daily inspiration.
          </p>
        </div>

        {/* Instagram Posts Carousel */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Current Post */}
              <div className="aspect-square relative">
                <img 
                  src={samplePosts[currentPostIndex].image} 
                  alt="Instagram post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2">
                  <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.897.01 7.784.048 2.717.266.266 2.718.048 7.784.01 7.897 0 8.396 0 12.017c0 3.624.01 4.123.048 4.236.218 5.066 2.67 7.518 7.736 7.736.113.038.612.048 4.236.048 3.624 0 4.123-.01 4.236-.048 5.066-.218 7.518-2.67 7.736-7.736.038-.113.048-.612.048-4.236 0-3.621-.01-4.12-.048-4.233C23.734 2.67 21.282.218 16.216.048 16.103.01 15.604 0 12.017 0zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.672c-3.313 0-6 2.687-6 6 0 3.314 2.687 6 6 6s6-2.686 6-6c0-3.313-2.687-6-6-6zm0 9.837c-2.116 0-3.837-1.721-3.837-3.837S9.901 8.018 12.017 8.018s3.837 1.721 3.837 3.837-1.721 3.837-3.837 3.837zm7.982-10.018c0 .773-.627 1.4-1.4 1.4s-1.4-.627-1.4-1.4.627-1.4 1.4-1.4 1.4.627 1.4 1.4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Post Info */}
              <div className="p-4">
                <p className="text-gray-700 text-sm mb-1">{samplePosts[currentPostIndex].caption}</p>
                <p className="text-gray-500 text-xs">{samplePosts[currentPostIndex].timestamp}</p>
              </div>

              {/* Navigation Arrows */}
              {samplePosts.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentPostIndex((prev) => (prev - 1 + samplePosts.length) % samplePosts.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Previous post"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentPostIndex((prev) => (prev + 1) % samplePosts.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Next post"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Post Indicators */}
            {samplePosts.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {samplePosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPostIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentPostIndex
                        ? 'bg-blue-600 scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to post ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Follow Link */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/drivenlv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors focus-ring rounded-md p-2"
            aria-label="Follow DRIVEN LV on Instagram (opens in new tab)"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.017 0C8.396 0 7.897.01 7.784.048 2.717.266.266 2.718.048 7.784.01 7.897 0 8.396 0 12.017c0 3.624.01 4.123.048 4.236.218 5.066 2.67 7.518 7.736 7.736.113.038.612.048 4.236.048 3.624 0 4.123-.01 4.236-.048 5.066-.218 7.518-2.67 7.736-7.736.038-.113.048-.612.048-4.236 0-3.621-.01-4.12-.048-4.233C23.734 2.67 21.282.218 16.216.048 16.103.01 15.604 0 12.017 0zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.672c-3.313 0-6 2.687-6 6 0 3.314 2.687 6 6 6s6-2.686 6-6c0-3.313-2.687-6-6-6zm0 9.837c-2.116 0-3.837-1.721-3.837-3.837S9.901 8.018 12.017 8.018s3.837 1.721 3.837 3.837-1.721 3.837-3.837 3.837zm7.982-10.018c0 .773-.627 1.4-1.4 1.4s-1.4-.627-1.4-1.4.627-1.4 1.4-1.4 1.4.627 1.4 1.4z" clipRule="evenodd" />
            </svg>
            <span>Follow @drivenlv</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 
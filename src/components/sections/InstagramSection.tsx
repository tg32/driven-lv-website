import InstagramCarousel from '@/components/ui/InstagramCarousel'

export default function InstagramSection() {
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

        {/* Instagram Carousel */}
        <div className="flex justify-center">
          <InstagramCarousel />
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
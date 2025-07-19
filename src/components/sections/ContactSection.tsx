export default function ContactSection() {
  return (
    <section 
      id="contact"
      className="section-padding bg-primary-50"
      aria-labelledby="contact-heading"
    >
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            id="contact-heading"
            className="text-section-title text-gray-900 mb-6"
          >
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Ready to begin your accessible fitness journey? Contact us to schedule 
            a tour of our facility and learn more about our adaptive programs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="text-left space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <address className="not-italic text-gray-600">
                    123 Accessible Way<br />
                    Las Vegas, NV 89123
                  </address>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <a
                    href="tel:+17025551234"
                    className="text-gray-600 hover:text-primary-600 transition-colors focus-ring rounded"
                    aria-label="Call DRIVEN LV at 7 0 2 5 5 5 1 2 3 4"
                  >
                    (702) 555-1234
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <a
                    href="mailto:info@drivenlv.com"
                    className="text-gray-600 hover:text-primary-600 transition-colors focus-ring rounded"
                  >
                    info@drivenlv.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Hours and CTA */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Hours of Operation
              </h3>
              <div className="space-y-2 text-gray-600 mb-8">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <a
                  href="tel:+17025551234"
                  className="btn-primary w-full text-center"
                >
                  Schedule a Tour
                </a>
                <a
                  href="mailto:info@drivenlv.com"
                  className="btn-secondary w-full text-center"
                >
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
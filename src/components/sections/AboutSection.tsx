export default function AboutSection() {
  return (
    <section 
      id="about"
      className="section-padding bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              id="about-heading"
              className="text-section-title text-gray-900 mb-6"
            >
              About DRIVEN LV
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering individuals with disabilities through accessible fitness and adaptive programming
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Mission Statement */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Mission
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  DRIVEN LV is Las Vegas's premier accessible fitness center, dedicated to providing 
                  exceptional adaptive fitness programs and state-of-the-art accessible equipment 
                  for individuals with disabilities and their allies.
                </p>
                <p>
                  As a sister site to <a 
                    href="https://conquerparalysisnow.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline focus-ring rounded"
                    aria-label="Visit Conquer Paralysis Now website (opens in new tab)"
                  >
                    Conquer Paralysis Now
                  </a>, we share the same commitment to breaking down barriers and 
                  creating an inclusive environment where everyone can achieve their fitness goals.
                </p>
                <p>
                  Our approach combines evidence-based adaptive training methods with cutting-edge 
                  accessible technology to deliver personalized fitness solutions that meet each 
                  individual's unique needs and abilities.
                </p>
              </div>
            </div>

            {/* Stats/Features */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What Makes Us Unique
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Adaptive Trainers</h4>
                    <p className="text-gray-600">
                      Our team specializes in adaptive fitness and disability-specific training protocols
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accessible Equipment</h4>
                    <p className="text-gray-600">
                      State-of-the-art adaptive fitness equipment designed for all abilities
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Inclusive Community</h4>
                    <p className="text-gray-600">
                      A welcoming environment that celebrates diversity and individual achievements
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Programs</h4>
                    <p className="text-gray-600">
                      Customized fitness plans tailored to individual goals and capabilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection to Conquer Paralysis Now */}
          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              DRIVEN is a section of Conquer Paralysis Now
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
              DRIVEN LV operates under Conquer Paralysis Now. Together, we're building a network of accessible fitness 
              centers that serve individuals with disabilities across the country, providing 
              resources, support, and hope to those on their journey to conquer paralysis and 
              achieve their fitness goals.
            </p>
            <a
              href="https://conquerparalysisnow.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Visit Conquer Paralysis Now website (opens in new tab)"
            >
              Visit Conquer Paralysis Now
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 
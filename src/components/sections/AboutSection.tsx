'use client';

import { useRef, useEffect } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const focusableElements = useRef<HTMLElement[]>([]);

  // Set up keyboard navigation and focus management
  useEffect(() => {
    if (!sectionRef.current) return;

    // Get all focusable elements within the section
    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    focusableElements.current = Array.from(
      sectionRef.current.querySelectorAll(focusableSelectors)
    );

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && sectionRef.current) {
        const focusable = focusableElements.current;
        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    sectionRef.current.addEventListener('keydown', handleKeyDown);
    return () => {
      sectionRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="section-padding bg-white focus:outline-none"
      aria-labelledby="about-heading"
      tabIndex={-1}
      role="region"
      aria-label="About DRIVEN LV"
    >
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 
              id="about-heading"
              className="text-section-title text-gray-900 mb-6"
            >
              About DRIVEN LV
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering individuals with disabilities through accessible fitness and adaptive programming
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Mission Statement */}
            <article className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900" id="mission-heading">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" aria-labelledby="mission-heading">
                <p>
                  DRIVEN is a multidisciplinary center where individuals with disabilities can improve their physical, mental and emotional health, increase independence, and enhance their overall quality of life using a holistic approach to wellness. It is an extension of{' '}
                  <a 
                    href="https://conquerparalysisnow.org" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="text-primary-600 hover:text-primary-700 underline focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none rounded"
                    aria-label="Visit Conquer Paralysis Now website (opens in new tab)"
                  >
                    Conquer Paralysis Now
                  </a>
                  , a 501c3 non-profit organization.
                </p>
                <p>
                  DRIVEN provides options for individuals with disabilities to pursue a healthy, active lifestyle. DRIVEN's goal is to fill in the gaps in Southern Nevada and provide options for those with limited mobility. While offering a variety of new opportunities, DRIVEN will also coordinate with existing programs in the area that cater to this population to ensure that all of their needs are met.
                </p>
              </div>
            </article>

            {/* Stats/Features */}
            <aside className="bg-gray-50 rounded-lg p-8" aria-labelledby="unique-heading">
              <h2 id="unique-heading" className="text-2xl font-semibold text-gray-900 mb-6">
                What Makes Us Unique
              </h2>
              <div className="space-y-6" role="list" aria-label="Key features">
                <div className="flex items-start space-x-4" role="listitem">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1" aria-hidden="true">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Certified Adaptive Trainers</h3>
                    <p className="text-gray-600">
                      Our team specializes in adaptive fitness and disability-specific training protocols
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" role="listitem">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1" aria-hidden="true">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Accessible Equipment</h3>
                    <p className="text-gray-600">
                      State-of-the-art adaptive fitness equipment designed for all abilities
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" role="listitem">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1" aria-hidden="true">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Inclusive Community</h3>
                    <p className="text-gray-600">
                      A welcoming environment that celebrates diversity and individual achievements
                    </p>
                  </div>
                </div>
                

              </div>
            </aside>
          </div>

          {/* Connection to Conquer Paralysis Now */}
          <aside 
            className="bg-primary-50 rounded-lg p-8 text-center"
            aria-label="Connection to Conquer Paralysis Now"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DRIVEN is an extension of Conquer Paralysis Now
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
              DRIVEN LV operates under Conquer Paralysis Now. Together, we're building a network of accessible fitness 
              centers that serve individuals with disabilities across the country, providing 
              resources, support, and hope to those on their journey to conquer paralysis and 
              achieve their fitness goals.
            </p>
            <a
              href="https://conquerparalysisnow.org"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-primary focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
              aria-label="Visit Conquer Paralysis Now website (opens in new tab)"
            >
              Visit Conquer Paralysis Now
              <span className="sr-only">(opens in new tab)</span>
              <svg 
                className="ml-2 h-4 w-4 inline-block" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <title>External link icon</title>
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
} 
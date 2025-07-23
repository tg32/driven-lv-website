'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: string
  name: string
  condition: string
  image: string
  quote: string
  program: string
}

// Placeholder testimonials - replace with real testimonials from DRIVEN LV
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Javier Guerrero',
    condition: 'DRIVEN Member & Partner of a DRIVEN Training Client',
    image: '/driven-logo.png',
    quote: 'My girlfriend - who trains at DRIVEN too - is in a wheelchair with a disability that limits the strength in her arms and legs. Throughout my time here, the trainers have been amazing at helping her increase her overall strength and endurance. They\'ve also been able to train me on how to exercise better, carry her more properly so we\'re both safe, and exercises I can help her with at home. This place has been life-changing for us and has brought us closer together.',
    program: 'Partner Training Program'
  },
  {
    id: '2',
    name: 'Tammy Malmgren',
    condition: 'Wife of DRIVEN Client Darrell Malmgren',
    image: '/driven-logo.png',
    quote: 'After several months of Darrell using the Galileo at DRIVEN as part of his treatment for the high tone spasticity he has due to his brain injury, the spasticity has decreased so significantly that I was able to cancel the Botox injections for his legs! Darrell\'s strength is improving as well with the Galileo and training he is receiving from the trainers at DRIVEN. Both Darrell and I thank the team!',
    program: 'Galileo Treatment & Adaptive Training'
  },
  {
    id: '3',
    name: 'Cesar Robledo',
    condition: 'DRIVEN Training Client',
    image: '/driven-logo.png',
    quote: 'My favorite thing about DRIVEN is the level of professionalism and skill the trainers have when adapting to my physical abilities in creating different workouts. I don\'t feel like just any other patient who\'s been injured. Here, they personalize my workouts and continuously push me to MY full potential.',
    program: 'Personalized Adaptive Training'
  },

]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoRotateInterval = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([])

  // Set up auto-rotation of testimonials
  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return

    autoRotateInterval.current = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 8000) // Rotate every 8 seconds

    return () => {
      if (autoRotateInterval.current) {
        clearInterval(autoRotateInterval.current)
      }
    }
  }, [isPaused])

  // Pause auto-rotation when component unmounts
  useEffect(() => {
    return () => {
      if (autoRotateInterval.current) {
        clearInterval(autoRotateInterval.current)
      }
    }
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    // Reset auto-rotation timer
    if (autoRotateInterval.current) {
      clearInterval(autoRotateInterval.current)
    }
  }

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)
    // Reset auto-rotation timer
    if (autoRotateInterval.current) {
      clearInterval(autoRotateInterval.current)
    }
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
    // Reset auto-rotation timer
    if (autoRotateInterval.current) {
      clearInterval(autoRotateInterval.current)
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gray-50 focus:outline-none"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      tabIndex={-1}
    >
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="testimonials-heading"
            className="text-section-title text-gray-900 mb-6"
          >
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our amazing community members about their transformative 
            experiences at DRIVEN LV and how adaptive fitness has changed their lives.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div 
          className="max-w-4xl mx-auto mb-12"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured testimonial carousel"
        >
          <div 
            className="testimonial-card bg-white text-center p-8 md:p-12 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${currentTestimonial + 1} of ${testimonials.length}`}
            aria-live="polite"
            ref={el => {
              if (el) {
                testimonialRefs.current[currentTestimonial] = el;
              }
            }}
            tabIndex={0}
          >
            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-8">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={`Portrait of ${testimonials[currentTestimonial].name}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <cite className="not-italic">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].condition}
                  </div>
                  <div className="text-primary-600 text-sm font-medium">
                    {testimonials[currentTestimonial].program}
                  </div>
                </cite>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="btn-ghost p-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-label="Previous testimonial"
              aria-controls="testimonial-content"
              disabled={testimonials.length <= 1}
              aria-disabled={testimonials.length <= 1}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            {/* Testimonial Indicators */}
            <div 
              className="flex space-x-2" 
              role="tablist" 
              aria-label="Testimonials navigation"
            >
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  id={`testimonial-tab-${index}`}
                  onClick={() => goToTestimonial(index)}
                  className={`h-3 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                    index === currentTestimonial 
                      ? 'bg-primary-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  role="tab"
                  aria-selected={index === currentTestimonial}
                  aria-controls={`testimonial-${index}`}
                  aria-label={`View testimonial ${index + 1}: ${testimonial.name}`}
                  onFocus={() => setIsPaused(true)}
                  onBlur={() => setIsPaused(false)}
                  tabIndex={index === currentTestimonial ? 0 : -1}
                >
                  <span className="sr-only">Testimonial from {testimonial.name}</span>
                </button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="btn-ghost p-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-label="Next testimonial"
              aria-controls="testimonial-content"
              disabled={testimonials.length <= 1}
              aria-disabled={testimonials.length <= 1}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={testimonial.id}
              id={`testimonial-${index}`}
              className={`card transition-all duration-200 cursor-pointer p-6 rounded-lg ${
                index === currentTestimonial 
                  ? 'ring-2 ring-primary-500 bg-primary-50' 
                  : 'hover:shadow-lg bg-white'
              }`}
              onClick={() => goToTestimonial(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  goToTestimonial(index)
                }
              }}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              tabIndex={0}
              role="article"
              aria-labelledby={`testimonial-${index}-name`}
              aria-describedby={`testimonial-${index}-quote`}
              aria-current={index === currentTestimonial ? 'true' : 'false'}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <h3 id={`testimonial-${index}-name`} className="font-semibold text-gray-900 truncate">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 truncate">
                    {testimonial.condition}
                  </p>
                  <p className="text-xs text-primary-600 font-medium truncate">
                    {testimonial.program}
                  </p>
                </div>
              </div>
              <blockquote id={`testimonial-${index}-quote`} className="text-sm text-gray-700 line-clamp-4">
                <span className="sr-only">Testimonial:</span> "{testimonial.quote}"
              </blockquote>
              <span className="sr-only">
                {index === currentTestimonial ? '(Currently selected)' : ''}
                Click to view full testimonial
              </span>
            </article>
          ))}
        </div>


      </div>
    </section>
  )
} 
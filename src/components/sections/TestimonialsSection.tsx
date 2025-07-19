'use client'

import { useState } from 'react'
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
    name: 'Maria Rodriguez',
    condition: 'Spinal Cord Injury',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b142?w=200&h=200&fit=crop&crop=face',
    quote: 'DRIVEN LV has completely transformed my relationship with fitness. The adaptive equipment and knowledgeable trainers have helped me achieve goals I never thought possible after my injury. This place is truly life-changing.',
    program: 'Adaptive Strength Training'
  },
  {
    id: '2',
    name: 'James Chen',
    condition: 'Amputee',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    quote: 'The community at DRIVEN LV is incredible. Everyone here understands the unique challenges we face, and they celebrate every victory with you. I\'ve gained not just physical strength, but confidence and friendships that will last a lifetime.',
    program: 'Adaptive Cardio & Conditioning'
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    condition: 'Multiple Sclerosis',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    quote: 'As someone with MS, finding the right fitness program was challenging until I discovered DRIVEN LV. The trainers understand my condition and help me work within my limits while pushing me to improve. I feel stronger and more energetic than I have in years.',
    program: 'Adaptive Wellness Program'
  },
  {
    id: '4',
    name: 'David Thompson',
    condition: 'Traumatic Brain Injury',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    quote: 'DRIVEN LV helped me regain my independence and confidence after my TBI. The personalized approach and patient staff made all the difference in my recovery journey. This isn\'t just a gym - it\'s a place of healing and hope.',
    program: 'Cognitive-Physical Rehabilitation'
  },
  {
    id: '5',
    name: 'Lisa Martinez',
    condition: 'Stroke Survivor',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
    quote: 'After my stroke, I thought my active lifestyle was over. DRIVEN LV proved me wrong. With their adaptive programs and encouraging environment, I\'ve regained mobility and strength I never thought I\'d have again. Forever grateful!',
    program: 'Stroke Recovery Program'
  }
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <section 
      className="section-padding bg-gray-50"
      aria-labelledby="testimonials-heading"
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
        <div className="max-w-4xl mx-auto mb-12">
          <div 
            className="testimonial-card bg-white text-center p-8 md:p-12"
            role="region"
            aria-label={`Testimonial from ${testimonials[currentTestimonial].name}`}
            aria-live="polite"
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
              className="btn-ghost p-3"
              aria-label="Previous testimonial"
              disabled={testimonials.length <= 1}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            {/* Testimonial Indicators */}
            <div className="flex space-x-2" role="tablist" aria-label="Testimonials navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-primary-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  role="tab"
                  aria-selected={index === currentTestimonial}
                  aria-label={`View testimonial from ${testimonials[index].name}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="btn-ghost p-3"
              aria-label="Next testimonial"
              disabled={testimonials.length <= 1}
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
            <div 
              key={testimonial.id}
              className={`card transition-all duration-200 cursor-pointer ${
                index === currentTestimonial 
                  ? 'ring-2 ring-primary-500 bg-primary-50' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => goToTestimonial(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  goToTestimonial(index)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View full testimonial from ${testimonial.name}`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">
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
              <blockquote className="text-sm text-gray-700 line-clamp-4">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start your own success story?
          </p>
          <a
            href="#contact"
            className="btn-primary text-lg px-8 py-3"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  )
} 
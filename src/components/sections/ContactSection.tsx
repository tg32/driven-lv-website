'use client';

import { useState, useRef, useEffect } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Focus the first form field when the component mounts
  useEffect(() => {
    if (firstFieldRef.current) {
      firstFieldRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      // Reset error status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

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
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6" id="form-heading">
                Send Us a Message
              </h3>
              
              {formStatus === 'success' ? (
                <div 
                  className="mb-6 p-4 bg-green-50 text-green-800 rounded-md"
                  role="alert"
                  aria-live="polite"
                >
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : formStatus === 'error' ? (
                <div 
                  className="mb-6 p-4 bg-red-50 text-red-800 rounded-md"
                  role="alert"
                  aria-live="assertive"
                >
                  There was an error sending your message. Please try again.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} ref={formRef}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                      aria-required="true"
                      ref={firstFieldRef}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                        aria-required="true"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                        aria-describedby="phone-help"
                      />
                      <p id="phone-help" className="mt-1 text-xs text-gray-500">
                        Optional, but helpful
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                      aria-required="true"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="btn-primary w-full justify-center py-3 px-6 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      aria-busy={formStatus === 'submitting'}
                      aria-live="polite"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                    <p className="mt-2 text-xs text-gray-500">
                      <span className="text-red-600">*</span> Required fields
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="text-left space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <title>Location icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <address className="not-italic text-gray-600">
                    <a 
                      href="https://maps.google.com/?q=701+E+Bridger+Ave+Suite+150+Las+Vegas+NV+89101" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-50 rounded"
                    >
                                    701 E Bridger Ave Suite 150<br />
                Las Vegas, NV 89101
                    <span className="sr-only">(Opens in new tab)</span>
                    <svg 
                      className="w-3 h-3 inline-block ml-1 -mt-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <title>External link icon</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  </address>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <title>Phone icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <a
                    href="tel:+17024634874"
                    className="text-gray-600 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-50 rounded"
                    aria-label="Call DRIVEN LV at 7 0 2 4 6 3 4 8 7 4"
                  >
                    (702) 463-4874
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Available during business hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <title>Email icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <a
                    href="mailto:info@drivenlv.com"
                    className="text-gray-600 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-50 rounded"
                  >
                    info@drivenlv.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
            
            {/* Hours of Operation */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Hours of Operation
              </h3>
              <div className="space-y-2 text-gray-600 mb-8">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <time dateTime="09:00-17:00">9:00 AM - 5:00 PM</time>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <time dateTime="09:00-15:00">9:00 AM - 3:00 PM</time>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <a
                  href="tel:+17024634874"
                  className="btn-primary w-full text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  aria-label="Call to schedule a tour"
                >
                  Schedule a Tour
                </a>
                <a
                  href="#form"
                  className="btn-secondary w-full text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
                    document.getElementById('name')?.focus();
                  }}
                >
                  Send Us a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
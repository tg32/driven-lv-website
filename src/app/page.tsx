'use client';

import { useEffect } from 'react';
import Header from '@/components/ui/Header';
import HeroSection from '@/components/sections/HeroSection';
import InstagramSection from '@/components/sections/InstagramSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/ui/Footer';

export default function HomePage() {
  // Add page title for screen readers when the component mounts
  useEffect(() => {
    document.title = 'DRIVEN LV - Accessible Fitness for All';
    
    // Set focus to main content when the page loads
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.setAttribute('tabIndex', '-1');
      mainContent.focus();
      mainContent.removeAttribute('tabIndex');
    }
    
    // Clean up function
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:ring-2 focus:ring-primary-500 focus:rounded">
        Skip to main content
      </a>
      
      <Header />
      
      <main 
        id="main-content" 
        role="main" 
        className="min-h-screen focus:outline-none"
        tabIndex={-1}
      >
        <HeroSection />
        <InstagramSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer id="footer" />
      
      {/* Add a visually hidden region for live announcements */}
      <div 
        id="a11y-announcement" 
        aria-live="polite" 
        className="sr-only"
        aria-atomic="true"
      />
    </>
  );
}
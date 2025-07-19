import Header from '@/components/ui/Header'
import HeroSection from '@/components/sections/HeroSection'
import InstagramSection from '@/components/sections/InstagramSection'
import AboutSection from '@/components/sections/AboutSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/ui/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main id="main-content" role="main" className="min-h-screen">
        <HeroSection />
        <InstagramSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  )
} 
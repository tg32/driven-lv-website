import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  id?: string;
}

export default function Footer({ id }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      id={id}
      className="bg-gray-900 text-white"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="container-max section-padding !pt-16 !pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/driven-lv-website/driven-logo.png"
                alt="DRIVEN LV Logo"
                width={32}
                height={32}
                className="h-8"
              />
              <span className="text-xl font-bold">DRIVEN LV</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Las Vegas's premier accessible fitness center, empowering individuals with 
              disabilities through adaptive fitness programs and inclusive community support.
            </p>
            
            {/* Sister Site Link */}
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-2">Sister site to:</p>
              <a
                href="https://conquerparalysisnow.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors focus-ring rounded p-1"
                aria-label="Visit Conquer Paralysis Now website (opens in new tab)"
              >
                <span className="font-medium">Conquer Paralysis Now</span>
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/drivenlv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus-ring rounded p-1"
                  aria-label="Follow DRIVEN LV on Instagram (opens in new tab)"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.897.01 7.784.048 2.717.266.266 2.718.048 7.784.01 7.897 0 8.396 0 12.017c0 3.624.01 4.123.048 4.236.218 5.066 2.67 7.518 7.736 7.736.113.038.612.048 4.236.048 3.624 0 4.123-.01 4.236-.048 5.066-.218 7.518-2.67 7.736-7.736.038-.113.048-.612.048-4.236 0-3.621-.01-4.12-.048-4.233C23.734 2.67 21.282.218 16.216.048 16.103.01 15.604 0 12.017 0zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.672c-3.313 0-6 2.687-6 6 0 3.314 2.687 6 6 6s6-2.686 6-6c0-3.313-2.687-6-6-6zm0 9.837c-2.116 0-3.837-1.721-3.837-3.837S9.901 8.018 12.017 8.018s3.837 1.721 3.837 3.837-1.721 3.837-3.837 3.837zm7.982-10.018c0 .773-.627 1.4-1.4 1.4s-1.4-.627-1.4-1.4.627-1.4 1.4-1.4 1.4.627 1.4 1.4z" clipRule="evenodd" />
                  </svg>
                </a>
                
                <a
                  href="https://facebook.com/drivenlv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus-ring rounded p-1"
                  aria-label="Follow DRIVEN LV on Facebook (opens in new tab)"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                
                <a
                  href="https://youtube.com/@drivenlv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus-ring rounded p-1"
                  aria-label="Subscribe to DRIVEN LV on YouTube (opens in new tab)"
                >
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors focus-ring rounded p-1"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors focus-ring rounded p-1"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs"
                    className="text-gray-300 hover:text-white transition-colors focus-ring rounded p-1"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors focus-ring rounded p-1"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accessibility"
                    className="text-gray-300 hover:text-white transition-colors focus-ring rounded p-1"
                  >
                    Accessibility Statement
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <address className="not-italic space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>
                  701 E Bridger Ave Suite 150<br />
                  Las Vegas, NV 89101
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a
                  href="tel:+17024634874"
                  className="hover:text-white transition-colors focus-ring rounded p-1"
                  aria-label="Call DRIVEN LV at 7 0 2 4 6 3 4 8 7 4"
                >
                  (702) 463-4874
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a
                  href="mailto:info@drivenlv.com"
                  className="hover:text-white transition-colors focus-ring rounded p-1"
                >
                  info@drivenlv.com
                </a>
              </div>
            </address>

            {/* Hours */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Hours of Operation</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Monday - Friday: 9:00 AM - 5:00 PM</div>
                <div>Saturday: 9:00 AM - 3:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} DRIVEN LV. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors focus-ring rounded p-1"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors focus-ring rounded p-1"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-gray-400 hover:text-white transition-colors focus-ring rounded p-1"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
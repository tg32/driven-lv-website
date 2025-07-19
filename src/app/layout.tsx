import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'DRIVEN LV - Accessible Fitness for All',
    template: '%s | DRIVEN LV'
  },
  description: 'DRIVEN LV is Las Vegas\'s premier accessible fitness center, providing adaptive fitness programs and equipment for individuals with disabilities and their allies. Sister site to Conquer Paralysis Now.',
  keywords: ['accessible fitness', 'adaptive fitness', 'disability', 'Las Vegas gym', 'paralysis', 'rehabilitation', 'inclusive fitness'],
  authors: [{ name: 'DRIVEN LV' }],
  creator: 'DRIVEN LV',
  publisher: 'DRIVEN LV',
  metadataBase: new URL('https://drivenlv.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DRIVEN LV - Accessible Fitness for All',
    description: 'Las Vegas\'s premier accessible fitness center providing adaptive programs for individuals with disabilities.',
    url: 'https://drivenlv.com',
    siteName: 'DRIVEN LV',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DRIVEN LV - Accessible Fitness Center'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DRIVEN LV - Accessible Fitness for All',
    description: 'Las Vegas\'s premier accessible fitness center providing adaptive programs for individuals with disabilities.',
    images: ['/og-image.png'],
    creator: '@drivenlv'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional accessibility and performance meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#df1a20" />
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {/* Skip to main content link for screen readers */}
        <a 
          href="#main-content" 
          className="skip-link"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        
        {/* Main application wrapper with proper semantic structure */}
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
        
        {/* Live region for dynamic content announcements */}
        <div 
          id="live-region" 
          aria-live="polite" 
          aria-atomic="true" 
          className="sr-only"
        />
      </body>
    </html>
  )
} 
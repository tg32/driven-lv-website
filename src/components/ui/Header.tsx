'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface NavigationItem {
  name: string
  href: string
  current?: boolean
}

const navigation: Omit<NavigationItem, 'current'>[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
          menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Focus management for menu items
  useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a')
      firstLink?.focus()
    }
  }, [mobileMenuOpen])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40" role="banner">
      <div className="container-max section-padding !py-4">
        <nav 
          className="flex items-center justify-between" 
          role="navigation" 
          aria-label="Main"
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md p-1"
              aria-label="DRIVEN LV - Home"
            >
              <Image
                src="/driven-lv-website/driven-logo.png"
                alt="DRIVEN LV Logo"
                width={66}
                height={60}
                className="h-8 w-auto"
                priority
              />
              <span className="sr-only">DRIVEN LV Home</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1" role="menubar" aria-label="Main menu">
            {navigation.map((item) => {
              const isCurrent = pathname === item.href || 
                              (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isCurrent 
                      ? 'bg-primary-100 text-primary-700' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2`}
                  role="menuitem"
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {item.name}
                  {isCurrent && <span className="sr-only">(current)</span>}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              ref={menuButtonRef}
              type="button"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">
                {mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              </span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu"
          ref={menuRef}
          className={`md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
          aria-hidden={!mobileMenuOpen}
        >
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => {
              const isCurrent = pathname === item.href || 
                              (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isCurrent 
                      ? 'bg-primary-100 text-primary-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2`}
                  role="menuitem"
                  aria-current={isCurrent ? 'page' : undefined}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  {isCurrent && <span className="sr-only">(current page)</span>}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
} 
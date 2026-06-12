'use client'

import { useState } from 'react'
import Image from 'next/image'

const navLinks = ['Home', 'Product', 'Benefits', 'Technology', 'Wholesale', 'Contact']

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(6,26,69,0.97)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Coffee Creamer Plus"
              width={130}
              height={64}
              className="h-11 lg:h-14 w-auto object-contain"
              priority
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-150 tracking-wide"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Order Now CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#product"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-150"
              style={{ background: '#D99A22', color: '#061A45', boxShadow: '0 2px 16px rgba(217,154,34,0.35)' }}
            >
              Order Now
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden px-6 pb-5 pt-2" style={{ background: '#061A45', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/80 hover:text-[#D99A22] text-sm font-medium border-b transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              {link}
            </a>
          ))}
          <a
            href="#product"
            className="mt-4 flex justify-center py-3 rounded-lg font-bold text-sm"
            style={{ background: '#D99A22', color: '#061A45' }}
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  )
}

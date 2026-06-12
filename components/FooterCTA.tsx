import Image from 'next/image'

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #04153A 0%, #061A45 60%, #082B6F 100%)' }}>

      {/* Gold decorative curves — bottom-left SVG */}
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: 260, height: 200 }}>
        <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M -20 200 Q 60 140 180 170 Q 240 185 280 160" stroke="#D99A22" strokeWidth="2.5" fill="none" opacity="0.7"/>
          <path d="M -40 185 Q 40 120 160 155 Q 220 170 270 145" stroke="#D99A22" strokeWidth="1.5" fill="none" opacity="0.4"/>
          <path d="M -10 170 Q 80 100 200 140 Q 250 158 290 135" stroke="#F0B93A" strokeWidth="1" fill="none" opacity="0.25"/>
        </svg>
      </div>
      {/* Gold curves — top-right mirror */}
      <div className="absolute top-0 right-0 pointer-events-none rotate-180" style={{ width: 220, height: 160 }}>
        <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M -20 200 Q 60 140 180 170 Q 240 185 280 160" stroke="#D99A22" strokeWidth="2" fill="none" opacity="0.5"/>
          <path d="M -40 185 Q 40 120 160 155 Q 220 170 270 145" stroke="#D99A22" strokeWidth="1" fill="none" opacity="0.3"/>
        </svg>
      </div>

      {/* Main CTA row */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Logo + text */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-10 text-center lg:text-left">
            <Image
              src="/images/logo.png"
              alt="Coffee Creamer Plus"
              width={110}
              height={56}
              className="h-14 w-auto object-contain flex-shrink-0"
            />
            <div>
              <h2 className="font-display font-bold text-white leading-tight mb-1.5"
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}>
                Ready to stock Coffee Plus?
              </h2>
              <p className="text-white/60 text-sm max-w-md">
                Partner with us and bring premium non-dairy creamers to your customers.
              </p>
            </div>
          </div>

          {/* CTA button */}
          <a
            href="mailto:sales@coffeecreamerplus.com"
            className="flex-shrink-0 inline-flex items-center px-10 py-3.5 rounded-lg font-bold text-base transition-all duration-200 whitespace-nowrap"
            style={{ background: '#D99A22', color: '#061A45', boxShadow: '0 4px 24px rgba(217,154,34,0.30)' }}
          >
            Contact Sales
          </a>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">© 2025 Coffee Creamer Plus. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use', 'Contact'].map((l) => (
              <a key={l} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

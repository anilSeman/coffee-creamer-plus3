'use client'

import Image from 'next/image'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    label: 'Rich &\nCreamy Taste',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    label: 'Vegan\nFriendly',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    label: 'Dissolves\nInstantly',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: 'Long Shelf\nLife',
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #04153A 0%, #071E50 40%, #082B6F 100%)', minHeight: '88vh' }}
    >
      {/* Subtle radial glow behind the product area */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[70%] h-full"
          style={{ background: 'radial-gradient(ellipse 80% 90% at 75% 45%, rgba(180,120,20,0.18) 0%, transparent 70%)' }}
        />
        {/* Cream splash glow */}
        <div
          className="absolute top-[15%] right-[8%] w-[520px] h-[520px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(217,154,34,0.22) 0%, rgba(239,225,200,0.08) 45%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-10 lg:pt-28 lg:pb-12">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-0 items-center min-h-[calc(88vh-112px)]">

          {/* ── LEFT COLUMN ── */}
          <div className="order-2 lg:order-1 py-8 lg:py-0">
            <h1 className="font-display font-bold leading-[1.08] text-white mb-0"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              Enjoy a Rich, Creamy
            </h1>
            <h1 className="font-display font-bold leading-[1.08] mb-0"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: '#D99A22' }}>
              Vegan Friendly
            </h1>
            <h1 className="font-display font-bold leading-[1.08] text-white mb-5"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              Non-Dairy Creamer
            </h1>

            <p className="text-white/70 leading-relaxed mb-7 max-w-sm"
              style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}>
              Coffee Plus is crafted for coffee lovers who want a rich, smooth, and creamy coffee experience while choosing a vegan friendly creamer option.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#product"
                className="inline-flex items-center justify-center px-7 py-3 font-bold text-sm rounded-lg transition-all duration-200"
                style={{ background: '#D99A22', color: '#061A45', boxShadow: '0 4px 24px rgba(217,154,34,0.4)' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F0B93A')}
                onMouseLeave={e => (e.currentTarget.style.background = '#D99A22')}
              >
                Order Now
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center px-7 py-3 font-semibold text-sm rounded-lg border text-white transition-all duration-200 hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.35)' }}
              >
                View Product Details
              </a>
            </div>

            {/* Feature icon row */}
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ border: '1.5px solid rgba(217,154,34,0.55)', background: 'rgba(217,154,34,0.10)', color: '#D99A22' }}
                  >
                    {f.icon}
                  </div>
                  <span className="text-white/65 text-xs font-medium leading-tight whitespace-pre-line">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — product pouch ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-end relative" style={{ minHeight: '420px' }}>
            {/* Cream liquid splash SVG — mimics the mockup splash behind the pouch */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style={{ zIndex: 1 }}>
              <svg
                viewBox="0 0 560 560"
                className="absolute w-[460px] lg:w-[560px] h-auto"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -52%)' }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main cream splash blob */}
                <ellipse cx="280" cy="320" rx="200" ry="80" fill="rgba(239,225,200,0.07)" />
                {/* Outer glow ring */}
                <ellipse cx="280" cy="290" rx="230" ry="220" fill="rgba(217,154,34,0.07)" />
                {/* Splash arms — upper left */}
                <path d="M180 200 Q140 120 170 60 Q185 90 195 140 Q200 170 185 200 Z" fill="rgba(239,225,200,0.10)" />
                {/* Splash arms — upper right */}
                <path d="M370 190 Q410 110 400 50 Q385 80 375 130 Q368 162 375 195 Z" fill="rgba(239,225,200,0.10)" />
                {/* Splash droplet top */}
                <path d="M270 100 Q280 50 295 75 Q300 100 280 120 Z" fill="rgba(239,225,200,0.12)" />
                {/* Right side splash */}
                <path d="M400 250 Q470 220 500 240 Q470 265 430 270 Z" fill="rgba(239,225,200,0.09)" />
                {/* Lower cream pool */}
                <ellipse cx="280" cy="420" rx="170" ry="35" fill="rgba(239,225,200,0.06)" />
              </svg>
            </div>

            {/* Product pouch */}
            <div className="relative flex items-end justify-center w-full" style={{ zIndex: 2 }}>
              <Image
                src="/images/product-pouch.png"
                alt="Coffee Creamer Plus 400g Double Gusset Pouch"
                width={500}
                height={580}
                priority
                className="relative object-contain"
                style={{
                  width: 'clamp(260px, 40vw, 480px)',
                  height: 'auto',
                  filter: 'drop-shadow(0 24px 64px rgba(0,0,0,0.55)) drop-shadow(0 8px 24px rgba(217,154,34,0.25))',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

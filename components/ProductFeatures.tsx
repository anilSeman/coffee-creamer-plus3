import Image from 'next/image'

const bullets = [
  'Rich, creamy taste that complements your coffee',
  'Dissolves instantly in hot beverages',
  'Smooth texture with consistent whitening and stability',
  'Convenient for homes, offices, cafés, and retail shelves',
]

export default function ProductFeatures() {
  return (
    <section id="product" className="py-16 lg:py-24" style={{ background: '#EFE1C8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: product lifestyle scene ── */}
          <div className="relative flex items-end justify-center" style={{ minHeight: '380px' }}>
            {/* Warm wooden board / surface feel */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
              style={{
                width: '85%', height: 32,
                background: 'radial-gradient(ellipse, rgba(107,63,29,0.30) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
            />

            {/* Coffee beans scattered left */}
            <div className="absolute bottom-16 left-2 lg:left-8 flex flex-wrap gap-1.5 w-20 opacity-80">
              {[40, -20, 15, -35, 25, -10, 50, -5].map((r, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: 10 + (i % 3) * 2,
                    height: 16 + (i % 3) * 3,
                    background: '#6B3F1D',
                    transform: `rotate(${r}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Coffee cup — right side of scene */}
            <div className="absolute bottom-6 right-4 lg:right-10 flex flex-col items-center">
              {/* Cup body */}
              <div
                className="w-20 h-16 rounded-b-[2rem] relative shadow-lg"
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)' }}
              >
                {/* Coffee surface */}
                <div
                  className="absolute inset-x-3 top-2 h-8 rounded-full"
                  style={{ background: 'radial-gradient(ellipse, #C8843A 0%, #8B5012 60%, #5C3010 100%)' }}
                />
                {/* Latte art swirl */}
                <div
                  className="absolute inset-x-4 top-3 h-5 rounded-full opacity-60"
                  style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(239,225,200,0.9) 0%, transparent 70%)' }}
                />
                {/* Handle */}
                <div
                  className="absolute -right-4 top-2 w-4 h-10 rounded-r-full"
                  style={{ border: '2px solid rgba(0,0,0,0.12)', background: 'transparent' }}
                />
              </div>
              {/* Saucer */}
              <div
                className="w-24 h-3 rounded-full mt-0.5 shadow"
                style={{ background: 'linear-gradient(180deg, #fff 0%, #e8e0d5 100%)' }}
              />
            </div>

            {/* Powder bowl — bottom center */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-28 flex flex-col items-center">
              <div
                className="w-14 h-6 rounded-b-full shadow-sm"
                style={{ background: 'linear-gradient(180deg, #fff 0%, #f0e8dc 100%)', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                {/* powder mound */}
                <div
                  className="w-12 mx-auto -mt-2 h-4 rounded-full"
                  style={{ background: 'rgba(247,239,226,0.9)' }}
                />
              </div>
            </div>

            {/* Product pouch — hero of this section */}
            <div className="relative z-10">
              <Image
                src="/images/product-pouch.png"
                alt="Coffee Creamer Plus 400g Pouch"
                width={380}
                height={460}
                className="relative object-contain"
                style={{
                  width: 'clamp(200px, 32vw, 340px)',
                  height: 'auto',
                  filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.22))',
                }}
              />
            </div>
          </div>

          {/* ── RIGHT: copy ── */}
          <div>
            <p
              className="font-semibold text-sm uppercase tracking-widest mb-2"
              style={{ color: '#D99A22' }}
            >
              Product Features
            </p>
            <h2
              className="font-display font-bold text-[#061A45] leading-tight mb-8"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)' }}
            >
              Made to Elevate Every Cup
            </h2>

            <ul className="space-y-5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span
                    className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: '#D99A22' }}
                  >
                    <svg viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5">
                      <path d="M2 6l3 3 5-5" stroke="#061A45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#333] text-base leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

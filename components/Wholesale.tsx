import Image from 'next/image'

const bullets = [
  'Competitive pricing',
  'Consistent quality',
  'Reliable supply',
  'Retail-ready packaging',
]

export default function Wholesale() {
  return (
    <section
      id="wholesale"
      className="relative py-16 lg:py-20 overflow-hidden"
    >
      {/* Dark navy base + blurred supermarket atmosphere overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #04153A 0%, #071E50 60%, #082B6F 100%)' }} />
      {/* Shelf/grid texture overlay to evoke a supermarket */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.6) 60px, rgba(255,255,255,0.6) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 120px, rgba(255,255,255,0.3) 120px, rgba(255,255,255,0.3) 121px)
          `,
        }}
      />
      {/* Gold warm glow right side */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(160,100,20,0.18) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT: copy */}
          <div>
            <h2 className="font-display font-bold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              For Supermarkets,<br />
              Cafés &amp; Distributors
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Coffee Plus is available for bulk purchase and resale distribution. Partner with us to bring premium non-dairy creamers to more coffee lovers.
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ border: '1.5px solid #D99A22', background: 'rgba(217,154,34,0.12)' }}
                  >
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <path d="M2 6l3 3 5-5" stroke="#D99A22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-white/80 text-sm font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3 rounded-lg font-bold text-sm transition-all duration-200"
              style={{ background: '#D99A22', color: '#061A45', boxShadow: '0 4px 20px rgba(217,154,34,0.30)' }}
            >
              Request Wholesale Pricing
            </a>
          </div>

          {/* RIGHT: product + carton scene */}
          <div className="flex items-end justify-center gap-6 lg:gap-8 relative" style={{ minHeight: '300px' }}>

            {/* Scene glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 65%, rgba(217,154,34,0.12) 0%, transparent 70%)' }}
            />

            {/* Shadow on surface */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
              style={{ width: '80%', height: 20, background: 'rgba(0,0,0,0.4)', filter: 'blur(12px)' }}
            />

            {/* Coffee cup CSS */}
            <div className="relative z-10 flex-shrink-0 mb-4 self-end">
              <div
                className="w-16 h-14 rounded-b-3xl relative shadow-lg"
                style={{ background: '#fff' }}
              >
                <div
                  className="absolute inset-x-2 top-1.5 h-7 rounded-full"
                  style={{ background: 'radial-gradient(ellipse, #C8843A 0%, #7a4010 70%)' }}
                />
                <div
                  className="absolute inset-x-3 top-2.5 h-4 rounded-full opacity-50"
                  style={{ background: 'radial-gradient(ellipse 60% 40% at 45% 35%, rgba(247,239,226,0.9) 0%, transparent 70%)' }}
                />
                <div
                  className="absolute -right-3.5 top-2 w-3.5 h-9 rounded-r-full"
                  style={{ border: '2px solid rgba(0,0,0,0.1)' }}
                />
              </div>
              <div className="w-20 h-2 rounded-full mt-0.5 mx-auto" style={{ background: 'rgba(255,255,255,0.15)' }} />
            </div>

            {/* Powder bowl */}
            <div className="relative z-10 flex-shrink-0 mb-3 self-end">
              <div
                className="w-12 h-5 rounded-b-full shadow"
                style={{ background: 'rgba(255,255,255,0.9)' }}
              >
                <div className="w-10 mx-auto -mt-2 h-4 rounded-full" style={{ background: 'rgba(247,239,226,0.95)' }} />
              </div>
            </div>

            {/* Product pouch */}
            <div className="relative z-10 self-end">
              <Image
                src="/images/product-pouch.png"
                alt="Coffee Creamer Plus"
                width={200}
                height={240}
                className="object-contain"
                style={{
                  width: 'clamp(120px, 16vw, 190px)',
                  height: 'auto',
                  filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.5))',
                }}
              />
            </div>

            {/* Cardboard carton */}
            <div className="relative z-10 flex-shrink-0 self-end">
              <div
                className="rounded-lg overflow-hidden shadow-xl"
                style={{
                  width: 'clamp(110px, 14vw, 160px)',
                  height: 'clamp(130px, 17vw, 195px)',
                  background: 'linear-gradient(150deg, #D4904A 0%, #B87030 40%, #9A5C20 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {/* Box top flap shadow */}
                <div className="h-4 w-full" style={{ background: 'rgba(0,0,0,0.18)' }} />
                {/* Label area */}
                <div
                  className="mx-3 mt-2 rounded p-2 flex flex-col items-center justify-center text-center"
                  style={{ border: '1px solid rgba(217,154,34,0.4)', background: 'rgba(0,0,0,0.12)' }}
                >
                  <p className="text-white font-bold leading-tight" style={{ fontSize: '0.6rem' }}>Coffee<br/>Creamer<br/>Plus</p>
                  <p style={{ color: '#D99A22', fontSize: '0.45rem' }} className="mt-0.5 uppercase tracking-wide">NON-DAIRY CREAMER</p>
                </div>
                <p className="text-white/60 text-center mt-2" style={{ fontSize: '0.55rem' }}>12 × 400g</p>
                {/* Barcode lines decoration */}
                <div className="flex justify-center gap-px mt-2 px-4">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i} className="bg-white/20" style={{ width: i % 3 === 0 ? 2 : 1, height: 12 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

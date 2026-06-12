const benefits = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#D99A22" strokeWidth="2" className="w-12 h-12">
        <circle cx="24" cy="24" r="18" strokeOpacity="0.3"/>
        <circle cx="24" cy="24" r="12"/>
        <polyline points="20 24 23 27 29 21" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '- Vegan Friendly',
    desc: 'Made for coffee lovers seeking a rich, creamy non-dairy creamer option.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#D99A22" strokeWidth="2" className="w-12 h-12">
        <path d="M24 8v6M24 34v6M8 24h6M34 24h6" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="8"/>
        <path d="M13.1 13.1l4.2 4.2M30.7 30.7l4.2 4.2M13.1 34.9l4.2-4.2M30.7 17.3l4.2-4.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Biotechnology Formulated',
    desc: 'Made using advanced biotechnology for a smooth and creamy experience.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#D99A22" strokeWidth="2" className="w-12 h-12">
        <path d="M16 32 Q24 18 32 32" strokeLinecap="round"/>
        <path d="M20 32 Q24 22 28 32" strokeLinecap="round" strokeOpacity="0.5"/>
        <ellipse cx="24" cy="34" rx="8" ry="3"/>
      </svg>
    ),
    title: 'Smooth & Creamy',
    desc: 'Delivers rich creaminess, whitening, and a satisfying mouthfeel in every cup.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#D99A22" strokeWidth="2" className="w-12 h-12">
        <rect x="8" y="10" width="32" height="32" rx="4" ry="4"/>
        <line x1="30" y1="6" x2="30" y2="14"/><line x1="18" y1="6" x2="18" y2="14"/>
        <line x1="8" y1="22" x2="40" y2="22"/>
        <line x1="16" y1="30" x2="16" y2="30" strokeLinecap="round" strokeWidth="3"/>
        <line x1="24" y1="30" x2="24" y2="30" strokeLinecap="round" strokeWidth="3"/>
        <line x1="32" y1="30" x2="32" y2="30" strokeLinecap="round" strokeWidth="3"/>
        <line x1="16" y1="36" x2="16" y2="36" strokeLinecap="round" strokeWidth="3"/>
        <line x1="24" y1="36" x2="24" y2="36" strokeLinecap="round" strokeWidth="3"/>
      </svg>
    ),
    title: 'Long Shelf Life',
    desc: 'Shelf-stable and practical for homes, offices, cafés, and retail use.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-16 lg:py-20 overflow-hidden" style={{ background: '#F7EFE2' }}>
      {/* Scattered coffee beans decoration — left side */}
      <div className="absolute left-4 top-24 pointer-events-none opacity-30 hidden lg:block">
        {[0, 18, -12, 8].map((r, i) => (
          <div key={i} className="mb-3 rounded-full bg-[#6B3F1D]"
            style={{ width: 12, height: 20, transform: `rotate(${r}deg)`, marginLeft: i % 2 === 0 ? 0 : 8 }} />
        ))}
      </div>
      {/* Right side beans */}
      <div className="absolute right-6 bottom-24 pointer-events-none opacity-25 hidden lg:block">
        {[-15, 10, -5, 20].map((r, i) => (
          <div key={i} className="mb-2 rounded-full bg-[#6B3F1D]"
            style={{ width: 10, height: 17, transform: `rotate(${r}deg)`, marginLeft: i % 2 === 0 ? 4 : 0 }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-[#061A45]" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Why Choose{' '}
            <span style={{ color: '#D99A22' }}>Coffee Plus?</span>
          </h2>
        </div>

        {/* 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl px-6 pt-8 pb-7 flex flex-col items-center text-center"
              style={{ boxShadow: '0 2px 16px rgba(6,26,69,0.07)', border: '1px solid #EFE1C8' }}
            >
              <div className="mb-4">{b.icon}</div>
              <h3 className="font-display font-bold text-[#061A45] text-base mb-3 leading-tight">{b.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

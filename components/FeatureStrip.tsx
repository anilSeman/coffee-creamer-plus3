const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeLinecap="round"/>
        <rect x="3" y="3" width="18" height="18" rx="2"/>
      </svg>
    ),
    bold: '400g',
    label: 'Family-Size Pack',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    bold: 'Rich &',
    label: 'Creamy Taste',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <path d="M12 12l-2 2 4-4" />
        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    bold: 'Dissolves',
    label: 'Instantly',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="14" x2="8" y2="14" strokeLinecap="round" strokeWidth="2.5" />
        <line x1="12" y1="14" x2="12" y2="14" strokeLinecap="round" strokeWidth="2.5" />
        <line x1="16" y1="14" x2="16" y2="14" strokeLinecap="round" strokeWidth="2.5" />
        <line x1="8" y1="18" x2="8" y2="18" strokeLinecap="round" strokeWidth="2.5" />
        <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
    bold: 'Long',
    label: 'Shelf Life',
  },
]

export default function FeatureStrip() {
  return (
    <section className="bg-white" style={{ borderBottom: '1px solid #EFE1C8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-6 px-4 lg:px-8"
              style={{ borderRight: i < 3 ? '1px solid #EFE1C8' : 'none' }}
            >
              <div style={{ color: '#D99A22' }} className="flex-shrink-0">{f.icon}</div>
              <div>
                <p className="font-bold text-[#061A45] text-base leading-tight">{f.bold}</p>
                <p className="text-[#333] text-sm leading-tight">{f.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

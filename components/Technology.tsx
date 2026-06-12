const steps = [
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="#D99A22" strokeWidth="1.8" className="w-9 h-9">
        <path d="M18 4v6M18 26v6M6 18H2M34 18h-4" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="7"/>
        <path d="M10 10l4 4M22 22l4 4M10 26l4-4M22 14l4-4" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Microbial\nPrecision\nFermentation',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="#D99A22" strokeWidth="1.8" className="w-9 h-9">
        <circle cx="18" cy="9" r="4"/>
        <circle cx="8" cy="27" r="4"/>
        <circle cx="28" cy="27" r="4"/>
        <line x1="18" y1="13" x2="11" y2="23"/>
        <line x1="18" y1="13" x2="25" y2="23"/>
        <line x1="12" y1="27" x2="24" y2="27"/>
      </svg>
    ),
    label: 'Casein\nProtein\nCreation',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="#D99A22" strokeWidth="1.8" className="w-9 h-9">
        <circle cx="18" cy="18" r="6"/>
        <circle cx="18" cy="18" r="12" strokeOpacity="0.4" strokeDasharray="3 2"/>
        <path d="M18 6v4M18 26v4M6 18h4M26 18h4" strokeLinecap="round"/>
        <path d="M22 14l2-2M12 24l2-2M14 14l-2-2M24 24l-2-2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Food-Grade\nProcessing',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="#D99A22" strokeWidth="1.8" className="w-9 h-9">
        <path d="M28 14h1.5a5 5 0 0 1 0 10H28" strokeLinecap="round"/>
        <path d="M4 14h24v10.5A5 5 0 0 1 23 29H9a5 5 0 0 1-5-5V14z"/>
        <line x1="11" y1="8" x2="11" y2="14" strokeLinecap="round"/>
        <line x1="18" y1="8" x2="18" y2="14" strokeLinecap="round"/>
        <line x1="25" y1="8" x2="25" y2="14" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Creaminess +\nWhitening + Stability +\nSmooth Mouthfeel',
  },
]

export default function Technology() {
  return (
    <section id="technology" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display font-bold text-[#061A45]" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}>
            The Science Behind the Creaminess
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">

          {/* Left: text block */}
          <div className="space-y-4 text-[#444] text-sm leading-relaxed">
            <p>Our product is manufactured as a non-dairy creamer preparation.</p>
            <p>Coffee Plus uses sodium caseinate produced through a controlled synthesis process.</p>
            <p>
              In this process, casein protein is first created through microbial precision fermentation,
              then converted into sodium caseinate through food-grade processing.
            </p>
            <p>
              This means the sodium caseinate used in Coffee Plus is not extracted from cow's milk or any
              animal milk, making it a suitable choice for those seeking non-dairy, ethically produced,
              and functionally reliable ingredients.
            </p>
          </div>

          {/* Right: process flow */}
          <div>
            {/* Desktop: horizontal 4-step */}
            <div className="hidden md:grid grid-cols-4 gap-2 items-start">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-1">
                  <div className="flex flex-col items-center flex-1">
                    {/* Circle */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-3 flex-shrink-0"
                      style={{
                        background: 'linear-gradient(145deg, #061A45, #082B6F)',
                        border: '2px solid rgba(217,154,34,0.3)',
                        boxShadow: '0 4px 20px rgba(6,26,69,0.3)',
                      }}
                    >
                      {step.icon}
                    </div>
                    <p className="text-[#061A45] text-xs font-semibold text-center leading-snug whitespace-pre-line">
                      {step.label}
                    </p>
                  </div>
                  {/* Arrow */}
                  {i < steps.length - 1 && (
                    <div className="flex-shrink-0 mt-6 text-[#D99A22]">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M10 3l7 7-7 7-1.4-1.4L13.2 11H3V9h10.2L8.6 4.4z"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: vertical */}
            <div className="md:hidden space-y-3">
              {steps.map((step, i) => (
                <div key={i}>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(145deg, #061A45, #082B6F)',
                        border: '2px solid rgba(217,154,34,0.3)',
                      }}
                    >
                      {step.icon}
                    </div>
                    <p className="text-[#061A45] text-sm font-semibold leading-snug whitespace-pre-line">{step.label}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="ml-7 my-1 text-[#D99A22]">
                      <svg viewBox="0 0 20 24" fill="currentColor" className="w-4 h-5 rotate-90">
                        <path d="M10 3l7 7-7 7-1.4-1.4L13.2 11H3V9h10.2L8.6 4.4z"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

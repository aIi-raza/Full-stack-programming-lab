export default function HotDealsSection() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-2xl font-bold text-center text-gray-800 uppercase tracking-widest mb-6">
          Hot Deal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Deal 1 - Elite Collection */}
          <div className="relative overflow-hidden bg-gray-200 min-h-[200px] flex items-end">
            {/* Background room scene SVG */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100">
              <svg viewBox="0 0 400 220" className="w-full h-full opacity-60">
                {/* Floor */}
                <rect x="0" y="150" width="400" height="70" fill="#c8a96e" />
                {/* Wall */}
                <rect x="0" y="0" width="400" height="155" fill="#e8d5b0" />
                {/* Sofa */}
                <rect x="60" y="100" width="180" height="55" rx="5" fill="#8B6914" />
                <rect x="55" y="85" width="190" height="20" rx="5" fill="#C4903C" />
                <rect x="55" y="100" width="20" height="55" rx="3" fill="#C4903C" />
                <rect x="225" y="100" width="20" height="55" rx="3" fill="#C4903C" />
                {/* Cushions */}
                <rect x="80" y="90" width="45" height="12" rx="3" fill="#D4A84B" />
                <rect x="135" y="90" width="45" height="12" rx="3" fill="#D4A84B" />
                <rect x="188" y="90" width="30" height="12" rx="3" fill="#D4A84B" />
                {/* Coffee table */}
                <rect x="90" y="148" width="120" height="6" rx="1" fill="#8B6914" />
                <rect x="95" y="154" width="8" height="15" fill="#8B6914" />
                <rect x="197" y="154" width="8" height="15" fill="#8B6914" />
                {/* Bookcase */}
                <rect x="280" y="40" width="80" height="115" rx="2" fill="#C4903C" />
                <rect x="285" y="45" width="70" height="20" rx="1" fill="#D4A84B" />
                <rect x="285" y="70" width="70" height="20" rx="1" fill="#D4A84B" />
                <rect x="285" y="95" width="70" height="20" rx="1" fill="#D4A84B" />
                {/* Books */}
                <rect x="288" y="47" width="8" height="18" fill="#8B6914" />
                <rect x="298" y="47" width="6" height="18" fill="#5a3e0a" />
                <rect x="306" y="47" width="10" height="18" fill="#8B6914" />
              </svg>
            </div>

            {/* Text overlay */}
            <div className="relative z-10 p-5">
              <p className="text-gray-800 font-semibold text-sm">Elite Collection</p>
              <p className="text-brand-orange font-heading font-bold text-lg uppercase">
                Design Furniture
              </p>
            </div>

            {/* Badge */}
            <div className="absolute bottom-5 right-5 w-16 h-16 bg-brand-orange rounded-full flex flex-col items-center justify-center text-white z-10">
              <span className="font-bold text-lg leading-none">35%</span>
              <span className="text-xs leading-none">Sale OFF</span>
            </div>
          </div>

          {/* Deal 2 - Reclaimed */}
          <div className="relative overflow-hidden bg-gray-700 min-h-[200px] flex items-center">
            {/* Background SVG */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800">
              <svg viewBox="0 0 400 220" className="w-full h-full opacity-40">
                {/* Shelving */}
                <rect x="20" y="30" width="120" height="180" rx="3" fill="#8B6914" />
                <rect x="20" y="30" width="120" height="6" rx="1" fill="#C4903C" />
                <rect x="20" y="80" width="120" height="5" rx="1" fill="#C4903C" />
                <rect x="20" y="130" width="120" height="5" rx="1" fill="#C4903C" />
                {/* Chair */}
                <rect x="180" y="100" width="80" height="50" rx="5" fill="#C4903C" />
                <rect x="175" y="90" width="90" height="15" rx="3" fill="#D4A84B" />
                <rect x="175" y="100" width="15" height="50" rx="2" fill="#8B6914" />
                <rect x="250" y="100" width="15" height="50" rx="2" fill="#8B6914" />
                {/* Floor item */}
                <rect x="180" y="148" width="80" height="10" rx="1" fill="#8B6914" />
                <rect x="185" y="155" width="8" height="30" fill="#8B6914" />
                <rect x="247" y="155" width="8" height="30" fill="#8B6914" />
                {/* Stacked items */}
                <rect x="300" y="80" width="70" height="130" rx="2" fill="#C4903C" opacity="0.6" />
                <rect x="300" y="80" width="70" height="10" rx="1" fill="#8B6914" opacity="0.8" />
              </svg>
            </div>

            {/* Text */}
            <div className="relative z-10 p-5">
              <h3 className="font-heading text-xl font-bold text-white uppercase">
                Reclaimed and hand crafted
              </h3>
              <p className="text-brand-orange font-heading font-bold text-2xl mt-1">Sale OFF</p>
              <p className="font-heading font-bold text-5xl text-white">50%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

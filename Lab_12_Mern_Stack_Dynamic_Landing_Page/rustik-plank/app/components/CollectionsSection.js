const collections = [
  {
    id: 1,
    name: 'CHAIRS',
    subtitle: 'COLLECTION',
    bg: 'bg-gray-50',
    color: 'text-brand-orange',
    svgPath: (
      <svg viewBox="0 0 120 100" className="w-24 h-20 ml-auto opacity-80">
        {/* Chair */}
        <rect x="40" y="10" width="40" height="30" rx="2" fill="#C4903C" />
        <rect x="38" y="38" width="44" height="5" rx="1" fill="#8B6914" />
        <rect x="20" y="40" width="6" height="45" rx="1" fill="#C4903C" />
        <rect x="94" y="40" width="6" height="45" rx="1" fill="#C4903C" />
        <rect x="36" y="60" width="48" height="5" rx="1" fill="#8B6914" />
        <rect x="36" y="70" width="6" height="15" rx="1" fill="#C4903C" />
        <rect x="78" y="70" width="6" height="15" rx="1" fill="#C4903C" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'BEDS',
    subtitle: 'COLLECTION',
    bg: 'bg-white',
    color: 'text-brand-orange',
    svgPath: (
      <svg viewBox="0 0 120 100" className="w-24 h-20 ml-auto opacity-80">
        {/* Bed */}
        <rect x="15" y="55" width="90" height="25" rx="2" fill="#C4903C" />
        <rect x="15" y="40" width="90" height="18" rx="2" fill="#D4A84B" />
        <rect x="15" y="35" width="90" height="8" rx="2" fill="#8B6914" />
        <rect x="20" y="20" width="25" height="18" rx="3" fill="#C4903C" />
        <rect x="75" y="20" width="25" height="18" rx="3" fill="#C4903C" />
        <rect x="15" y="78" width="8" height="15" rx="1" fill="#8B6914" />
        <rect x="97" y="78" width="8" height="15" rx="1" fill="#8B6914" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'TABLES',
    subtitle: 'COLLECTION',
    bg: 'bg-gray-50',
    color: 'text-brand-orange',
    svgPath: (
      <svg viewBox="0 0 120 100" className="w-24 h-20 ml-auto opacity-80">
        {/* TV Console / Table */}
        <rect x="10" y="35" width="100" height="35" rx="2" fill="#C4903C" />
        <rect x="10" y="35" width="100" height="8" rx="2" fill="#8B6914" />
        <rect x="10" y="62" width="100" height="6" rx="1" fill="#8B6914" />
        <rect x="15" y="68" width="8" height="18" rx="1" fill="#C4903C" />
        <rect x="97" y="68" width="8" height="18" rx="1" fill="#C4903C" />
        <rect x="40" y="43" width="20" height="22" rx="1" fill="#8B6914" opacity="0.6" />
        <rect x="65" y="43" width="35" height="10" rx="1" fill="#8B6914" opacity="0.4" />
        <rect x="65" y="56" width="35" height="8" rx="1" fill="#8B6914" opacity="0.4" />
      </svg>
    ),
  },
]

export default function CollectionsSection() {
  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-gray-200">
          {collections.map((col, idx) => (
            <div
              key={col.id}
              className={`${col.bg} p-6 flex items-center justify-between ${
                idx < collections.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-gray-200' : ''
              } hover:shadow-inner cursor-pointer group transition-all`}
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 uppercase leading-tight group-hover:text-brand-orange transition-colors">
                  {col.name}
                </h3>
                <p className={`font-heading text-xl font-bold ${col.color} uppercase leading-tight`}>
                  {col.subtitle}
                </p>
              </div>
              <div>{col.svgPath}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

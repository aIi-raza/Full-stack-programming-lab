const partners = [
  { name: 'f4b', style: 'font-bold text-green-700 text-xl' },
  { name: 'Australian Government', style: 'text-xs text-blue-800 font-semibold text-center' },
  { name: 'QANTAS', style: 'font-bold text-red-700 text-lg italic' },
  { name: 'INTERRISK', style: 'font-bold text-blue-600 text-sm' },
  { name: 'GE Money', style: 'font-bold text-blue-800 text-sm' },
  { name: 'Rockwell Collins', style: 'font-bold text-blue-900 text-xs uppercase' },
  { name: 'LexisNexis', style: 'font-bold text-red-800 text-sm' },
  { name: 'oohlmedia', style: 'font-bold text-gray-700 text-sm' },
]

export default function PartnersSection() {
  return (
    <section className="py-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center">
              <span className={`${p.style} opacity-70 hover:opacity-100 transition-opacity cursor-pointer`}>
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

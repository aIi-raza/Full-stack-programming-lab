import ProductCard from './ProductCard'

const bowlSvg = (
  <svg viewBox="0 0 60 50" className="w-12 h-10">
    <ellipse cx="30" cy="32" rx="22" ry="10" fill="#C4903C" />
    <ellipse cx="30" cy="28" rx="22" ry="10" fill="#D4A84B" />
    <ellipse cx="30" cy="26" rx="20" ry="8" fill="#8B6914" opacity="0.6" />
    <ellipse cx="30" cy="24" rx="16" ry="6" fill="#5a3e0a" opacity="0.3" />
    <rect x="8" y="32" width="44" height="5" rx="2" fill="#C4903C" />
  </svg>
)

const tableSvg = (
  <svg viewBox="0 0 60 50" className="w-12 h-10">
    <rect x="5" y="18" width="50" height="5" rx="1" fill="#8B6914" />
    <rect x="8" y="23" width="44" height="12" rx="1" fill="#C4903C" />
    <rect x="8" y="35" width="5" height="10" fill="#C4903C" />
    <rect x="47" y="35" width="5" height="10" fill="#C4903C" />
  </svg>
)

const longTableSvg = (
  <svg viewBox="0 0 60 50" className="w-12 h-10">
    <rect x="3" y="20" width="54" height="5" rx="1" fill="#8B6914" />
    <rect x="3" y="25" width="54" height="8" rx="1" fill="#C4903C" />
    <rect x="5" y="33" width="4" height="12" fill="#C4903C" />
    <rect x="51" y="33" width="4" height="12" fill="#C4903C" />
  </svg>
)

const chairSvg = (
  <svg viewBox="0 0 60 50" className="w-12 h-10">
    <rect x="18" y="5" width="24" height="20" rx="2" fill="#C4903C" />
    <rect x="16" y="23" width="28" height="4" rx="1" fill="#8B6914" />
    <rect x="16" y="27" width="28" height="14" rx="1" fill="#C4903C" />
    <rect x="16" y="41" width="5" height="8" fill="#8B6914" />
    <rect x="39" y="41" width="5" height="8" fill="#8B6914" />
  </svg>
)

const adirondackSvg = (
  <svg viewBox="0 0 60 50" className="w-12 h-10">
    <rect x="5" y="10" width="20" height="30" rx="2" fill="#C4903C" />
    <rect x="5" y="38" width="50" height="5" rx="1" fill="#8B6914" />
    <rect x="20" y="28" width="35" height="12" rx="1" fill="#C4903C" />
    <rect x="42" y="40" width="5" height="8" fill="#8B6914" />
    <rect x="22" y="40" width="5" height="8" fill="#8B6914" />
  </svg>
)

const cabinetSvg = (
  <svg viewBox="0 0 60 50" className="w-12 h-10">
    <rect x="10" y="5" width="40" height="40" rx="1" fill="#C4903C" />
    <rect x="10" y="5" width="40" height="5" rx="1" fill="#8B6914" />
    <line x1="30" y1="10" x2="30" y2="45" stroke="#8B6914" strokeWidth="2" />
    <circle cx="25" cy="27" r="2" fill="#8B6914" />
    <circle cx="35" cy="27" r="2" fill="#8B6914" />
    <rect x="10" y="44" width="40" height="4" rx="1" fill="#8B6914" />
  </svg>
)

const bedSvg = (
  <svg viewBox="0 0 60 50" className="w-12 h-10">
    <rect x="5" y="25" width="50" height="15" rx="1" fill="#C4903C" />
    <rect x="5" y="20" width="50" height="8" rx="1" fill="#D4A84B" />
    <rect x="8" y="12" width="14" height="10" rx="2" fill="#C4903C" />
    <rect x="38" y="12" width="14" height="10" rx="2" fill="#C4903C" />
    <rect x="5" y="38" width="5" height="8" fill="#8B6914" />
    <rect x="50" y="38" width="5" height="8" fill="#8B6914" />
  </svg>
)

const chestSvg = (
  <svg viewBox="0 0 60 50" className="w-12 h-10">
    <rect x="8" y="15" width="44" height="25" rx="2" fill="#C4903C" />
    <rect x="8" y="12" width="44" height="6" rx="1" fill="#8B6914" />
    <rect x="8" y="38" width="44" height="4" rx="1" fill="#8B6914" />
    <rect x="12" y="40" width="8" height="6" fill="#8B6914" />
    <rect x="40" y="40" width="8" height="6" fill="#8B6914" />
    <rect x="26" y="25" width="8" height="4" rx="1" fill="#8B6914" />
  </svg>
)

const ornateChairSvg = (
  <svg viewBox="0 0 60 50" className="w-12 h-10">
    <path d="M15 40 Q10 20 20 10 Q30 5 40 10 Q50 20 45 40" fill="#C4903C" />
    <rect x="15" y="38" width="30" height="8" rx="1" fill="#8B6914" />
    <rect x="15" y="44" width="5" height="6" fill="#C4903C" />
    <rect x="40" y="44" width="5" height="6" fill="#C4903C" />
  </svg>
)

const columns = [
  {
    title: 'FEATURED',
    products: [
      { name: "This is Photoshop's version Lorem", price: '134.99', imageSrc: '/images/product_0_0.jpg' },
      { name: "This is Photoshop's version Lorem", price: '134.99', imageSrc: '/images/product_0_1.jpg' },
      { name: "This is Photoshop's version Lorem", price: '134.99', imageSrc: '/images/product_0_2.jpg' },
      { name: "This is Photoshop's version Lorem", price: '134.99', imageSrc: '/images/product_0_3.jpg' },
    ],
    seeAll: 'See All Feature',
  },
  {
    title: 'SPECIAL',
    products: [
      { name: "This is Photoshop's version Lorem", price: '134.99', oldPrice: '124.99', imageSrc: '/images/product_1_0.jpg' },
      { name: "This is Photoshop's version Lorem", price: '134.99', oldPrice: '124.99', imageSrc: '/images/product_1_1.jpg' },
      { name: "This is Photoshop's version Lorem", price: '134.99', oldPrice: '124.99', imageSrc: '/images/product_1_2.jpg' },
      { name: "This is Photoshop's version Lorem", price: '134.99', oldPrice: '124.99', imageSrc: '/images/product_1_3.jpg' },
    ],
    seeAll: 'See All Special',
  },
  {
    title: 'POPULAR',
    products: [
      { name: "This is Photoshop's version Lorem", price: '134.99', imageSrc: '/images/product_2_0.jpg' },
      { name: "This is Photoshop's version Lorem", price: '134.99', imageSrc: '/images/product_2_1.jpg' },
      { name: "This is Photoshop's version Lorem", price: '134.99', imageSrc: '/images/product_2_2.jpg' },
      { name: "This is Photoshop's version Lorem", price: '134.99', imageSrc: '/images/product_2_3.jpg' },
    ],
    seeAll: 'See All Popular',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
          {columns.map((col, colIdx) => (
            <div
              key={col.title}
              className={`p-5 ${colIdx < columns.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}`}
            >
              {/* Column Header */}
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gray-700 mb-4 pb-2 border-b border-gray-200">
                {col.title}
              </h3>

              {/* Products */}
              <div>
                {col.products.map((product, idx) => (
                  <ProductCard key={idx} {...product} />
                ))}
              </div>

              {/* See All */}
              <div className="text-center mt-4">
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-brand-orange transition-colors font-semibold uppercase"
                >
                  {col.seeAll}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

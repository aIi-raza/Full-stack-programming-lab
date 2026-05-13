import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden min-h-[340px] md:min-h-[420px] flex items-center">
      {/* Background decorative circle / shadow */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-white/20 blur-3xl absolute" />
      </div>

      {/* Orange wave / accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{
          background: 'linear-gradient(90deg, #E07B20 0%, #E07B20 60%, transparent 100%)',
        }}
      />
      {/* Orange curved accent */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        style={{ height: '80px' }}
      >
        <path
          d="M0,60 Q300,10 600,50 Q900,90 1200,30 L1200,80 L0,80 Z"
          fill="none"
          stroke="#E07B20"
          strokeWidth="3"
        />
      </svg>

      <div className="max-w-6xl mx-auto px-4 w-full flex flex-col md:flex-row items-center gap-8 py-10">
        {/* Furniture image */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative w-full max-w-lg aspect-video">
             <img src="/images/hero_chair.png" alt="Hero Chair" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Hero text */}
        <div className="flex-1 text-right md:text-right">
          {/* Orange icon accent */}
          <div className="flex justify-end mb-4">
            <div className="w-10 h-10 bg-brand-orange/90 flex items-center justify-center">
              <ShoppingCart size={20} className="text-white" />
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-xs ml-auto">
            This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            sagittis sem nibh id elit.
          </p>

          <div className="mb-4">
            <span className="text-brand-orange font-heading text-4xl font-bold">£129</span>
            <sup className="text-brand-orange text-lg font-bold">.99</sup>
            <span className="text-gray-500 text-xs uppercase ml-2 font-semibold">OUR PRICE</span>
          </div>

          <button className="bg-gray-800 text-white px-6 py-2 text-xs uppercase font-semibold hover:bg-brand-orange transition-colors duration-200 flex items-center gap-2 ml-auto">
            ADD TO <ShoppingCart size={14} />
          </button>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-orange transition-colors">
        <ChevronLeft size={36} />
      </button>
      <button className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-brand-orange hover:text-brand-orange transition-colors">
        <ChevronRight size={36} />
      </button>
    </section>
  )
}

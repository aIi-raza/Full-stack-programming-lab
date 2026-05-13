export default function BuyOnlineBanner() {
  return (
    <section className="bg-amber-50 border-t border-b border-amber-200 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center gap-4">
        {/* Left: BUY ONLINE */}
        <div className="text-left flex-shrink-0">
          <p className="font-heading font-bold text-3xl text-green-600 uppercase leading-tight">
            BUY ONLINE
          </p>
          <p className="font-heading font-bold text-xl text-gray-800 uppercase leading-tight">
            PICK UP IN STORE
          </p>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-12 bg-amber-300 mx-4" />

        {/* Right: text */}
        <div>
          <p className="font-semibold text-sm text-gray-700 uppercase tracking-wide">
            NOW AVAILABLE IN OUR STORE SYSTEM
          </p>
          <p className="text-xs text-gray-500 mt-1">
            AVAILABLE ON SELECT PRODUCTS.{' '}
            <a href="#" className="text-brand-orange underline font-semibold hover:no-underline">
              LEARN MORE
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

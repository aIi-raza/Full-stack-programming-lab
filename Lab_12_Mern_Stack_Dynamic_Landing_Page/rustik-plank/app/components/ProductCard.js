import Image from 'next/image';

// Shared product card used in Featured / Special / Popular columns
export default function ProductCard({ name, price, oldPrice, imageSrc }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
      {/* Product image */}
      <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded overflow-hidden relative">
        {imageSrc ? (
          <Image src={imageSrc} alt={name || 'Product Image'} fill style={{ objectFit: 'contain' }} />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
             <span className="text-xs text-gray-400">No Image</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-600 leading-tight truncate">
          {name || 'This is Photoshop\'s version Lorem'}
        </p>
        <div className="flex items-center gap-2 mt-1">
          {oldPrice && (
            <span className="text-gray-400 line-through text-xs">£{oldPrice}</span>
          )}
          <span className="text-brand-orange font-bold text-sm">£{price || '134.99'}</span>
        </div>
        <button className="mt-1 border border-gray-400 text-gray-600 text-xs px-3 py-0.5 hover:border-brand-orange hover:text-brand-orange transition-colors uppercase">
          Detail
        </button>
      </div>
    </div>
  )
}

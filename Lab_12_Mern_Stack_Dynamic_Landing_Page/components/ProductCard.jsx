"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, compact = false }) {
  const cart = useCart();
  const id = product._id || product.id || product.sku;

  return (
    <article className={compact ? "grid min-h-[132px] grid-cols-[112px_1fr] items-center gap-5 border-b border-[#e5e5e5] py-4" : "border border-[#dedede] bg-white p-3 shadow-soft"}>
      <Link href={`/products/${id}`} className={compact ? "block h-[92px] w-[112px]" : "block aspect-square w-full"}>
        <img src={product.images?.[0]} alt={product.name} className="h-full w-full object-contain mix-blend-multiply" />
      </Link>
      <div className={compact ? "min-w-0 text-[9px]" : "pt-3 text-center"}>
        <Link href={`/products/${id}`} className={compact ? "line-clamp-2 font-semibold leading-[1.15] text-[#222]" : "serif block text-[16px] font-bold text-[#222]"}>
          {compact ? "This is Photoshop's version Lorem" : product.name}
        </Link>
        {product.originalPrice && (
          <div className="mt-1 text-[9px] text-[#999] line-through">£{product.originalPrice.toFixed(2)}</div>
        )}
        <div className="mt-2 text-[12px] font-normal text-rust">£{product.price.toFixed(2)}</div>
        {compact ? (
          <Link href={`/products/${id}`} className="detail-button mt-3 inline-block text-[#111]">Detail</Link>
        ) : (
          <div className="mt-3 flex justify-center gap-2">
            <button onClick={() => cart?.addToCart(id)} className="bg-rust px-3 py-2 text-[11px] font-bold uppercase text-white">
              Add to Cart
            </button>
            <Link href={`/products/${id}`} className="border border-[#bbb] px-3 py-2 text-[11px] uppercase">
              Detail
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

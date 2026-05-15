"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductDetailActions({ productId }) {
  const [quantity, setQuantity] = useState(1);
  const cart = useCart();

  return (
    <div className="mt-7 flex flex-wrap items-center gap-3">
      <div className="flex h-11 border border-[#bbb]">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 text-lg">-</button>
        <input value={quantity} onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))} className="w-12 border-x border-[#bbb] text-center" />
        <button onClick={() => setQuantity(quantity + 1)} className="w-10 text-lg">+</button>
      </div>
      <button onClick={() => cart?.addToCart(productId, quantity)} className="h-11 bg-rust px-8 text-[12px] font-bold uppercase text-white">ADD TO CART</button>
      <button className="h-11 border border-[#bbb] px-7 text-[12px] font-bold uppercase">ADD TO WISHLIST</button>
    </div>
  );
}

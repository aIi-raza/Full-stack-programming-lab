"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartTable() {
  const cartContext = useCart();
  const items = cartContext?.cart?.items || [];
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <div className="overflow-x-auto border border-[#dedede] bg-white">
        <table className="w-full min-w-[760px] text-left text-[13px]">
          <thead className="bg-[#f4f4f4] uppercase">
            <tr>
              {["Product Image", "Product Name", "Price", "Quantity", "Subtotal", "Remove"].map((head) => (
                <th key={head} className="px-4 py-3">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const product = item.productId;
              const id = product?._id || product;
              return (
                <tr key={id} className="border-t border-[#e5e5e5]">
                  <td className="px-4 py-4"><img src={product?.images?.[0]} alt={product?.name} className="h-20 w-24 object-contain" /></td>
                  <td className="px-4 py-4 font-semibold">{product?.name}</td>
                  <td className="px-4 py-4 text-rust">£{item.price.toFixed(2)}</td>
                  <td className="px-4 py-4">
                    <input type="number" min="1" value={item.quantity} onChange={(event) => cartContext.updateQuantity(id, event.target.value)} className="w-16 border border-[#bbb] p-2 text-center" />
                  </td>
                  <td className="px-4 py-4 font-bold">£{(item.price * item.quantity).toFixed(2)}</td>
                  <td className="px-4 py-4">
                    <button onClick={() => cartContext.removeItem(id)} aria-label="Remove"><X size={18} /></button>
                  </td>
                </tr>
              );
            })}
            {items.length === 0 && (
              <tr><td colSpan="6" className="px-4 py-10 text-center text-[#777]">Your cart is empty.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_330px]">
        <div>
          <div className="flex max-w-[430px]">
            <input placeholder="Coupon code" className="min-w-0 flex-1 border border-[#bbb] px-3 py-3" />
            <button className="border border-l-0 border-[#333] px-5 text-[12px] font-bold">APPLY COUPON</button>
          </div>
          <Link href="/shop" className="mt-5 inline-block text-[13px] text-[#555]">Continue Shopping</Link>
        </div>
        <div className="border border-[#dedede] bg-[#f8f8f8] p-5">
          <h2 className="serif mb-4 text-[22px] font-bold">Cart Summary</h2>
          <div className="space-y-3 text-[14px]">
            <div className="flex justify-between"><span>Subtotal</span><span>£{subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
            <div className="flex justify-between border-t border-[#ddd] pt-3 text-[18px] font-bold"><span>Total</span><span>£{subtotal.toFixed(2)}</span></div>
          </div>
          <button className="mt-5 w-full bg-rust py-3 text-[12px] font-bold uppercase text-white">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

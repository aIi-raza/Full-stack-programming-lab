"use client";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { CARD_BG } from "@/lib/data";

export default function CartPage() {
  const { cart, cartTotal, cartCount, removeFromCart, updateQty } = useStore();

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt; Shopping Cart
      </p>
      <h1 className="page-heading">Shopping Cart</h1>

      <div className="page-box">
        {cart.length === 0 ? (
          <p style={{ textAlign: "center", padding: 30, color: "#888" }}>
            Your cart is empty.{" "}
            <Link href="/category" className="inline-link">Continue shopping</Link>
          </p>
        ) : (
          <>
            <table className="cart-tbl">
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <tr key={item.id}>
                    <td>
                      <div className="cart-prod-thumb" style={{ background: CARD_BG[idx % CARD_BG.length], color: "#fff" }}>♨</div>
                    </td>
                    <td>
                      <div className="cart-prod-name">{item.name}</div>
                      <div className="cart-desc">{(item.desc || "").substring(0, 60)}...</div>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="qty-box"
                        value={item.qty}
                        min={1}
                        onChange={(e) => updateQty(item.id, parseInt(e.target.value) || 1)}
                      />
                    </td>
                    <td>${item.salePrice.toFixed(2)}</td>
                    <td>
                      ${(item.salePrice * item.qty).toFixed(2)}
                      <button className="cart-remove" onClick={() => removeFromCart(item.id)}>
                        Remove | Edit Your Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ background: "#f9f9f9", border: "1px solid var(--border)", borderRadius: 4, padding: 15, marginTop: 14, textAlign: "right" }}>
              <div className="cart-total-row">
                Cart summary ({cartCount} item{cartCount !== 1 ? "s" : ""}) — Total:
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 12 }}>
                <Link href="/category" className="btn-hs btn-dark">CONTINUE SHOPPING</Link>
                <Link href="/checkout" className="btn-hs btn-red">PROCEED TO CHECKOUT</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

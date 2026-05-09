"use client";
import Link from "next/link";
import { useState } from "react";
import { cartItems } from "@/lib/data";

export default function CartPage() {
  const [items, setItems] = useState(cartItems);

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const removeItem = (id: number) => setItems(items.filter((i) => i.id !== id));

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; Shopping Cart
      </p>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Shopping Cart</h1>
      <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 20 }}>
        <h3 style={{ fontWeight: "bold", marginBottom: 12 }}>Your Shopping Cart</h3>
        <div style={{ backgroundColor: "#dff0d8", border: "1px solid #d6e9c6", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#3c763d" }}>
          ✓ <strong>{items[0]?.name}</strong> was just added cart.
        </div>
        <div style={{ fontSize: 12, display: "flex", justifyContent: "flex-end", marginBottom: 6, color: "#666" }}>
          Items added: <span style={{ color: "#cc0000", marginLeft: 4, fontWeight: "bold" }}>user_name</span>
          <span style={{ marginLeft: "auto" }}>Items total</span>
        </div>

        {items.map((item) => (
          <div key={item.id} style={{ borderTop: "1px solid #eee", padding: "12px 0", display: "flex", gap: 16, alignItems: "flex-start", fontSize: 12 }}>
            <div style={{ width: 60, height: 60, backgroundColor: "#e0e0e0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#999", fontSize: 10 }}>IMG</span>
            </div>
            <div style={{ flex: 1 }}>
              <Link href="/product/1" style={{ color: "#0066cc", fontWeight: "bold" }}>{item.name}</Link>
              <p style={{ color: "#666", marginTop: 4 }}>220 V/50 AMP – 4.5KW Heater 110 V/15 AMP – 1KW Heater/convertible To 220 V / 4KW Heater</p>
              <div style={{ marginTop: 6, display: "flex", gap: 16 }}>
                <span>Quantity: <select style={{ border: "1px solid #ccc", padding: "2px 4px" }}><option>{item.qty}</option></select></span>
                <span style={{ color: "#666" }}>{item.delivery}</span>
              </div>
              <div style={{ marginTop: 6, display: "flex", gap: 12 }}>
                <button onClick={() => removeItem(item.id)} style={{ color: "#cc0000", background: "none", border: "none", cursor: "pointer", fontSize: 12 }}>Remove</button>
                <span style={{ color: "#999" }}>|</span>
                <a href="#" style={{ color: "#cc0000" }}>Edit Your Order</a>
              </div>
            </div>
            <div style={{ fontWeight: "bold" }}>${(item.price * item.qty).toFixed(2)}</div>
          </div>
        ))}

        <div style={{ borderTop: "1px solid #eee", paddingTop: 12, textAlign: "right", fontSize: 13 }}>
          <p>Cart summary ({items.length} items)</p>
          <p style={{ fontWeight: "bold", fontSize: 16 }}>Total: ${total.toFixed(2)}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 12 }}>
          <Link href="/category" style={{ border: "1px solid #ccc", padding: "7px 16px", fontSize: 12, display: "inline-block", color: "#333" }}>CONTINUE SHOPPING</Link>
          <Link href="/checkout/payment" style={{ backgroundColor: "#cc0000", color: "white", padding: "7px 20px", fontWeight: "bold", fontSize: 12, display: "inline-block" }}>PROCEED TO CHECKOUT</Link>
        </div>
      </div>
    </div>
  );
}

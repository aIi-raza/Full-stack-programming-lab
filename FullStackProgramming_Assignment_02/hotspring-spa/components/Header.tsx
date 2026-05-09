"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header>
      {/* Top bar */}
      <div style={{ backgroundColor: "#f5f5f5", borderBottom: "1px solid #ddd", padding: "4px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}>
          <span>Call for Customer support: <span style={{ color: "#cc0000", fontWeight: "bold" }}>020 38989565</span></span>
          <div style={{ display: "flex", gap: 16 }}>
            <Link href="/account" style={{ color: "#333" }}>My Account</Link>
            <Link href="/wishlist" style={{ color: "#333" }}>Wishlist</Link>
            <Link href="/checkout/payment" style={{ color: "#333" }}>To Checkout</Link>
          </div>
        </div>
      </div>

      {/* Logo + Cart bar */}
      <div style={{ backgroundColor: "white", padding: "10px 0", borderBottom: "1px solid #ddd" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/">
            <div>
              <span style={{ fontSize: 32, fontWeight: 900, color: "#222", fontFamily: "Georgia, serif", letterSpacing: -1 }}>HotSpring</span>
              <span style={{ fontSize: 11, display: "block", color: "#cc0000", fontStyle: "italic" }}>Portable Spas</span>
            </div>
          </Link>
          <Link href="/cart" style={{ display: "flex", alignItems: "center", gap: 8, color: "#333", fontSize: 13 }}>
            <span style={{ backgroundColor: "#cc0000", color: "white", padding: "4px 10px", fontSize: 12 }}>🛒 My Cart: 0 Items</span>
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <div style={{ backgroundColor: "white", borderBottom: "2px solid #cc0000" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
          <nav style={{ display: "flex", gap: 24, fontSize: 13 }}>
            {[
              { label: "HOME", href: "/" },
              { label: "PRODUCTS", href: "/category" },
              { label: "SPECIAL OFFERS", href: "/category?sale=true" },
              { label: "CONTACT", href: "/contact" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ padding: "10px 0", display: "inline-block", color: "#555", borderBottom: "2px solid transparent" }}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Red search bar */}
      <div style={{ backgroundColor: "#cc0000", padding: "6px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", gap: 0, fontSize: 13 }}>
            <Link href="/category" style={{ color: "white", padding: "4px 14px", borderRight: "1px solid rgba(255,255,255,0.4)" }}>CATAGORY</Link>
            <Link href="/category?brand=true" style={{ color: "white", padding: "4px 14px", borderRight: "1px solid rgba(255,255,255,0.4)" }}>BRAND</Link>
            <Link href="/about" style={{ color: "white", padding: "4px 14px" }}>INFO</Link>
          </div>
          <div style={{ flex: 1, display: "flex" }}>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ flex: 1, padding: "5px 10px", border: "none", fontSize: 13 }}
            />
            <button style={{ backgroundColor: "#444", color: "white", padding: "5px 16px", border: "none", cursor: "pointer", fontSize: 13 }}>
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

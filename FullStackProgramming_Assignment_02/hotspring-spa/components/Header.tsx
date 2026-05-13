"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStore } from "@/lib/store";

export default function Header() {
  const { cartCount, user, logout } = useStore();
  const [search, setSearch] = useState("");
  const router = useRouter();

  function doSearch() {
    if (!search.trim()) return;
    router.push(`/category?search=${encodeURIComponent(search.trim())}`);
    setSearch("");
  }

  return (
    <header>
      {/* TOP BAR */}
      <div className="hs-topbar">
        <div className="hs-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>
              Call for Customer support:{" "}
              <a href="tel:02038989565">020 38989565</a>
            </span>
            <div className="top-links">
              {user ? (
                <>
                  <Link href="/account">My Account</Link>
                  <button
                    onClick={logout}
                    style={{ background: "none", border: "none", color: "#bbb", fontSize: 12, cursor: "pointer", marginLeft: 18 }}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login">Sign In</Link>
                  <Link href="/register">Register</Link>
                </>
              )}
              <Link href="#">Wishlist</Link>
              <Link href="/cart">To Checkout</Link>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER — Logo + Cart */}
      <div className="hs-header">
        <div className="hs-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" style={{ lineHeight: 1 }}>
              <div className="brand-name">
                HOTSPRING<sup style={{ fontSize: 14 }}>®</sup>
              </div>
              <div className="brand-sub">Portable Spas</div>
            </Link>
            <Link href="/cart" className="cart-btn">
              <span>🛒</span>
              <span>My Cart:</span>
              <span className="cart-badge">{cartCount}</span>
              <span>{cartCount !== 1 ? "Items" : "Item"}</span>
              <span style={{ fontSize: 10 }}>▼</span>
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="hs-mainnav">
        <div className="hs-container">
          <div style={{ display: "flex" }}>
            <Link href="/" className="nav-link">HOME</Link>
            <Link href="/category" className="nav-link">PRODUCTS</Link>
            <Link href="/category?search=special" className="nav-link">SPECIAL OFFERS</Link>
            <Link href="/contact" className="nav-link">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* RED NAV + SEARCH */}
      <div className="hs-rednav">
        <div className="hs-container" style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Link href="/category" className="rn-link">CATEGORY</Link>
            <Link href="/category" className="rn-link">BRAND</Link>
            <Link href="/about" className="rn-link">INFO</Link>
          </div>
          <div style={{ flex: 1, display: "flex" }}>
            <input
              type="text"
              className="hs-search-input"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && doSearch()}
            />
            <button className="hs-search-btn" onClick={doSearch}>
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

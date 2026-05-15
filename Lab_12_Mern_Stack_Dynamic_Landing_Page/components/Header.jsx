"use client";
 
import Link from "next/link";
import { Facebook, Search, ShoppingCart, Twitter, X, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
 
const categories = ["beds", "cabinets", "bookcases", "boxes", "chairs", "tables"];
 
export default function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const cart = useCart();
 
  function submitSearch(event) {
    event.preventDefault();
    if (query.trim()) router.push(`/shop?search=${encodeURIComponent(query.trim())}`);
  }
 
  return (
    <header
      style={{
        background:
          "radial-gradient(ellipse 80% 120% at 50% -10%, #ffffff 0%, #f0f0f0 40%, #d8d8d8 100%)",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 16px",
          position: "relative",
        }}
      >
        {/* Top-right: social icons + phone */}
        <div
          style={{
            position: "absolute",
            right: "16px",
            top: "12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "11px",
            fontWeight: "700",
            color: "#1a1a1a",
          }}
          className="hidden md:flex"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "11px", fontWeight: "900" }}>Y!</span>
            <span style={{ fontSize: "11px", fontWeight: "900" }}>G+</span>
            <Twitter size={13} fill="#111" strokeWidth={0} />
            <Facebook size={12} fill="#111" strokeWidth={0} />
          </div>
          <span style={{ fontSize: "11px", fontWeight: "700", marginLeft: "4px" }}>
            07584 031409
          </span>
        </div>
 
        {/* Middle row: Logo | Nav | Account+Cart */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "flex-end",
            minHeight: "82px",
            paddingBottom: "8px",
            paddingTop: "28px",
            gap: "20px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "36px",
              fontWeight: "bold",
              letterSpacing: "-0.055em",
              lineHeight: 1,
              textDecoration: "none",
              justifySelf: "start",
            }}
          >
            <span style={{ color: "#d4600a" }}>R</span>
            <span style={{ color: "#111111" }}>ustik Plank</span>
          </Link>
 
          {/* Center nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              paddingBottom: "4px",
              fontSize: "11px",
              fontStyle: "italic",
              color: "#111",
            }}
            className="hidden md:flex"
          >
            <Link href="/" style={{ color: "#111", textDecoration: "none" }}>Home</Link>
            <Link href="/blog" style={{ color: "#111", textDecoration: "none" }}>Blog</Link>
            <Link href="/about" style={{ color: "#111", textDecoration: "none" }}>About Us</Link>
            <Link href="/contact" style={{ color: "#111", textDecoration: "none" }}>Contact Us</Link>
          </nav>
 
          {/* Right: My Account + Cart */}
          <div
            style={{ justifySelf: "end", paddingBottom: "4px", fontSize: "11px" }}
            className="hidden md:block"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Link
                href="/login"
                style={{ fontStyle: "italic", color: "#111", textDecoration: "none" }}
              >
                My Account (login/Register)
              </Link>
              <Link
                href="/cart"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  color: "#111",
                }}
              >
                <ShoppingCart size={18} style={{ color: "#d4600a" }} />
                <span style={{ fontWeight: "bold", fontStyle: "italic", fontSize: "11px" }}>
                  {cart?.itemCount || 0} Item
                </span>
              </Link>
            </div>
          </div>
 
          {/* Mobile hamburger */}
          <button
            style={{ justifySelf: "end" }}
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
 
        {/* Bottom row: Categories | Search */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "flex-start",
            minHeight: "38px",
          }}
        >
          <div />
 
          {/* Category nav */}
          <nav
            style={{
              display: open ? "flex" : undefined,
              flexDirection: open ? "column" : undefined,
              alignItems: "center",
              gap: open ? "12px" : "40px",
              fontSize: "11px",
              letterSpacing: "0.05em",
              color: "#555",
            }}
            className={`${open ? "flex col-span-3 flex-col" : "hidden md:flex md:flex-row"}`}
          >
            <Link href="/" className="md:hidden" style={{ color: "#555", textDecoration: "none" }}>Home</Link>
            <Link href="/blog" className="md:hidden" style={{ color: "#555", textDecoration: "none" }}>Blog</Link>
            <Link href="/about" className="md:hidden" style={{ color: "#555", textDecoration: "none" }}>About Us</Link>
            <Link href="/contact" className="md:hidden" style={{ color: "#555", textDecoration: "none" }}>Contact Us</Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/shop?category=${category}`}
                style={{
                  color: "#555",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  fontSize: "11px",
                  letterSpacing: "0.04em",
                }}
              >
                {category.toUpperCase()}
              </Link>
            ))}
          </nav>
 
          {/* Search bar */}
          <form
            onSubmit={submitSearch}
            style={{
              height: "26px",
              width: "180px",
              justifySelf: "end",
              border: "1px solid #cfcfcf",
              backgroundColor: "white",
              display: "flex",
            }}
            className="hidden md:flex"
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flex: 1,
                minWidth: 0,
                padding: "0 8px",
                fontSize: "10px",
                color: "#888",
                outline: "none",
                border: "none",
                backgroundColor: "transparent",
              }}
              placeholder="Search"
            />
            <button
              style={{
                width: "32px",
                borderLeft: "1px solid #d2d2d2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                cursor: "pointer",
              }}
              aria-label="Search"
            >
              <Search size={16} style={{ color: "#222" }} />
            </button>
          </form>
 
          {/* Mobile search */}
          {open && (
            <form
              onSubmit={submitSearch}
              style={{
                gridColumn: "1 / -1",
                margin: "12px auto 0",
                height: "28px",
                width: "184px",
                border: "1px solid #cfcfcf",
                backgroundColor: "white",
                display: "flex",
              }}
            >
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: "0 8px",
                  fontSize: "10px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="Search"
              />
              <button
                style={{
                  width: "34px",
                  borderLeft: "1px solid #d2d2d2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "none",
                  cursor: "pointer",
                }}
                aria-label="Search"
              >
                <Search size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
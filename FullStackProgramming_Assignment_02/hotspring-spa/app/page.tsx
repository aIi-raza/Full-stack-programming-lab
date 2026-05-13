"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { products, SLIDE_BG, CARD_BG } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

const slides = [
  {
    title: <>Barrier Reef 158 Jet<br />TV-Stereo - Home Theater<br />Supper Spa</>,
    body: <>Extra Large and Deep 8 Person<br />158 Jet Supper Spa, TV-Home Theater Spa System</>,
    price: "$4899.00",
    href: "/product/1",
    bg: SLIDE_BG[0],
    visual: <>♨ HOT TUB<br /><small>158 Jets · 8 Person · TV Theater</small></>,
  },
  {
    title: <>Emerald Bay XL<br />TV DVD Stereo<br />Hot Tub 90 Jets</>,
    body: <>6-7 Person Spa with Full Entertainment System</>,
    price: "$1979.00",
    oldPrice: "$2199",
    href: "/product/2",
    bg: SLIDE_BG[1],
    visual: <>♨ EMERALD BAY<br /><small>90 Jets · 6-7 Person · DVD/TV</small></>,
  },
  {
    title: <>Cabaret 3 Person<br />41 Jet Hot Tub<br />110-Volt Plug In</>,
    body: <>Easy Plug &amp; Play – No Electrician Needed!</>,
    price: "$500.00",
    href: "/product/3",
    bg: SLIDE_BG[2],
    visual: <>♨ CABARET<br /><small>41 Jets · 3 Person · 110V Plug-In</small></>,
  },
];

export default function HomePage() {
  const [idx, setIdx] = useState(0);
  const newProducts = products.slice(0, 8);

  const goTo = useCallback((n: number) => {
    setIdx(((n % slides.length) + slides.length) % slides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const t = setInterval(() => goTo(idx + 1), 5000);
    return () => clearInterval(t);
  }, [idx, goTo]);

  const slide = slides[idx];

  return (
    <div>
      {/* HERO SLIDER */}
      <section className="hs-hero">
        <div className="hs-slide active">
          <div className="hs-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, width: "100%" }}>
            <div className="slide-content" style={{ maxWidth: 400, color: "#fff" }}>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-body">{slide.body}</p>
              <div className="slide-price">
                {slide.price}
                {slide.oldPrice && (
                  <small style={{ fontSize: 18, textDecoration: "line-through", opacity: .6, marginLeft: 8 }}>{slide.oldPrice}</small>
                )}
              </div>
              <Link href={slide.href} className="btn-hs btn-red">More Details</Link>
            </div>
            <div className="spa-visual" style={{ background: slide.bg }}>
              <span style={{ textAlign: "center", whiteSpace: "pre-line" }}>{slide.visual}</span>
            </div>
          </div>
        </div>
        <button className="slider-ctrl prev" onClick={() => goTo(idx - 1)}>&#8249;</button>
        <button className="slider-ctrl next" onClick={() => goTo(idx + 1)}>&#8250;</button>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button key={i} className={`dot${i === idx ? " active" : ""}`} onClick={() => goTo(i)} />
          ))}
        </div>
      </section>

      {/* PROMO BANNERS */}
      <div className="hs-container">
        <div className="promo-grid" style={{ marginTop: 4 }}>
          <div className="promo-item" style={{ background: "linear-gradient(135deg,#0d3b5e,#1a5fa3)" }}
            onClick={() => window.location.href = "/category"}>
            <div className="promo-label">
              <h3>5-7 PERSON SPA</h3>
              <p>THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN GRAVIDA NIBH VEL VELIT AUCTOR</p>
            </div>
          </div>
          <div className="promo-item" style={{ background: "linear-gradient(135deg,#1a3a1a,#2d6a2d)" }}
            onClick={() => window.location.href = "/category"}>
            <div className="promo-label">
              <h3>TV THEATER SPA</h3>
              <p>THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN</p>
            </div>
          </div>
          <div className="promo-item" style={{ background: "var(--red)" }}
            onClick={() => window.location.href = "/category"}>
            <div className="promo-save-big">SAVE<br /><small style={{ fontSize: 28 }}>50%</small></div>
          </div>
        </div>
      </div>

      {/* NEW PRODUCTS */}
      <div className="hs-container" style={{ marginTop: 32 }}>
        <h2 className="section-title">NEW PRODUCTS</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 32 }}>
          {newProducts.map((p, i) => (
            <ProductCard key={p.id} product={p} idx={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

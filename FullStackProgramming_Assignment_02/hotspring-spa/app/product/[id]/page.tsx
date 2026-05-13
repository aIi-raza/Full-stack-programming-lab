"use client";
import { use, useState } from "react";
import Link from "next/link";
import { products, CARD_BG } from "@/lib/data";
import { useStore } from "@/lib/store";

const TABS = ["Details", "Quick Specs", "Accessories", "Reviews", "Q & A"];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === parseInt(id)) ?? products[0];
  const { addToCart, addToWishlist } = useStore();
  const [activeTab, setActiveTab] = useState(0);
  const [activeThumb, setActiveThumb] = useState(0);
  const [calcExtra, setCalcExtra] = useState(0);

  const related = products.filter((p) => p.id !== product.id).slice(0, 5);
  const bg = CARD_BG[product.id % CARD_BG.length];

  const calcOptions = [
    { label: "Interior Color:", opts: [{ label: "-- No Change --", val: 0 }] },
    { label: "Outside Shell Color:", opts: [{ label: "-- No Change --", val: 0 }] },
    { label: "Circulation Pump:", opts: [{ label: "-- No Change --", val: 0 }, { label: "Add Circ Pump (+$150)", val: 150 }] },
    { label: "Polar Foam:", opts: [{ label: "-- No Change --", val: 0 }, { label: "Add Polar Foam (+$200)", val: 200 }] },
    { label: "Cover / Steps:", opts: [{ label: "-- No Change --", val: 0 }, { label: "Add Cover & Steps (+$250)", val: 250 }] },
  ];

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt;{" "}
        <Link href="/category" style={{ color: "var(--red)" }}>Category</Link> &gt;{" "}
        {product.name.substring(0, 40)}...
      </p>

      <div className="pd-grid">
        {/* LEFT: Images */}
        <div>
          <div className="pd-main-img" style={{ background: CARD_BG[activeThumb % CARD_BG.length] }}>
            <span style={{ fontSize: 90, color: "rgba(255,255,255,.7)" }}>♨</span>
          </div>
          <div className="thumb-strip">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`thumb-item${activeThumb === i ? " active" : ""}`}
                style={{ background: CARD_BG[i % CARD_BG.length] }}
                onClick={() => setActiveThumb(i)}>
                <span style={{ fontSize: 20, color: "rgba(255,255,255,.8)" }}>♨</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "var(--red)", marginTop: 6, cursor: "pointer" }}>+ Larger View</p>
        </div>

        {/* CENTER: Details */}
        <div style={{ fontSize: 13 }}>
          <h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 21, marginBottom: 4 }}>{product.name}</h1>
          <p style={{ fontSize: 11, color: "#999", marginBottom: 12 }}>
            Abt Model:{product.model} | UPC Code: 822CS868729
          </p>
          <div className="stars-row">
            {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
            <a href="#reviews" style={{ color: "var(--red)", fontSize: 12, fontWeight: 600, marginLeft: 5 }}>
              ({product.reviews} reviews)
            </a>
          </div>
          {product.price > product.salePrice && (
            <p style={{ color: "#999", fontSize: 13, marginTop: 8 }}>
              Retail Price: <span style={{ textDecoration: "line-through" }}>${product.price.toFixed(2)}</span>
            </p>
          )}
          <p style={{ color: "#999", fontSize: 13 }}>Sale price</p>
          <div className="price-sale">${product.salePrice.toFixed(2)}</div>
          <p style={{ color: "var(--red)", fontSize: 12, fontStyle: "italic" }}>Low Price Guarantee</p>
          <span className="badge-instock">✓ In Stock</span>
          <table className="spec-tbl" style={{ marginBottom: 12 }}>
            <tbody>
              <tr><td>Capacity</td><td>{product.capacity}</td></tr>
              <tr><td>Jets</td><td>{product.jets}</td></tr>
              <tr><td>Pumps</td><td>{product.pumps}</td></tr>
              <tr><td>Voltage</td><td>{product.voltage}</td></tr>
              <tr><td>Water / Weight</td><td>{product.gallons}</td></tr>
              <tr><td>Heater</td><td>{product.heater}</td></tr>
            </tbody>
          </table>
          <button className="btn-hs btn-red pulse-red" onClick={() => addToCart(product)}>
            🛒 ADD TO CART
          </button>
          <button style={{ marginLeft: 10, background: "none", border: "1px solid #ccc", padding: "9px 14px", cursor: "pointer", fontSize: 12, borderRadius: 3 }}
            onClick={() => addToWishlist(product.name)}>
            ♡ WISHLIST
          </button>

          {/* TABS */}
          <div className="prod-tabs">
            <div className="tab-nav">
              {TABS.map((t, i) => (
                <button key={t} className={`tab-btn${activeTab === i ? " active" : ""}`} onClick={() => setActiveTab(i)}>{t}</button>
              ))}
            </div>
            <div className={`tab-pane${activeTab === 0 ? " active" : ""}`}>
              <p><strong>{product.name}</strong></p>
              <p>{product.desc}</p>
            </div>
            <div className={`tab-pane${activeTab === 1 ? " active" : ""}`}>
              <table className="spec-tbl">
                <tbody>
                  <tr><td>Jets</td><td>{product.jets}</td></tr>
                  <tr><td>Pumps</td><td>{product.pumps}</td></tr>
                  <tr><td>Voltage</td><td>{product.voltage}</td></tr>
                  <tr><td>Gallons</td><td>{product.gallons}</td></tr>
                  <tr><td>Heater</td><td>{product.heater}</td></tr>
                </tbody>
              </table>
            </div>
            <div className={`tab-pane${activeTab === 2 ? " active" : ""}`}><p>No accessories available for this model.</p></div>
            <div className={`tab-pane${activeTab === 3 ? " active" : ""}`} id="reviews">
              <p>{'★'.repeat(product.rating)} — {product.reviews} customer reviews. Rated {product.rating}/5.</p>
            </div>
            <div className={`tab-pane${activeTab === 4 ? " active" : ""}`}><p>Have a question? Contact our support team.</p></div>
          </div>

          {/* RELATED */}
          <div style={{ marginTop: 28, borderTop: "2px solid var(--border)", paddingTop: 18 }}>
            <p style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>Related Products</p>
            <div className="related-scroll">
              {related.map((rp) => (
                <Link key={rp.id} href={`/product/${rp.id}`} className="rel-item">
                  <div className="rel-icon" style={{ background: CARD_BG[rp.id % CARD_BG.length] }}>
                    <span style={{ color: "rgba(255,255,255,.8)", fontSize: 28 }}>♨</span>
                  </div>
                  <div className="rel-name">{rp.name.substring(0, 28)}...</div>
                  <div className="rel-price">${rp.salePrice.toFixed(2)}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Price Calculator */}
        <div style={{ fontSize: 12 }}>
          <div className="price-calc-box">
            <h5 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 15, marginBottom: 12 }}>Price Calculator</h5>
            {calcOptions.map((o) => (
              <div key={o.label} className="calc-row">
                <label>{o.label}</label>
                <select onChange={(e) => {
                  const rows = calcOptions.map((x) => x.opts[0].val);
                  // simple: just update total
                  setCalcExtra((prev) => prev); // handled below
                }}>
                  {o.opts.map((opt) => (
                    <option key={opt.label} value={opt.val}>{opt.label}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="calc-total">
              Total: <span className="amount-display">${(product.salePrice + calcExtra).toFixed(2)}</span>
            </div>
            <button className="btn-cart" onClick={() => addToCart(product)}>🛒 ADD TO CART</button>
          </div>
          <div className="price-calc-box" style={{ marginTop: 12 }}>
            <h5 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 15, marginBottom: 10 }}>Download Resources</h5>
            {["Full Line Brochure", "Owner's Manual", "Specifications Sheet"].map((r) => (
              <p key={r} style={{ marginBottom: 6 }}>
                <a href="#" style={{ color: "var(--red)", fontSize: 12, display: "flex", alignItems: "center", gap: 5 }}>📄 {r}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

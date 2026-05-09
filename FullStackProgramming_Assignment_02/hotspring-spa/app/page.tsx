import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function HomePage() {
  const newProducts = products.slice(0, 8);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
      {/* Hero Banner */}
      <div style={{ backgroundColor: "#b0c8d8", padding: "40px 32px", marginBottom: 16, display: "flex", alignItems: "center", gap: 32, position: "relative" }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ color: "#cc0000", fontSize: 28, fontWeight: "bold", lineHeight: 1.2, marginBottom: 8 }}>
            Barrier Reef 158 Jet<br />TV-Stereo - Home Theater<br />Supter Spa
          </h1>
          <p style={{ fontSize: 13, color: "#333", marginBottom: 4 }}>Extra Large and Deep 8 Person</p>
          <p style={{ fontSize: 13, color: "#333", marginBottom: 16 }}>158 Jet Supper Spa, TV-Home Theater Spa System,</p>
          <p style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>$4899.00</p>
          <Link href="/product/10" style={{ backgroundColor: "#cc0000", color: "white", padding: "8px 20px", display: "inline-block", fontWeight: "bold" }}>
            More Details
          </Link>
        </div>
        <div style={{ flex: 1, height: 200, backgroundColor: "#8aa8c0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 14 }}>[Product Image]</span>
        </div>
        {/* Slide dots */}
        <div style={{ position: "absolute", bottom: 8, right: 16, display: "flex", gap: 4 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ccc", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ccc", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#cc0000", display: "inline-block" }} />
        </div>
      </div>

      {/* Category highlights */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, marginBottom: 24 }}>
        <div style={{ backgroundColor: "#2a4a6a", color: "white", padding: "20px 16px", position: "relative" }}>
          <div style={{ height: 100, backgroundColor: "#3a5a7a", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#aaa" }}>[Spa Image]</span>
          </div>
          <h3 style={{ fontWeight: "bold", fontSize: 14 }}>5-7 PERSON SPA</h3>
          <p style={{ fontSize: 10, color: "#aaa", marginTop: 4 }}>THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN GRAVIDA NIH VEL VELIT AUCTOR</p>
        </div>
        <div style={{ backgroundColor: "#3a3a3a", color: "white", padding: "20px 16px" }}>
          <div style={{ height: 100, backgroundColor: "#4a4a4a", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#aaa" }}>[Spa Image]</span>
          </div>
          <h3 style={{ fontWeight: "bold", fontSize: 14 }}>TV THEATER SPA</h3>
          <p style={{ fontSize: 10, color: "#aaa", marginTop: 4 }}>THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN</p>
        </div>
        <div style={{ backgroundColor: "#cc0000", color: "white", padding: "20px 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 40, fontWeight: "900", lineHeight: 1 }}>SAVE<br />50%</p>
            <p style={{ fontSize: 10, marginTop: 8 }}>THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN GRAVIDA NIH VEL VELIT AUCTOR</p>
          </div>
        </div>
      </div>

      {/* New Products */}
      <h2 style={{ fontSize: 18, fontWeight: "bold", borderBottom: "2px solid #e0e0e0", paddingBottom: 8, marginBottom: 16 }}>NEW PRODUCTS</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 32 }}>
        {newProducts.map((p) => (
          <ProductCard key={p.id} id={p.id} name={p.name} description={p.description} price={p.price} />
        ))}
      </div>
    </div>
  );
}

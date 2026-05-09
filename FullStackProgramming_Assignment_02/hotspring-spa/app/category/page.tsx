import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function CategoryPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 16 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; Catagory
      </p>
      <div style={{ display: "flex", gap: 24 }}>
        {/* Sidebar */}
        <div style={{ width: 180, flexShrink: 0, fontSize: 12 }}>
          <h3 style={{ fontWeight: "bold", marginBottom: 12 }}>Shopping Options</h3>
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontWeight: "bold", fontSize: 11, color: "#666", marginBottom: 6 }}>SEATING CAPACITY</p>
            {["2 - 4 PEOPLE", "5 - 7 PEOPLE", "8 PEOPLE AND MORE"].map((item, i) => (
              <p key={item} style={{ marginBottom: 4 }}>
                <a href="#" style={{ color: i === 0 ? "#cc0000" : "#333" }}>› {item}</a>
              </p>
            ))}
          </div>
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontWeight: "bold", fontSize: 11, color: "#666", marginBottom: 6 }}>CHOOSE SIZES</p>
            {["5 - 6 FEET LONG", "6 - 7 FEET LONG", "7 - 8 FEET LONG", "8 FEET TO LARGE SIZE"].map((item) => (
              <p key={item} style={{ marginBottom: 4 }}>
                <a href="#" style={{ color: "#333" }}>› {item}</a>
              </p>
            ))}
          </div>
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontWeight: "bold", fontSize: 11, color: "#666", marginBottom: 6 }}>SPAS BY TYPE</p>
            {["PLUG AND PLAY 110 VOLT", "TV - STERIO SPAS", "CORNER SPAS", "PORTABLE SPAS", "DEEPER SPAS"].map((item) => (
              <p key={item} style={{ marginBottom: 4 }}>
                <a href="#" style={{ color: "#333" }}>› {item}</a>
              </p>
            ))}
          </div>
          <div>
            <p style={{ fontWeight: "bold", fontSize: 11, color: "#666", marginBottom: 6 }}>PRICE RANGES FROM</p>
            {["UNDER $3,000", "$3,000 TO 4,000", "$4,000 TO 5,000", "$5,000 TO 6,000", "$6,000 +"].map((item) => (
              <p key={item} style={{ marginBottom: 4 }}>
                <a href="#" style={{ color: "#333" }}>› {item}</a>
              </p>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, fontSize: 12 }}>
            <h2 style={{ fontWeight: "bold", fontSize: 16 }}>Top Product Listing</h2>
            <span style={{ color: "#666" }}>6 Item(s) &nbsp; Show: <select style={{ border: "1px solid #ccc", padding: "2px" }}><option>9</option></select></span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {products.slice(0, 6).map((p) => (
              <ProductCard key={p.id} id={p.id} name={p.name} description={p.description} price={p.price} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { products } from "@/lib/data";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id)) || products[8];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; {product.name}
      </p>
      <h1 style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>{product.name}</h1>

      <div style={{ display: "flex", gap: 24 }}>
        {/* Left: images */}
        <div style={{ width: 260, flexShrink: 0 }}>
          <div style={{ height: 200, backgroundColor: "#e8e8e8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8, border: "1px solid #ddd" }}>
            <span style={{ color: "#999", fontSize: 13 }}>[Product Image]</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ width: 55, height: 45, backgroundColor: "#e0e0e0", border: "1px solid #ccc", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 10, color: "#999" }}>img</div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#cc0000", marginTop: 6 }}>+ Larger View</p>
        </div>

        {/* Center: details */}
        <div style={{ flex: 1, fontSize: 13 }}>
          <div style={{ color: "#f0a000", marginBottom: 4 }}>★★★★☆ (14 reviews)</div>
          {product.originalPrice && (
            <p style={{ color: "#666", fontSize: 12 }}>Retail Price: <span style={{ textDecoration: "line-through" }}>${product.originalPrice}</span></p>
          )}
          <p style={{ color: "#666", fontSize: 12 }}>Sale price</p>
          <p style={{ color: "#cc0000", fontSize: 24, fontWeight: "bold", marginBottom: 4 }}>${product.price}</p>
          <p style={{ color: "#cc0000", fontSize: 11, marginBottom: 12 }}>Low Price Guarantee</p>
          <div style={{ fontSize: 12, lineHeight: 1.8 }}>
            <p><strong>Size/Seating Capacity</strong><br />77&quot;, 77&quot;, 32&quot; / 6 Persons</p>
            <p><strong>Seating Design</strong><br />Bucket, Lounge, Chair, Bench</p>
            <p><strong>Water Capacity / Dry Weight</strong><br />305 Gallons / 573 lbs</p>
            <p><strong>Number of Pumps</strong><br />2 X 5HP</p>
            <p><strong>Electrical</strong><br />5.5 KW Heavy Heater, 220V, 50 amp /ETL Certificate</p>
          </div>
          <p style={{ color: "green", fontSize: 12, marginTop: 8 }}>In Stock (available)</p>
          <button style={{ backgroundColor: "#cc0000", color: "white", border: "none", padding: "8px 20px", cursor: "pointer", marginTop: 8, fontSize: 13 }}>
            🛒 ADD TO CART
          </button>

          {/* Tabs */}
          <div style={{ marginTop: 20 }}>
            <div style={{ display: "flex", borderBottom: "2px solid #ddd", gap: 0, fontSize: 12 }}>
              {["Details", "Quick Specs", "Accessories", "Reviews", "Q & A"].map((tab, i) => (
                <button key={tab} style={{ padding: "8px 14px", border: "1px solid #ddd", backgroundColor: i === 0 ? "white" : "#f5f5f5", borderBottom: i === 0 ? "2px solid white" : "none", cursor: "pointer", fontSize: 12 }}>{tab}</button>
              ))}
            </div>
            <div style={{ padding: "16px", border: "1px solid #ddd", borderTop: "none", fontSize: 12, lineHeight: 1.6 }}>
              <p><strong>Product Details</strong></p>
              <p>Energy Star Rated - No</p>
              <h3 style={{ fontWeight: "bold", margin: "8px 0" }}>{product.name}</h3>
              <p style={{ color: "#666" }}>This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            </div>
          </div>
        </div>

        {/* Right: Price calculator */}
        <div style={{ width: 180, flexShrink: 0, fontSize: 12 }}>
          <h3 style={{ fontWeight: "bold", backgroundColor: "#f5f5f5", padding: "8px", border: "1px solid #ddd", marginBottom: 0 }}>Price Calculator</h3>
          <div style={{ border: "1px solid #ddd", padding: 10 }}>
            {["Interior Color:", "Outside Shell Color:", "Circulation Pump:", "Polar Foam:", "Cover / Steps:", "Extra Filter Sets:", "Deluxe Cover Lifter:"].map((opt) => (
              <div key={opt} style={{ marginBottom: 6 }}>
                <label style={{ display: "block", color: "#555", fontSize: 11 }}>{opt}</label>
                <select style={{ width: "100%", border: "1px solid #ccc", padding: "2px", fontSize: 11 }}><option></option></select>
              </div>
            ))}
            <p style={{ fontWeight: "bold", color: "#cc0000", textAlign: "right", marginTop: 8 }}>Total Price: $650.00</p>
            <button style={{ width: "100%", backgroundColor: "#cc0000", color: "white", border: "none", padding: "6px", cursor: "pointer", fontSize: 12 }}>🛒 ADD TO CART</button>
          </div>
          <div style={{ marginTop: 12, border: "1px solid #ddd", padding: 10 }}>
            <h4 style={{ fontWeight: "bold", marginBottom: 8 }}>Download Resources</h4>
            {["Full Line Brochure", "Owner&apos;s Manual", "Specifications Sheet"].map((r) => (
              <p key={r} style={{ marginBottom: 4 }}><a href="#" style={{ color: "#cc0000", fontSize: 11 }}>📄 {r}</a></p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

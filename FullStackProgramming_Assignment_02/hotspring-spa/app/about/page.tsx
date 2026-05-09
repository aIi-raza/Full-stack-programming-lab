import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; About Us
      </p>
      <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>About Us</h1>
        <div style={{ height: 180, backgroundColor: "#b0c8d8", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 14 }}>[About Us Banner]</span>
        </div>
        <h2 style={{ fontSize: 16, fontWeight: "bold", marginBottom: 12 }}>Welcome to HotSpring Portable Spas</h2>
        <p style={{ fontSize: 13, lineHeight: 1.8, color: "#555", marginBottom: 12 }}>
          HotSpring Portable Spas has been a leading provider of premium hot tubs and portable spas for over 20 years. We offer the highest quality spa products from the world&apos;s best manufacturers, including Caldera Spas, Oceanic Spa, and Island Spas.
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.8, color: "#555", marginBottom: 12 }}>
          Our commitment to customer satisfaction drives everything we do. From our expert staff to our low-price guarantee, we ensure that your spa buying experience is second to none. We carry a wide range of models for every budget and lifestyle.
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
          Whether you are looking for a small 2-person plug-and-play spa or a large 8-person entertainment center, we have the right product for you. Visit our showroom or call us at 888-201-8899 to speak with one of our spa specialists today.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 20 }}>
          {[
            { title: "20+ Years Experience", desc: "Serving customers with premium spa products since 2004." },
            { title: "Low Price Guarantee", desc: "We match any competitor price. Shop with confidence." },
            { title: "Expert Support", desc: "Our team of spa specialists is available 24/7 to help you." },
          ].map(({ title, desc }) => (
            <div key={title} style={{ backgroundColor: "#f5f5f5", padding: 16, textAlign: "center" }}>
              <h3 style={{ fontWeight: "bold", fontSize: 14, color: "#cc0000", marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

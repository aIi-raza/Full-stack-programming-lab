import Link from "next/link";

const team = [
  { name: "Jennifer Lawrence", role: "Business Consultant", bio: "Helping customers find the perfect spa solution since 2008.", emoji: "👩", bg: "linear-gradient(135deg,#667eea,#764ba2)" },
  { name: "Michael Stevens", role: "Business Consultant", bio: "Expert in hot tub installation and maintenance guidance.", emoji: "👨", bg: "linear-gradient(135deg,#f093fb,#f5576c)" },
  { name: "Amanda Clarke", role: "Business Consultant", bio: "Specializes in luxury spa configurations and custom orders.", emoji: "👩", bg: "linear-gradient(135deg,#4facfe,#00f2fe)" },
  { name: "Sarah Mitchell", role: "Business Consultant", bio: "Customer service and after-sales support specialist.", emoji: "👩", bg: "linear-gradient(135deg,#43e97b,#38f9d7)" },
];

export default function AboutPage() {
  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt; About Us
      </p>
      <h1 className="page-heading">About Us</h1>

      <div className="page-box">
        <div style={{ background: "#f9f9f9", border: "1px solid var(--border)", borderRadius: 4, padding: 24 }}>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 19, marginBottom: 14 }}>Welcome to the Company</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 22, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 13, lineHeight: 1.9, color: "#555", marginBottom: 12 }}>
                HotSpring Portable Spas is a leading retailer of premium hot tubs and portable spa products. We have been serving customers across North America since 2001, delivering quality, comfort, and innovation to backyards everywhere.
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.9, color: "#555", marginBottom: 12 }}>
                We carry a wide selection including TV-Stereo Spas, Corner Spas, Portable Spas, Plug-and-Play 110V Spas, and Deeper Therapy Spas. Our products are sourced from the most trusted brands: Oceanic Spa, Caldera Spas, and Island Spas by Artesian.
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.9, color: "#555" }}>
                Our knowledgeable team is available 24/7 to assist you in finding the perfect spa for your needs and budget. We offer competitive pricing, flexible payment options, and nationwide delivery.
              </p>
            </div>
            <div style={{ background: "linear-gradient(135deg,#0d3b5e,#1a6fa3)", borderRadius: 8, minHeight: 170, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 70, color: "rgba(255,255,255,.8)" }}>
              ♨
            </div>
          </div>

          <div className="divider" />

          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 19, marginBottom: 8 }}>Our Company Members</h2>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 18, lineHeight: 1.8 }}>
            Our team brings decades of combined experience in spa retail, installation, and customer service. We are committed to making your spa ownership experience exceptional.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 20 }}>
            {team.map((m) => (
              <div key={m.name} style={{ textAlign: "center" }}>
                <div style={{ background: m.bg, borderRadius: 4, height: 115, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, marginBottom: 9 }}>
                  {m.emoji}
                </div>
                <h6 style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{m.name}</h6>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 5 }}>{m.role}</div>
                <div style={{ fontSize: 12, color: "#666" }}>{m.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand bar */}
      <div className="brand-bar">
        <div className="brand-item">
          <span style={{ background: "#f5a623", padding: 10, borderRadius: 4, color: "#fff", fontSize: 12, textAlign: "center", lineHeight: 1.4, display: "block", fontWeight: 700 }}>
            SAVE $1,000&apos;s<br /><small style={{ fontWeight: 400 }}>ON TOP SPA BRANDS</small>
          </span>
        </div>
        <div className="brand-item"><span style={{ fontStyle: "italic", color: "#1a5fa3", fontSize: 22, fontWeight: 700 }}>OceanicSpa</span></div>
        <div className="brand-item"><span style={{ color: "#e05a3a", fontSize: 20, fontWeight: 700 }}>✦ Caldera<em>Spas</em></span></div>
        <div className="brand-item"><span style={{ color: "#2d8a4e", fontSize: 20, fontWeight: 700 }}>🌴 Island<em>Spas</em></span></div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; Contact Us
      </p>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Contact Us</h1>
      <div style={{ display: "flex", gap: 24, fontSize: 13 }}>
        {/* Form */}
        <div style={{ flex: 2, backgroundColor: "white", border: "1px solid #ddd", padding: 24 }}>
          <h3 style={{ fontWeight: "bold", marginBottom: 16, fontSize: 15 }}>Send Us a Message</h3>
          <p style={{ color: "#cc0000", fontSize: 12, marginBottom: 16 }}>* Required Fields</p>
          {[
            { label: "Your Name", type: "text" },
            { label: "Email Address", type: "email" },
            { label: "Phone Number", type: "tel" },
            { label: "Subject", type: "text" },
          ].map(({ label, type }) => (
            <div key={label} style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
              <label style={{ width: 160, fontSize: 12 }}>{label} <span style={{ color: "#cc0000" }}>*</span></label>
              <input type={type} style={{ flex: 1, border: "1px solid #ccc", padding: "5px 8px", fontSize: 12 }} />
            </div>
          ))}
          <div style={{ marginBottom: 20, display: "flex", alignItems: "flex-start" }}>
            <label style={{ width: 160, fontSize: 12, paddingTop: 4 }}>Message <span style={{ color: "#cc0000" }}>*</span></label>
            <textarea rows={6} style={{ flex: 1, border: "1px solid #ccc", padding: "5px 8px", fontSize: 12, resize: "vertical" }} />
          </div>
          <button style={{ backgroundColor: "#cc0000", color: "white", padding: "8px 24px", border: "none", fontWeight: "bold", fontSize: 13, cursor: "pointer" }}>SEND MESSAGE</button>
        </div>

        {/* Contact info */}
        <div style={{ flex: 1 }}>
          <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 20, marginBottom: 16 }}>
            <h3 style={{ fontWeight: "bold", marginBottom: 12, fontSize: 14 }}>Our Contact Information</h3>
            <div style={{ fontSize: 12, lineHeight: 2.2 }}>
              <p>📞 <strong>Phone:</strong> 888-201-8899</p>
              <p>📧 <strong>Email:</strong> servicemail@yoursitename.com</p>
              <p>🕐 <strong>Hours:</strong> Mon - Fri: 9AM - 6PM</p>
              <p>📍 <strong>Address:</strong><br />Your Address, Street<br />State &amp; Zip Code<br />City &amp; Country</p>
            </div>
          </div>
          <div style={{ backgroundColor: "#1a2332", color: "white", padding: 20, fontSize: 12 }}>
            <h3 style={{ fontWeight: "bold", marginBottom: 10, fontSize: 14 }}>Customer Support</h3>
            <p style={{ lineHeight: 1.8, color: "#ccc" }}>
              Our customer support team is available 24/7 to assist you with any questions about our products, orders, or services.
            </p>
            <p style={{ marginTop: 12, color: "#cc0000", fontSize: 18, fontWeight: "bold" }}>020 38989565</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a2332", color: "#ccc", marginTop: 40 }}>
      {/* Partner logos bar */}
      <div style={{ backgroundColor: "#e8e8e8", padding: "16px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px", display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ backgroundColor: "#1a7a1a", color: "white", padding: "8px 14px", fontSize: 13, fontWeight: "bold" }}>SAVE $1,000&apos;s<br /><span style={{ fontSize: 10 }}>ON THE TOP SPA BRANDS</span></div>
          <span style={{ fontSize: 20, fontStyle: "italic", color: "#0066aa" }}>OceanicSpa</span>
          <span style={{ fontSize: 18, color: "#cc5500" }}>Caldera Spas</span>
          <span style={{ fontSize: 18, color: "#2a6600" }}>Island Spas</span>
        </div>
      </div>

      {/* Footer columns */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "30px 16px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, fontSize: 12 }}>
        {/* Contact */}
        <div>
          <h4 style={{ color: "white", marginBottom: 12, fontSize: 13, textTransform: "uppercase" }}>Contact Us</h4>
          <p>yoursitename.com</p>
          <p>CALL 24/7: 888-201-8899</p>
          <p>Your Address, Street</p>
          <p>State &amp; Zip Code</p>
          <p>City &amp; Country</p>
          <p>Email: servicemail@yoursitename.com</p>
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {["T", "f", "in", "g+", "▶", "P"].map((icon, i) => (
              <span key={i} style={{ backgroundColor: "#2a3a4a", color: "white", padding: "4px 6px", fontSize: 10, cursor: "pointer" }}>{icon}</span>
            ))}
          </div>
        </div>

        {/* Information */}
        <div>
          <h4 style={{ color: "white", marginBottom: 12, fontSize: 13, textTransform: "uppercase" }}>Information</h4>
          {["About Us", "Customer Service", "Privacy Policy", "Site Map", "Search Terms", "Contact Us", "About Us"].map((item) => (
            <p key={item} style={{ marginBottom: 6 }}>
              <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`} style={{ color: "#ccc" }}>{item}</Link>
            </p>
          ))}
        </div>

        {/* My Account */}
        <div>
          <h4 style={{ color: "white", marginBottom: 12, fontSize: 13, textTransform: "uppercase" }}>My Account</h4>
          {[["Sign In", "/login"], ["View Cart", "/cart"], ["My Wishlist", "/wishlist"]].map(([label, href]) => (
            <p key={href} style={{ marginBottom: 6 }}>
              <Link href={href} style={{ color: "#ccc" }}>{label}</Link>
            </p>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ color: "white", marginBottom: 12, fontSize: 13, textTransform: "uppercase" }}>Signup for a Newsletter</h4>
          <p style={{ marginBottom: 8, fontSize: 11 }}>SIGN UP FOR OUR NEWS LETTER:</p>
          <input type="email" placeholder="" style={{ width: "100%", padding: "6px", border: "1px solid #aaa", backgroundColor: "white", marginBottom: 12 }} />
          <p style={{ color: "white", marginBottom: 8, fontSize: 11 }}>PAYMENT SOLUTIONS</p>
          <div style={{ display: "flex", gap: 4 }}>
            {["VISA", "MC", "AMEX", "PP"].map((card) => (
              <span key={card} style={{ backgroundColor: "#2a3a4a", color: "white", padding: "3px 5px", fontSize: 9 }}>{card}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: "1px solid #2a3a4a", textAlign: "center", padding: "12px", fontSize: 11, color: "#888" }}>
        © 2014 Hotubspaservice.com. All Rights Reserved.
      </div>
    </footer>
  );
}

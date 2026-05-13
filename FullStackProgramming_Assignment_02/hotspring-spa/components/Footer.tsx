"use client";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { useState } from "react";

export default function Footer() {
  const { showToast } = useStore();
  const [email, setEmail] = useState("");

  function subscribe() {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) { showToast("Enter a valid email address.", "error"); return; }
    showToast("Subscribed successfully!", "success");
    setEmail("");
  }

  return (
    <footer className="hs-footer">
      {/* Brand bar */}
      <div className="hs-container">
        <div className="brand-bar">
          <div className="brand-item">
            <span style={{ background: "#f5a623", padding: "10px", borderRadius: 4, color: "#fff", fontSize: 12, textAlign: "center", lineHeight: 1.4, display: "block", fontWeight: 700 }}>
              SAVE $1,000&apos;s<br /><small style={{ fontWeight: 400 }}>ON TOP SPA BRANDS</small>
            </span>
          </div>
          <div className="brand-item"><span style={{ fontStyle: "italic", color: "#1a5fa3", fontSize: 22, fontWeight: 700 }}>OceanicSpa</span></div>
          <div className="brand-item"><span style={{ color: "#e05a3a", fontSize: 20, fontWeight: 700 }}>✦ Caldera<em>Spas</em></span></div>
          <div className="brand-item"><span style={{ color: "#2d8a4e", fontSize: 20, fontWeight: 700 }}>🌴 Island<em>Spas</em></span></div>
        </div>
      </div>

      {/* Footer grid */}
      <div className="hs-container">
        <div className="footer-grid" style={{ paddingTop: 30 }}>
          <div className="footer-col">
            <h5>Contact Us</h5>
            <p>yoursitename.com<br />CALL 24/7: 888 - 201 - 8899<br />Your Address: Street<br />State &amp; Zip Code<br />City &amp; Country<br />Email: servicemail@yoursitename.com</p>
            <div className="social-row">
              {["𝕏", "f", "in", "g+", "▶", "𝗣"].map((icon, i) => (
                <a key={i} href="#">{icon}</a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h5>Information</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[["ABOUT US", "/about"], ["CUSTOMER SERVICE", "/contact"], ["PRIVACY POLICY", "#"], ["SITE MAP", "#"], ["SEARCH TERMS", "#"], ["CONTACT US", "/contact"]].map(([label, href]) => (
                <li key={label}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>My Account</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><Link href="/login">SIGN IN</Link></li>
              <li><Link href="/cart">VIEW CART</Link></li>
              <li><Link href="#">MY WISHLIST</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Signup for a Newsletter</h5>
            <p style={{ fontSize: 11, marginBottom: 8 }}>SIGN UP FOR OUR NEWSLETTER:</p>
            <input
              type="email"
              className="footer-input"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn-hs btn-red newsletter-btn" onClick={subscribe}>Subscribe</button>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".5px", marginTop: 11 }}>Payment Solutions</p>
            <div className="pay-icons">
              {["VISA", "MC", "AMEX", "PayPal"].map((c) => <span key={c} className="pay-icon">{c}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">© 2014 Hotubspaservice.com. All Rights Reserved.</div>
    </footer>
  );
}

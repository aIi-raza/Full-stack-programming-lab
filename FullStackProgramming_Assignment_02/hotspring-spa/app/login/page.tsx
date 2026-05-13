"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";

export default function LoginPage() {
  const { login, showToast } = useStore();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [remember, setRemember] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !pass) { showToast("Please fill in all fields.", "error"); return; }
    if (login(email, pass)) {
      showToast("Welcome back! Redirecting…", "success");
      setTimeout(() => router.push("/account"), 1300);
    } else {
      showToast("Invalid email or password.", "error");
    }
  }

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt; My Account
      </p>
      <h1 className="page-heading">Login Or Create Account</h1>

      <div className="page-box" style={{ padding: 0 }}>
        <div className="auth-split">
          {/* LOGIN PANEL */}
          <div className="auth-panel">
            <h4>User Login Details</h4>
            <p style={{ color: "#666", fontSize: 13, marginBottom: 4 }}>Please sign in below with your login information.</p>
            <p style={{ color: "var(--red)", fontSize: 12, marginBottom: 16 }}>*Required Fields</p>
            <p className="info-note" style={{ marginBottom: 16 }}>
              Demo credentials: <strong>demo@hotspring.com</strong> / <strong>demo123</strong>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="label-input-row">
                <label className="form-label-hs">Email <span className="req">*</span></label>
                <input type="email" className="hs-input" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="label-input-row">
                <label className="form-label-hs">Password <span className="req">*</span></label>
                <input type="password" className="hs-input" value={pass} onChange={(e) => setPass(e.target.value)} />
              </div>
              <div style={{ marginBottom: 16, paddingLeft: 153 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, cursor: "pointer" }}>
                  <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                  Remember me next time I visit
                </label>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, paddingLeft: 153 }}>
                <button type="submit" className="btn-hs btn-red">SIGN IN</button>
                <Link href="/forgot-password" style={{ color: "#0066cc", fontSize: 12 }}>Forgot your password?</Link>
              </div>
            </form>
          </div>

          {/* NEW CUSTOMER PANEL */}
          <div className="auth-panel">
            <h4>New Customer</h4>
            <p style={{ color: "#666", fontSize: 13, marginBottom: 8 }}>As a registered customer you can:</p>
            <ul style={{ fontSize: 13, color: "#333", marginBottom: 16, paddingLeft: 20, lineHeight: 2 }}>
              <li>Store billing &amp; shipping information</li>
              <li>Check your order status</li>
              <li>Track your delivery status</li>
              <li>View your order history</li>
            </ul>
            <Link href="/register" className="btn-hs btn-red">CREATE NEW ACCOUNT</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

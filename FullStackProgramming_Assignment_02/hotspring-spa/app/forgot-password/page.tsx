"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";

export default function ForgotPasswordPage() {
  const { showToast } = useStore();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) { setError("Enter a valid email address."); return; }
    setError("");
    showToast(`Password reset link sent to ${email}`, "success");
    setTimeout(() => router.push("/login"), 2000);
  }

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt; Forgot Password
      </p>
      <h1 className="page-heading">Forgot Your Password?</h1>
      <div className="page-box" style={{ maxWidth: 500 }}>
        <p style={{ fontSize: 13, color: "#666", marginBottom: 20 }}>
          Please enter your email address below. You will receive a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="label-input-row">
            <label className="form-label-hs">Email <span className="req">*</span></label>
            <div>
              <input type="email" className={`hs-input${error ? " is-invalid" : ""}`}
                value={email} onChange={(e) => setEmail(e.target.value)} />
              {error && <div className="hs-error show">{error}</div>}
            </div>
          </div>
          <div style={{ marginTop: 16, paddingLeft: 153, display: "flex", gap: 16, alignItems: "center" }}>
            <button type="submit" className="btn-hs btn-red">RESET PASSWORD</button>
            <Link href="/login" style={{ color: "#0066cc", fontSize: 13 }}>Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

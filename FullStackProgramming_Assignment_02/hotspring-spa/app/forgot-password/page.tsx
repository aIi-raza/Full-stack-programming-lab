import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; Forgot Password
      </p>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Forgot Your Password?</h1>
      <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 24, maxWidth: 480, fontSize: 13 }}>
        <p style={{ color: "#666", marginBottom: 16 }}>
          Please enter your email address below. You will receive a link to reset your password.
        </p>
        <p style={{ color: "#cc0000", fontSize: 12, marginBottom: 16 }}>* Required Fields</p>
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
          <label style={{ width: 140, fontSize: 12 }}>Email Address <span style={{ color: "#cc0000" }}>*</span></label>
          <input type="email" style={{ flex: 1, border: "1px solid #ccc", padding: "5px 8px", fontSize: 12 }} />
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/" style={{ backgroundColor: "#cc0000", color: "white", padding: "7px 20px", fontWeight: "bold", fontSize: 13, display: "inline-block" }}>RESET PASSWORD</Link>
          <Link href="/login" style={{ backgroundColor: "#888", color: "white", padding: "7px 20px", fontSize: 13, display: "inline-block" }}>BACK TO LOGIN</Link>
        </div>
      </div>
    </div>
  );
}

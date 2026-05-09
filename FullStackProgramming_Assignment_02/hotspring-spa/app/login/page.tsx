import Link from "next/link";

export default function LoginPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; My Account
      </p>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Login Or Creat Account</h1>
      <div style={{ display: "flex", gap: 0, border: "1px solid #ddd", backgroundColor: "white" }}>
        {/* Login form */}
        <div style={{ flex: 1, padding: 24, borderRight: "1px solid #ddd", fontSize: 13 }}>
          <h3 style={{ fontWeight: "bold", marginBottom: 8 }}>User Login Details</h3>
          <p style={{ color: "#666", marginBottom: 4 }}>Please sign in below with your login information.</p>
          <p style={{ color: "#cc0000", fontSize: 12, marginBottom: 16 }}>*Required Fields</p>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: "inline-block", width: 80, fontSize: 12 }}>Email <span style={{ color: "#cc0000" }}>*</span></label>
            <input type="email" style={{ width: 220, border: "1px solid #ccc", padding: "4px 8px", fontSize: 12 }} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: "inline-block", width: 80, fontSize: 12 }}>Password <span style={{ color: "#cc0000" }}>*</span></label>
            <input type="password" style={{ width: 220, border: "1px solid #ccc", padding: "4px 8px", fontSize: 12 }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12 }}>
              <input type="checkbox" style={{ marginRight: 6 }} />
              Remember me th next time I visit
            </label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/" style={{ backgroundColor: "#cc0000", color: "white", padding: "6px 16px", fontWeight: "bold", fontSize: 13 }}>SIGN IN</Link>
            <Link href="/forgot-password" style={{ color: "#0066cc", fontSize: 12 }}>Forgot your password?</Link>
          </div>
        </div>

        {/* New customer */}
        <div style={{ flex: 1, padding: 24, fontSize: 13 }}>
          <h3 style={{ fontWeight: "bold", marginBottom: 12 }}>New Customer</h3>
          <p style={{ color: "#666", marginBottom: 8 }}>As a registered Abt.com customer you can:</p>
          <ul style={{ fontSize: 12, color: "#333", marginBottom: 16, paddingLeft: 20, lineHeight: 2 }}>
            <li>Store billing &amp; shipping information</li>
            <li>Check your order status</li>
            <li>Track your delivery Status</li>
            <li>View your order history</li>
          </ul>
          <Link href="/register" style={{ backgroundColor: "#cc0000", color: "white", padding: "6px 16px", fontWeight: "bold", fontSize: 13, display: "inline-block" }}>
            CREATE NEW ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
}

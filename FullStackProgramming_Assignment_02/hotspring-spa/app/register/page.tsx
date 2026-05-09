import Link from "next/link";

export default function RegisterPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; Register
      </p>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Create New Account</h1>
      <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 24, maxWidth: 560, fontSize: 13 }}>
        <h3 style={{ fontWeight: "bold", marginBottom: 8 }}>Personal Information</h3>
        <p style={{ color: "#cc0000", fontSize: 12, marginBottom: 16 }}>* Required Fields</p>

        {[
          { label: "First Name", type: "text" },
          { label: "Last Name", type: "text" },
          { label: "Email Address", type: "email" },
          { label: "Password", type: "password" },
          { label: "Confirm Password", type: "password" },
        ].map(({ label, type }) => (
          <div key={label} style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 160, fontSize: 12 }}>{label} <span style={{ color: "#cc0000" }}>*</span></label>
            <input type={type} style={{ flex: 1, border: "1px solid #ccc", padding: "5px 8px", fontSize: 12 }} />
          </div>
        ))}

        <h3 style={{ fontWeight: "bold", margin: "20px 0 8px" }}>Newsletter</h3>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 12 }}>
            <input type="checkbox" style={{ marginRight: 6 }} />
            Subscribe to our newsletter
          </label>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/" style={{ backgroundColor: "#cc0000", color: "white", padding: "7px 20px", fontWeight: "bold", fontSize: 13, display: "inline-block" }}>REGISTER</Link>
          <Link href="/login" style={{ backgroundColor: "#888", color: "white", padding: "7px 20px", fontSize: 13, display: "inline-block" }}>BACK TO LOGIN</Link>
        </div>
      </div>
    </div>
  );
}

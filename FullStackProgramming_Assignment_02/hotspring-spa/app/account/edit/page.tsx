import Link from "next/link";

export default function EditAccountPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; <Link href="/account" style={{ color: "#cc0000" }}>My Account</Link> &gt; Edit Account
      </p>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Edit Account Information</h1>
      <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 24, maxWidth: 560, fontSize: 13 }}>
        <h3 style={{ fontWeight: "bold", marginBottom: 8 }}>Personal Information</h3>
        <p style={{ color: "#cc0000", fontSize: 12, marginBottom: 16 }}>* Required Fields</p>
        {[
          { label: "First Name", value: "John", type: "text" },
          { label: "Last Name", value: "Doe", type: "text" },
          { label: "Email Address", value: "john.doe@example.com", type: "email" },
        ].map(({ label, value, type }) => (
          <div key={label} style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 160, fontSize: 12 }}>{label} <span style={{ color: "#cc0000" }}>*</span></label>
            <input type={type} defaultValue={value} style={{ flex: 1, border: "1px solid #ccc", padding: "5px 8px", fontSize: 12 }} />
          </div>
        ))}
        <h3 style={{ fontWeight: "bold", margin: "20px 0 8px" }}>Change Password</h3>
        {["Current Password", "New Password", "Confirm New Password"].map((label) => (
          <div key={label} style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 160, fontSize: 12 }}>{label}</label>
            <input type="password" style={{ flex: 1, border: "1px solid #ccc", padding: "5px 8px", fontSize: 12 }} />
          </div>
        ))}
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <Link href="/account" style={{ backgroundColor: "#cc0000", color: "white", padding: "7px 20px", fontWeight: "bold", fontSize: 13, display: "inline-block" }}>SAVE</Link>
          <Link href="/account" style={{ backgroundColor: "#888", color: "white", padding: "7px 20px", fontSize: 13, display: "inline-block" }}>BACK</Link>
        </div>
      </div>
    </div>
  );
}

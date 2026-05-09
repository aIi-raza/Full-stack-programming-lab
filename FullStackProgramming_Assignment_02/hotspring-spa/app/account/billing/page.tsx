import Link from "next/link";

const fields = [
  { label: "First Name", type: "text" },
  { label: "Last Name", type: "text" },
  { label: "Company", type: "text" },
  { label: "Address", type: "text" },
  { label: "City", type: "text" },
  { label: "State/Province", type: "text" },
  { label: "Zip/Postal Code", type: "text" },
  { label: "Country", type: "text" },
  { label: "Phone Number", type: "tel" },
];

export default function EditBillingPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; <Link href="/account" style={{ color: "#cc0000" }}>My Account</Link> &gt; Edit Billing Address
      </p>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Edit Billing Address</h1>
      <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 24, maxWidth: 560, fontSize: 13 }}>
        <p style={{ color: "#cc0000", fontSize: 12, marginBottom: 16 }}>* Required Fields</p>
        {fields.map(({ label, type }) => (
          <div key={label} style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
            <label style={{ width: 160, fontSize: 12 }}>{label} <span style={{ color: "#cc0000" }}>*</span></label>
            <input type={type} style={{ flex: 1, border: "1px solid #ccc", padding: "5px 8px", fontSize: 12 }} />
          </div>
        ))}
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <Link href="/account" style={{ backgroundColor: "#cc0000", color: "white", padding: "7px 20px", fontWeight: "bold", fontSize: 13, display: "inline-block" }}>SAVE ADDRESS</Link>
          <Link href="/account" style={{ backgroundColor: "#888", color: "white", padding: "7px 20px", fontSize: 13, display: "inline-block" }}>BACK</Link>
        </div>
      </div>
    </div>
  );
}

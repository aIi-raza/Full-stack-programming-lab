import Link from "next/link";

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; <Link href="/account" style={{ color: "#cc0000" }}>My Account</Link> &gt; Order #{params.id}
      </p>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 4 }}>Order #{params.id}</h1>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 20 }}>Placed on January 15, 2024 | Status: <span style={{ color: "green", fontWeight: "bold" }}>Complete</span></p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20, fontSize: 12 }}>
        <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 16 }}>
          <h3 style={{ fontWeight: "bold", marginBottom: 8 }}>Billing Address</h3>
          <p>John Doe</p><p>123 Main Street</p><p>New York, NY 10001</p><p>United States</p>
        </div>
        <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 16 }}>
          <h3 style={{ fontWeight: "bold", marginBottom: 8 }}>Shipping Address</h3>
          <p>John Doe</p><p>123 Main Street</p><p>New York, NY 10001</p><p>United States</p>
        </div>
      </div>

      <div style={{ backgroundColor: "white", border: "1px solid #ddd", marginBottom: 16 }}>
        <h3 style={{ fontWeight: "bold", padding: "10px 16px", borderBottom: "1px solid #eee", backgroundColor: "#f5f5f5" }}>Items Ordered</h3>
        <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              {["Product Name", "SKU", "Price", "Qty", "Subtotal"].map((h) => (
                <th key={h} style={{ padding: "8px 12px", textAlign: "left", border: "1px solid #eee" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px 12px", border: "1px solid #eee" }}>
                <Link href="/product/9" style={{ color: "#cc0000" }}>Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</Link>
              </td>
              <td style={{ padding: "10px 12px", border: "1px solid #eee" }}>B22CS309NSS</td>
              <td style={{ padding: "10px 12px", border: "1px solid #eee" }}>$1,979.00</td>
              <td style={{ padding: "10px 12px", border: "1px solid #eee" }}>1</td>
              <td style={{ padding: "10px 12px", border: "1px solid #eee" }}>$1,979.00</td>
            </tr>
          </tbody>
        </table>
        <div style={{ padding: "12px 16px", textAlign: "right", fontSize: 12 }}>
          <p>Subtotal: $1,979.00</p>
          <p>Shipping: Free</p>
          <p style={{ fontWeight: "bold", fontSize: 14 }}>Grand Total: $1,979.00</p>
        </div>
      </div>
      <Link href="/account/orders" style={{ backgroundColor: "#888", color: "white", padding: "7px 16px", fontSize: 12, display: "inline-block" }}>BACK TO ORDERS</Link>
    </div>
  );
}

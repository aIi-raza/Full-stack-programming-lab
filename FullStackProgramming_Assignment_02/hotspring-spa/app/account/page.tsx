import Link from "next/link";

export default function MyAccountPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; My Account
      </p>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>My Account</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, fontSize: 13 }}>
        {/* Account Info */}
        <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 20 }}>
          <h3 style={{ fontWeight: "bold", fontSize: 15, borderBottom: "1px solid #eee", paddingBottom: 8, marginBottom: 12 }}>Account Information</h3>
          <p style={{ marginBottom: 4 }}><strong>John Doe</strong></p>
          <p style={{ color: "#666", marginBottom: 12 }}>john.doe@example.com</p>
          <Link href="/account/edit" style={{ color: "#cc0000", fontSize: 12 }}>Edit Account Information</Link>
        </div>

        {/* Orders */}
        <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 20 }}>
          <h3 style={{ fontWeight: "bold", fontSize: 15, borderBottom: "1px solid #eee", paddingBottom: 8, marginBottom: 12 }}>Recent Orders</h3>
          <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                <th style={{ padding: "6px 8px", textAlign: "left", border: "1px solid #eee" }}>Order #</th>
                <th style={{ padding: "6px 8px", textAlign: "left", border: "1px solid #eee" }}>Date</th>
                <th style={{ padding: "6px 8px", textAlign: "left", border: "1px solid #eee" }}>Total</th>
                <th style={{ padding: "6px 8px", textAlign: "left", border: "1px solid #eee" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "6px 8px", border: "1px solid #eee" }}><Link href="/account/orders/1" style={{ color: "#cc0000" }}>100000001</Link></td>
                <td style={{ padding: "6px 8px", border: "1px solid #eee" }}>01/15/2024</td>
                <td style={{ padding: "6px 8px", border: "1px solid #eee" }}>$1,979.00</td>
                <td style={{ padding: "6px 8px", border: "1px solid #eee", color: "green" }}>Complete</td>
              </tr>
              <tr>
                <td style={{ padding: "6px 8px", border: "1px solid #eee" }}><Link href="/account/orders/2" style={{ color: "#cc0000" }}>100000002</Link></td>
                <td style={{ padding: "6px 8px", border: "1px solid #eee" }}>02/03/2024</td>
                <td style={{ padding: "6px 8px", border: "1px solid #eee" }}>$500.00</td>
                <td style={{ padding: "6px 8px", border: "1px solid #eee", color: "orange" }}>Pending</td>
              </tr>
            </tbody>
          </table>
          <Link href="/account/orders" style={{ color: "#cc0000", fontSize: 12, display: "block", marginTop: 8 }}>View All Orders</Link>
        </div>

        {/* Address Book */}
        <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 20 }}>
          <h3 style={{ fontWeight: "bold", fontSize: 15, borderBottom: "1px solid #eee", paddingBottom: 8, marginBottom: 12 }}>Address Book</h3>
          <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
            <div>
              <p style={{ fontWeight: "bold", marginBottom: 4 }}>Default Billing Address</p>
              <p>John Doe</p>
              <p>123 Main Street</p>
              <p>New York, NY 10001</p>
              <Link href="/account/billing" style={{ color: "#cc0000" }}>Edit Address</Link>
            </div>
            <div>
              <p style={{ fontWeight: "bold", marginBottom: 4 }}>Default Shipping Address</p>
              <p>John Doe</p>
              <p>123 Main Street</p>
              <p>New York, NY 10001</p>
              <Link href="/account/shipping" style={{ color: "#cc0000" }}>Edit Address</Link>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 20 }}>
          <h3 style={{ fontWeight: "bold", fontSize: 15, borderBottom: "1px solid #eee", paddingBottom: 8, marginBottom: 12 }}>Quick Links</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
            {[
              { label: "My Orders", href: "/account/orders" },
              { label: "Edit Account", href: "/account/edit" },
              { label: "Edit Billing Address", href: "/account/billing" },
              { label: "Edit Shipping Address", href: "/account/shipping" },
              { label: "Shopping Cart", href: "/cart" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ color: "#cc0000" }}>› {label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

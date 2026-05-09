import Link from "next/link";

const orders = [
  { id: "100000001", date: "01/15/2024", shipTo: "John Doe", total: "$1,979.00", status: "Complete" },
  { id: "100000002", date: "02/03/2024", shipTo: "John Doe", total: "$500.00", status: "Pending" },
  { id: "100000003", date: "03/10/2024", shipTo: "Jane Doe", total: "$4,899.00", status: "Processing" },
];

export default function OrdersPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; <Link href="/account" style={{ color: "#cc0000" }}>My Account</Link> &gt; My Orders
      </p>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>My Orders</h1>
      <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 0 }}>
        <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#cc0000", color: "white" }}>
              {["Order #", "Date", "Ship To", "Order Total", "Status", "Action"].map((h) => (
                <th key={h} style={{ padding: "10px 12px", textAlign: "left" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={order.id} style={{ backgroundColor: i % 2 === 0 ? "white" : "#f9f9f9" }}>
                <td style={{ padding: "10px 12px", border: "1px solid #eee" }}>
                  <Link href={`/account/orders/${order.id}`} style={{ color: "#cc0000" }}>{order.id}</Link>
                </td>
                <td style={{ padding: "10px 12px", border: "1px solid #eee" }}>{order.date}</td>
                <td style={{ padding: "10px 12px", border: "1px solid #eee" }}>{order.shipTo}</td>
                <td style={{ padding: "10px 12px", border: "1px solid #eee" }}>{order.total}</td>
                <td style={{ padding: "10px 12px", border: "1px solid #eee", color: order.status === "Complete" ? "green" : order.status === "Pending" ? "orange" : "#0066cc" }}>{order.status}</td>
                <td style={{ padding: "10px 12px", border: "1px solid #eee" }}>
                  <Link href={`/account/orders/${order.id}`} style={{ color: "#cc0000" }}>View Order</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: 16 }}>
        <Link href="/account" style={{ backgroundColor: "#888", color: "white", padding: "7px 16px", fontSize: 12, display: "inline-block" }}>BACK TO MY ACCOUNT</Link>
      </div>
    </div>
  );
}

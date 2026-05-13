"use client";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { user, orders } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (user === null) router.push("/login");
  }, [user, router]);

  if (!user) return null;

  const order = orders.find((o) => o.id === parseInt(id));

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt;{" "}
        <Link href="/account" style={{ color: "var(--red)" }}>My Account</Link> &gt;{" "}
        <Link href="/account/orders" style={{ color: "var(--red)" }}>Orders</Link> &gt;{" "}
        #{id}
      </p>
      <h1 className="page-heading">Order #{id}</h1>

      {!order ? (
        <div className="page-box">
          <p style={{ color: "#888" }}>Order not found. <Link href="/account/orders" className="inline-link">View all orders</Link></p>
        </div>
      ) : (
        <div className="page-box">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20, fontSize: 13 }}>
            <div>
              <p><strong>Order #:</strong> {order.id}</p>
              <p><strong>Date:</strong> {order.date}</p>
            </div>
            <div>
              <p><strong>Status:</strong>{" "}
                <span className={`status-pill ${order.status.toLowerCase().replace(/\s/g, "-")}`}>{order.status}</span>
              </p>
              <p><strong>Total:</strong> <span style={{ color: "var(--red)", fontWeight: 700 }}>${(+order.total).toFixed(2)}</span></p>
            </div>
          </div>

          <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 17, marginBottom: 12, borderBottom: "1px solid var(--border)", paddingBottom: 8 }}>Items Ordered</h3>
          <table className="order-review-tbl">
            <thead>
              <tr><th>Product</th><th>Qty</th><th>Unit Price</th><th>Subtotal</th></tr>
            </thead>
            <tbody>
              {(order.items || []).map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>${(+item.price).toFixed(2)}</td>
                  <td>${(item.qty * (+item.price)).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ textAlign: "right", marginTop: 12, fontSize: 15, fontWeight: 700 }}>
            Grand Total: <span style={{ color: "var(--red)", fontSize: 20, fontFamily: "'Oswald',sans-serif" }}>${(+order.total).toFixed(2)}</span>
          </div>

          <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
            <Link href="/account/orders" className="btn-hs btn-dark">← BACK TO ORDERS</Link>
            <Link href="/category" className="btn-hs btn-red">CONTINUE SHOPPING</Link>
          </div>
        </div>
      )}
    </div>
  );
}

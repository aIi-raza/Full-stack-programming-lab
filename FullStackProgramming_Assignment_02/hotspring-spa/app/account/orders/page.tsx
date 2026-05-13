"use client";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OrdersPage() {
  const { user, orders } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (user === null) router.push("/login");
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt;{" "}
        <Link href="/account" style={{ color: "var(--red)" }}>My Account</Link> &gt; My Orders
      </p>
      <h1 className="page-heading">My Orders</h1>
      <div className="page-box">
        {orders.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888", padding: 30 }}>
            No orders yet. <Link href="/category" className="inline-link">Start shopping</Link>
          </p>
        ) : (
          <table className="orders-tbl">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td><span className="order-num-link">#{o.id}</span></td>
                  <td>{o.date}</td>
                  <td>
                    <span className={`status-pill ${o.status.toLowerCase().replace(/\s/g, "-")}`}>
                      {o.status}
                    </span>
                  </td>
                  <td>${(+o.total).toFixed(2)}</td>
                  <td>
                    <Link href={`/account/orders/${o.id}`} className="btn-hs btn-red" style={{ fontSize: 11, padding: "5px 12px" }}>
                      VIEW ORDER
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

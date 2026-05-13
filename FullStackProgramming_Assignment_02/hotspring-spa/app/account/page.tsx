"use client";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MyAccountPage() {
  const { user, orders, logout } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (user === null) router.push("/login");
  }, [user, router]);

  if (!user) return null;

  const billing = typeof window !== "undefined"
    ? (() => { try { return JSON.parse(localStorage.getItem("hs_billing") || "{}"); } catch { return {}; } })()
    : {};
  const shipping = typeof window !== "undefined"
    ? (() => { try { return JSON.parse(localStorage.getItem("hs_shipping") || "{}"); } catch { return {}; } })()
    : {};

  const addrFmt = (a: Record<string, string>) =>
    a.firstName ? `${a.firstName} ${a.lastName}, ${a.company || ""}, ${a.address}, ${a.city}, ${a.state} ${a.zip}, ${a.country}` : "No address saved.";

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt; My Account
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h1 className="page-heading" style={{ marginBottom: 0 }}>Hello {user.firstName}!</h1>
        <button className="btn-hs btn-dark" onClick={() => { logout(); router.push("/"); }} style={{ fontSize: 12 }}>Sign Out</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, fontSize: 13 }}>
        {/* Account Info */}
        <div className="page-box">
          <h3 style={{ fontWeight: 700, fontSize: 15, borderBottom: "1px solid var(--border)", paddingBottom: 8, marginBottom: 12 }}>Account Information</h3>
          <p style={{ marginBottom: 4 }}><strong>{user.firstName} {user.lastName}</strong></p>
          <p style={{ color: "#666", marginBottom: 12 }}>{user.email}</p>
          <Link href="/account/edit" style={{ color: "var(--red)", fontSize: 12 }}>Edit Account Information</Link>
        </div>

        {/* Address Book */}
        <div className="page-box">
          <h3 style={{ fontWeight: 700, fontSize: 15, borderBottom: "1px solid var(--border)", paddingBottom: 8, marginBottom: 12 }}>Address Book</h3>
          <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
            <div>
              <p style={{ fontWeight: 700, marginBottom: 4 }}>Default Billing Address</p>
              <div className="addr-box">{addrFmt(billing)}</div>
              <Link href="/account/billing" style={{ color: "var(--red)" }}>Edit Address</Link>
            </div>
            <div>
              <p style={{ fontWeight: 700, marginBottom: 4 }}>Default Shipping Address</p>
              <div className="addr-box">{addrFmt(shipping)}</div>
              <Link href="/account/shipping" style={{ color: "var(--red)" }}>Edit Address</Link>
            </div>
          </div>
        </div>

        {/* Recent Orders — full width */}
        <div className="page-box" style={{ gridColumn: "1 / -1" }}>
          <h3 style={{ fontWeight: 700, fontSize: 15, borderBottom: "1px solid var(--border)", paddingBottom: 8, marginBottom: 12 }}>My Orders</h3>
          {orders.length === 0 ? (
            <p style={{ color: "#888" }}>No orders yet. <Link href="/category" className="inline-link">Shop now</Link></p>
          ) : (
            <table className="orders-tbl">
              <thead>
                <tr>
                  <th>Order #</th><th>Date</th><th>Status</th><th>Total</th><th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 6).map((o) => (
                  <tr key={o.id}>
                    <td><span className="order-num-link">#{o.id}</span></td>
                    <td>{o.date}</td>
                    <td>
                      <span className={`status-pill ${o.status.toLowerCase().replace(" ", "-")}`}>{o.status}</span>
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

        {/* Quick links */}
        <div className="page-box">
          <h3 style={{ fontWeight: 700, fontSize: 15, borderBottom: "1px solid var(--border)", paddingBottom: 8, marginBottom: 12 }}>Quick Links</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              ["Edit Account", "/account/edit"],
              ["Edit Billing Address", "/account/billing"],
              ["Edit Shipping Address", "/account/shipping"],
              ["Shopping Cart", "/cart"],
              ["Continue Shopping", "/category"],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ color: "var(--red)" }}>› {label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

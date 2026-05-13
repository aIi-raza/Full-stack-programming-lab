"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";

export default function CheckoutPage() {
  const { cart, cartTotal, placeOrder, clearCart, showToast } = useStore();
  const router = useRouter();
  const [shipDiff, setShipDiff] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", address: "", city: "", state: "", zip: "",
    card: "", expiry: "", cvv: "", terms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function set(k: string, v: string | boolean) { setForm((f) => ({ ...f, [k]: v })); }

  function formatCard(v: string) {
    return v.replace(/\D/g, "").substring(0, 16).replace(/(.{4})/g, "$1 ").trim();
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required.";
    if (!form.lastName.trim()) e.lastName = "Required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Valid email required.";
    if (!form.address.trim()) e.address = "Required.";
    if (!form.card.trim()) e.card = "Required.";
    if (!form.cvv.trim()) e.cvv = "Required.";
    if (!form.terms) e.terms = "You must accept terms.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!cart.length) { showToast("Your cart is empty.", "error"); return; }
    if (!validate()) { showToast("Please fix the errors above.", "error"); return; }
    const order = placeOrder(cart, cartTotal);
    clearCart();
    showToast(`Order #${order.id} placed successfully!`, "success");
    setTimeout(() => router.push("/account"), 2200);
  }

  const F = ({ label, name, type = "text", colSpan = 1 }: { label: string; name: string; type?: string; colSpan?: number }) => (
    <div style={{ gridColumn: `span ${colSpan}` }}>
      <label className="form-label-hs">{label} <span className="req">*</span></label>
      <input
        type={type}
        className={`hs-input${errors[name] ? " is-invalid" : ""}`}
        value={(form as any)[name]}
        onChange={(e) => set(name, type === "text" && name === "card" ? formatCard(e.target.value) : e.target.value)}
      />
      {errors[name] && <div className="hs-error show">{errors[name]}</div>}
    </div>
  );

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt; Checkout
      </p>
      <h1 className="page-heading">Checkout</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "start" }}>
        <form onSubmit={handleSubmit}>
          {/* Billing */}
          <div className="step-box">
            <h2 className="step-heading">1. Billing Information</h2>
            <div className="form-row-2">
              <F label="First Name" name="firstName" />
              <F label="Last Name" name="lastName" />
            </div>
            <div style={{ marginBottom: 12 }}>
              <F label="Email Address" name="email" type="email" colSpan={1} />
            </div>
            <div style={{ marginBottom: 12 }}>
              <F label="Street Address" name="address" colSpan={1} />
            </div>
            <div className="form-row-2">
              <F label="City" name="city" />
              <F label="State / Province" name="state" />
            </div>
            <div style={{ marginBottom: 0 }}>
              <F label="ZIP / Postal Code" name="zip" />
            </div>
          </div>

          {/* Ship to different */}
          <div className="step-box">
            <h2 className="step-heading">2. Shipping</h2>
            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, cursor: "pointer" }}>
              <input type="checkbox" checked={shipDiff} onChange={(e) => setShipDiff(e.target.checked)} />
              Ship to a different address
            </label>
            {shipDiff && (
              <div style={{ marginTop: 14 }}>
                <div className="form-row-2">
                  <div>
                    <label className="form-label-hs">First Name</label>
                    <input type="text" className="hs-input" />
                  </div>
                  <div>
                    <label className="form-label-hs">Last Name</label>
                    <input type="text" className="hs-input" />
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <label className="form-label-hs">Street Address</label>
                  <input type="text" className="hs-input" />
                </div>
              </div>
            )}
          </div>

          {/* Payment */}
          <div className="step-box">
            <h2 className="step-heading">3. Payment</h2>
            <div style={{ marginBottom: 12 }}>
              <label className="form-label-hs">Card Number <span className="req">*</span></label>
              <input type="text" className={`hs-input${errors.card ? " is-invalid" : ""}`}
                placeholder="1234 5678 9012 3456"
                value={form.card}
                onChange={(e) => set("card", formatCard(e.target.value))}
              />
              {errors.card && <div className="hs-error show">{errors.card}</div>}
            </div>
            <div className="form-row-2">
              <div>
                <label className="form-label-hs">Expiry (MM/YY)</label>
                <input type="text" className="hs-input" placeholder="MM/YY" value={form.expiry} onChange={(e) => set("expiry", e.target.value)} />
              </div>
              <div>
                <label className="form-label-hs">CVV <span className="req">*</span></label>
                <input type="text" className={`hs-input${errors.cvv ? " is-invalid" : ""}`}
                  placeholder="123" maxLength={4} value={form.cvv} onChange={(e) => set("cvv", e.target.value)} />
                {errors.cvv && <div className="hs-error show">{errors.cvv}</div>}
              </div>
            </div>
            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, marginTop: 14, cursor: "pointer" }}>
              <input type="checkbox" checked={form.terms} onChange={(e) => set("terms", e.target.checked)} />
              I agree to the{" "}
              <Link href="/terms" style={{ color: "var(--red)" }}>Terms &amp; Conditions</Link>
            </label>
            {errors.terms && <div className="hs-error show">{errors.terms}</div>}
          </div>

          <button type="submit" className="btn-hs btn-red" style={{ fontSize: 15, padding: "12px 32px" }}>
            PLACE ORDER
          </button>
        </form>

        {/* Order Summary */}
        <div className="step-box" style={{ position: "sticky", top: 16 }}>
          <h2 className="step-heading">Order Summary</h2>
          <table className="order-review-tbl">
            <thead>
              <tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th></tr>
            </thead>
            <tbody>
              {cart.map((i) => (
                <tr key={i.id}>
                  <td style={{ fontSize: 12 }}>{i.name.substring(0, 28)}...</td>
                  <td>${i.salePrice.toFixed(2)}</td>
                  <td>{i.qty}</td>
                  <td>${(i.salePrice * i.qty).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 12, textAlign: "right" }}>
            <strong style={{ fontSize: 16 }}>Grand Total: <span style={{ color: "var(--red)", fontSize: 22, fontFamily: "Oswald,sans-serif" }}>${cartTotal.toFixed(2)}</span></strong>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function PaymentPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; <Link href="/cart" style={{ color: "#cc0000" }}>Shopping Cart</Link> &gt; Payment
      </p>
      <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Payment Information</h1>
      <div style={{ display: "flex", gap: 20 }}>
        {/* Payment form */}
        <div style={{ flex: 2, backgroundColor: "white", border: "1px solid #ddd", padding: 24, fontSize: 13 }}>
          <h3 style={{ fontWeight: "bold", marginBottom: 16, fontSize: 15 }}>Billing Information</h3>
          {[
            { label: "First Name", type: "text" },
            { label: "Last Name", type: "text" },
            { label: "Email Address", type: "email" },
            { label: "Phone Number", type: "tel" },
            { label: "Address", type: "text" },
            { label: "City", type: "text" },
            { label: "State", type: "text" },
            { label: "Zip Code", type: "text" },
          ].map(({ label, type }) => (
            <div key={label} style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
              <label style={{ width: 160, fontSize: 12 }}>{label} <span style={{ color: "#cc0000" }}>*</span></label>
              <input type={type} style={{ flex: 1, border: "1px solid #ccc", padding: "5px 8px", fontSize: 12 }} />
            </div>
          ))}

          <h3 style={{ fontWeight: "bold", margin: "20px 0 16px", fontSize: 15 }}>Payment Method</h3>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <input type="radio" name="payment" defaultChecked /> Credit / Debit Card
            </label>
          </div>
          {[
            { label: "Card Number", type: "text", placeholder: "XXXX XXXX XXXX XXXX" },
            { label: "Name on Card", type: "text" },
            { label: "Expiry Date", type: "text", placeholder: "MM / YY" },
            { label: "CVV", type: "text", placeholder: "XXX" },
          ].map(({ label, type, placeholder }) => (
            <div key={label} style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
              <label style={{ width: 160, fontSize: 12 }}>{label} <span style={{ color: "#cc0000" }}>*</span></label>
              <input type={type} placeholder={placeholder} style={{ flex: 1, border: "1px solid #ccc", padding: "5px 8px", fontSize: 12 }} />
            </div>
          ))}
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <button style={{ backgroundColor: "#cc0000", color: "white", padding: "9px 24px", border: "none", fontWeight: "bold", fontSize: 13, cursor: "pointer" }}>PLACE ORDER</button>
            <Link href="/cart" style={{ backgroundColor: "#888", color: "white", padding: "9px 16px", fontSize: 13, display: "inline-block" }}>BACK TO CART</Link>
          </div>
        </div>

        {/* Order summary */}
        <div style={{ flex: 1 }}>
          <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 16, fontSize: 12 }}>
            <h3 style={{ fontWeight: "bold", marginBottom: 12, fontSize: 14 }}>Order Summary</h3>
            <div style={{ borderBottom: "1px solid #eee", paddingBottom: 12, marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span>Hot Tub 3 Person x 2</span>
                <span>$21.00</span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span>Subtotal:</span><span>$21.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span>Shipping:</span><span style={{ color: "green" }}>FREE</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: 14, borderTop: "1px solid #eee", paddingTop: 8, marginTop: 8 }}>
              <span>Total:</span><span style={{ color: "#cc0000" }}>$21.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt; Terms &amp; Conditions
      </p>
      <div className="page-box">
        <h1 className="page-heading">Terms &amp; Conditions</h1>
        <div style={{ fontSize: 13, lineHeight: 1.9, color: "#555" }}>
          <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, color: "var(--dark)", margin: "16px 0 7px" }}>1. Acceptance of Terms</h3>
          <p>By accessing and using the HotSpring Portable Spas website, you accept and agree to be bound by these terms. Additionally, when using our services, you shall be subject to any posted guidelines applicable to such services.</p>

          <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, color: "var(--dark)", margin: "16px 0 7px" }}>2. Product Information</h3>
          <p>HotSpring Portable Spas attempts to be as accurate as possible. However, we do not warrant that product descriptions are free of error. If a product is not as described, your sole remedy is to return it in unused condition.</p>

          <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, color: "var(--dark)", margin: "16px 0 7px" }}>3. Pricing &amp; Payment</h3>
          <p>All prices are in US Dollars. We reserve the right to refuse or cancel any orders placed at incorrect prices. We accept Visa, MasterCard, American Express, and PayPal. Your card will be charged upon order placement.</p>

          <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, color: "var(--dark)", margin: "16px 0 7px" }}>4. Shipping &amp; Delivery</h3>
          <p>HotSpring Portable Spas ships to all 50 United States. Standard delivery times are 7–10 business days. Large items such as hot tubs require freight delivery and may need scheduling coordination.</p>

          <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, color: "var(--dark)", margin: "16px 0 7px" }}>5. Returns &amp; Refunds</h3>
          <p>We offer a 30-day return policy on most items. Products must be returned in original unused condition. Shipping and handling charges are non-refundable. Custom orders are non-returnable.</p>

          <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, color: "var(--dark)", margin: "16px 0 7px" }}>6. Warranty</h3>
          <p>All products come with a manufacturer's warranty. Coverage varies by product and brand. Please refer to the specific product documentation for warranty details.</p>

          <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, color: "var(--dark)", margin: "16px 0 7px" }}>7. Privacy Policy</h3>
          <p>HotSpring Portable Spas takes your privacy seriously. We do not sell or share your personal information with third parties for marketing purposes. Industry-standard security measures protect your data.</p>

          <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, color: "var(--dark)", margin: "16px 0 7px" }}>8. Limitation of Liability</h3>
          <p>HotSpring Portable Spas shall not be liable for any indirect, incidental, or consequential damages resulting from use of the service.</p>

          <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, color: "var(--dark)", margin: "16px 0 7px" }}>9. Contact</h3>
          <p>For questions: legal@hotspringspas.com | 888-201-8899 | 5000N Ford Avenue, NY 20145</p>

          <div className="info-note" style={{ marginTop: 20 }}>
            By placing an order, you confirm you have read, understood, and agree to these Terms and Conditions.
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href="/checkout" className="btn-hs btn-red">I Accept — Return to Checkout</Link>
            <Link href="/" className="btn-hs btn-dark" style={{ marginLeft: 10 }}>Return to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

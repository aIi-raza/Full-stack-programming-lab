import Link from "next/link";

export default function TermsPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "#cc0000" }}>Home</Link> &gt; Terms &amp; Conditions
      </p>
      <div style={{ backgroundColor: "white", border: "1px solid #ddd", padding: 24, fontSize: 13, lineHeight: 1.8 }}>
        <h1 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Terms &amp; Conditions</h1>
        {[
          { title: "1. Acceptance of Terms", body: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service." },
          { title: "2. Use of the Website", body: "This website is for personal, non-commercial use only. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from this website." },
          { title: "3. Orders and Payment", body: "All orders are subject to product availability and confirmation of the order price. We reserve the right to refuse or cancel any order. Payment must be received prior to shipment. We accept major credit cards and PayPal." },
          { title: "4. Shipping Policy", body: "Orders are typically processed within 2-3 business days. Standard delivery takes 7-10 business days. Free shipping is available on orders over $500. Expedited shipping options are available at checkout." },
          { title: "5. Returns and Refunds", body: "We accept returns within 30 days of purchase for items in their original condition. Shipping costs for returns are the responsibility of the customer unless the return is due to a defect or error on our part." },
          { title: "6. Privacy Policy", body: "We are committed to protecting your privacy. Any information you provide to us is kept confidential and will not be sold or shared with third parties except as required to fulfill your order." },
          { title: "7. Limitation of Liability", body: "HotSpring Portable Spas shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of this website or the products purchased herein." },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 15, fontWeight: "bold", marginBottom: 8, color: "#222" }}>{title}</h2>
            <p style={{ color: "#555" }}>{body}</p>
          </div>
        ))}
        <p style={{ color: "#888", fontSize: 12, borderTop: "1px solid #eee", paddingTop: 16, marginTop: 20 }}>Last updated: January 2024</p>
      </div>
    </div>
  );
}

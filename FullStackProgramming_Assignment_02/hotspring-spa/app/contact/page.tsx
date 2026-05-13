"use client";
import { useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";

export default function ContactPage() {
  const { showToast } = useStore();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function set(k: string, v: string) { setForm((f) => ({ ...f, [k]: v })); }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "This field is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email address.";
    if (!form.subject.trim()) e.subject = "This field is required.";
    if (!form.message.trim()) e.message = "This field is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // Save to localStorage like Assignment 1
    try {
      const msgs = JSON.parse(localStorage.getItem("hs_contacts") || "[]");
      msgs.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem("hs_contacts", JSON.stringify(msgs));
    } catch {}
    showToast("Message sent! We'll reply within 24 hours.", "success");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setErrors({});
  }

  const F = ({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) => (
    <div style={{ marginBottom: 12, display: "flex", alignItems: "flex-start" }}>
      <label style={{ width: 160, fontSize: 12, paddingTop: 8, flexShrink: 0 }}>
        {label} {required && <span style={{ color: "var(--red)" }}>*</span>}
      </label>
      <div style={{ flex: 1 }}>
        <input type={type} className={`hs-input${errors[name] ? " is-invalid" : ""}`}
          value={(form as any)[name]} onChange={(e) => set(name, e.target.value)} />
        {errors[name] && <div className="hs-error show">{errors[name]}</div>}
      </div>
    </div>
  );

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt; Contact Us
      </p>
      <h1 className="page-heading">Contact Us</h1>
      <div style={{ display: "flex", gap: 24, fontSize: 13 }}>
        {/* FORM */}
        <div style={{ flex: 2 }} className="page-box">
          <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Send Us a Message</h3>
          <p style={{ color: "var(--red)", fontSize: 12, marginBottom: 16 }}>* Required Fields</p>
          <form onSubmit={handleSubmit}>
            <F label="Your Name" name="name" />
            <F label="Email Address" name="email" type="email" />
            <F label="Phone Number" name="phone" type="tel" required={false} />
            <F label="Subject" name="subject" />
            <div style={{ marginBottom: 20, display: "flex", alignItems: "flex-start" }}>
              <label style={{ width: 160, fontSize: 12, paddingTop: 8, flexShrink: 0 }}>
                Message <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <div style={{ flex: 1 }}>
                <textarea
                  rows={6}
                  className={`hs-input${errors.message ? " is-invalid" : ""}`}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                />
                {errors.message && <div className="hs-error show">{errors.message}</div>}
              </div>
            </div>
            <div style={{ paddingLeft: 160 }}>
              <button type="submit" className="btn-hs btn-red">SEND MESSAGE</button>
            </div>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div style={{ flex: 1 }}>
          <div className="page-box" style={{ marginBottom: 16 }}>
            <h3 style={{ fontWeight: 700, marginBottom: 12, fontSize: 14 }}>Our Contact Information</h3>
            <div style={{ fontSize: 12, lineHeight: 2.2 }}>
              <p>📞 <strong>Phone:</strong> 888-201-8899</p>
              <p>📧 <strong>Email:</strong> servicemail@yoursitename.com</p>
              <p>🕐 <strong>Hours:</strong> Mon - Fri: 9AM - 6PM</p>
              <p>📍 <strong>Address:</strong><br />Your Address, Street<br />State &amp; Zip Code<br />City &amp; Country</p>
            </div>
          </div>
          <div style={{ background: "#1a2332", color: "#fff", padding: 20, borderRadius: 4 }}>
            <h3 style={{ fontWeight: 700, marginBottom: 10, fontSize: 14 }}>Customer Support</h3>
            <p style={{ lineHeight: 1.8, color: "#ccc", fontSize: 12 }}>
              Our customer support team is available 24/7 to assist you with any questions about our products, orders, or services.
            </p>
            <p style={{ marginTop: 12, color: "var(--red)", fontSize: 18, fontWeight: 700 }}>020 38989565</p>
          </div>
        </div>
      </div>
    </div>
  );
}

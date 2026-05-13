"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";

interface Address {
  firstName: string; lastName: string; company: string;
  address: string; city: string; state: string; zip: string; country: string;
}

const DEFAULT: Address = { firstName: "Farrukh", lastName: "Javaid", company: "Hotub Spas", address: "Plot 10 Tech Society", city: "California", state: "CA", zip: "20112", country: "United States" };

export default function EditShippingPage() {
  const { user, showToast } = useStore();
  const router = useRouter();
  const [form, setForm] = useState<Address>(DEFAULT);

  useEffect(() => {
    if (!user) { router.push("/login"); return; }
    try {
      const saved = JSON.parse(localStorage.getItem("hs_shipping") || "null");
      if (saved) setForm(saved);
    } catch {}
  }, [user, router]);

  function set(k: keyof Address, v: string) { setForm((f) => ({ ...f, [k]: v })); }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem("hs_shipping", JSON.stringify(form));
    showToast("Shipping address saved!", "success");
    setTimeout(() => router.push("/account"), 1200);
  }

  if (!user) return null;

  const fields: { label: string; key: keyof Address; req?: boolean }[] = [
    { label: "First Name", key: "firstName", req: true },
    { label: "Last Name", key: "lastName", req: true },
    { label: "Company", key: "company" },
    { label: "Street Address", key: "address", req: true },
    { label: "City", key: "city", req: true },
    { label: "State / Province", key: "state", req: true },
    { label: "ZIP / Postal Code", key: "zip", req: true },
    { label: "Country", key: "country", req: true },
  ];

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt;{" "}
        <Link href="/account" style={{ color: "var(--red)" }}>My Account</Link> &gt; Edit Shipping Address
      </p>
      <h1 className="page-heading">Edit Shipping Address</h1>
      <div className="page-box" style={{ maxWidth: 600 }}>
        <form onSubmit={handleSubmit}>
          {fields.map(({ label, key, req }) => (
            <div key={key} className="label-input-row">
              <label className="form-label-hs">{label} {req && <span className="req">*</span>}</label>
              <input type="text" className="hs-input" value={form[key]} onChange={(e) => set(key, e.target.value)} />
            </div>
          ))}
          <div style={{ marginTop: 16, paddingLeft: 153, display: "flex", gap: 12 }}>
            <button type="submit" className="btn-hs btn-red">SAVE ADDRESS</button>
            <Link href="/account" className="btn-hs btn-dark">CANCEL</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function EditAccountPage() {
  const { user, showToast } = useStore();
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", curPass: "", newPass: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!user) { router.push("/login"); return; }
    setForm((f) => ({ ...f, firstName: user.firstName, lastName: user.lastName, email: user.email }));
  }, [user, router]);

  function set(k: string, v: string) { setForm((f) => ({ ...f, [k]: v })); }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = "Required.";
    if (!form.lastName.trim()) errs.lastName = "Required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Valid email required.";
    if (form.newPass && form.newPass.length < 6) errs.newPass = "Minimum 6 characters.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    try {
      const users = JSON.parse(localStorage.getItem("hs_users") || "[]");
      const idx = users.findIndex((u: any) => u.id === user!.id);
      if (idx === -1) return;
      if (form.newPass) {
        if (users[idx].password !== form.curPass) { showToast("Current password incorrect.", "error"); return; }
        users[idx].password = form.newPass;
      }
      users[idx].firstName = form.firstName.trim();
      users[idx].lastName = form.lastName.trim();
      users[idx].email = form.email.trim();
      localStorage.setItem("hs_users", JSON.stringify(users));
      localStorage.setItem("hs_session", JSON.stringify(users[idx]));
    } catch {}
    showToast("Account updated!", "success");
    setTimeout(() => router.push("/account"), 1300);
  }

  if (!user) return null;

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt; <Link href="/account" style={{ color: "var(--red)" }}>My Account</Link> &gt; Edit Account
      </p>
      <h1 className="page-heading">Edit Account Information</h1>
      <div className="page-box" style={{ maxWidth: 600 }}>
        <form onSubmit={handleSubmit}>
          {[
            { label: "First Name", key: "firstName", type: "text" },
            { label: "Last Name", key: "lastName", type: "text" },
            { label: "Email", key: "email", type: "email" },
            { label: "Current Password", key: "curPass", type: "password" },
            { label: "New Password", key: "newPass", type: "password" },
          ].map(({ label, key, type }) => (
            <div key={key} className="label-input-row">
              <label className="form-label-hs">{label}</label>
              <div>
                <input type={type} className={`hs-input${errors[key] ? " is-invalid" : ""}`}
                  value={(form as any)[key]} onChange={(e) => set(key, e.target.value)} />
                {errors[key] && <div className="hs-error show">{errors[key]}</div>}
              </div>
            </div>
          ))}
          <div style={{ marginTop: 16, paddingLeft: 153, display: "flex", gap: 12 }}>
            <button type="submit" className="btn-hs btn-red">SAVE CHANGES</button>
            <Link href="/account" className="btn-hs btn-dark">CANCEL</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

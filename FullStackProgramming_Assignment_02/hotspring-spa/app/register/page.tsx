"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";

export default function RegisterPage() {
  const { register, login, showToast } = useStore();
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", pass: "", repass: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function set(k: string, v: string) { setForm((f) => ({ ...f, [k]: v })); }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "This field is required.";
    if (!form.lastName.trim()) e.lastName = "This field is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email address.";
    if (form.pass.length < 6) e.pass = "Minimum 6 characters.";
    if (form.pass !== form.repass) e.repass = "Passwords do not match.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    if (register({ email: form.email, password: form.pass, firstName: form.firstName, lastName: form.lastName })) {
      login(form.email, form.pass);
      showToast("Account created! Redirecting…", "success");
      setTimeout(() => router.push("/account"), 1300);
    } else {
      showToast("This email is already registered.", "error");
      setErrors({ email: "Email already registered." });
    }
  }

  const Field = ({ label, name, type = "text" }: { label: string; name: string; type?: string }) => (
    <div className="label-input-row">
      <label className="form-label-hs">{label} <span className="req">*</span></label>
      <div>
        <input
          type={type}
          className={`hs-input${errors[name] ? " is-invalid" : ""}`}
          value={(form as any)[name]}
          onChange={(e) => set(name, e.target.value)}
        />
        {errors[name] && <div className="hs-error show">{errors[name]}</div>}
      </div>
    </div>
  );

  return (
    <div className="hs-container" style={{ padding: "16px" }}>
      <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>
        <Link href="/" style={{ color: "var(--red)" }}>Home</Link> &gt; Register
      </p>
      <h1 className="page-heading">Create New Account</h1>
      <div className="page-box">
        <p style={{ color: "var(--red)", fontSize: 12, marginBottom: 16 }}>*Required Fields</p>
        <form onSubmit={handleSubmit}>
          <Field label="First Name" name="firstName" />
          <Field label="Last Name" name="lastName" />
          <Field label="Email Address" name="email" type="email" />
          <Field label="Password" name="pass" type="password" />
          <Field label="Confirm Password" name="repass" type="password" />
          <div style={{ marginTop: 16, paddingLeft: 153 }}>
            <button type="submit" className="btn-hs btn-red">REGISTER</button>
            <Link href="/login" style={{ marginLeft: 16, color: "#0066cc", fontSize: 13 }}>Already have an account? Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

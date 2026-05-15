"use client";

import { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState("login");

  return (
    <main className="container-rustik py-12">
      <div className="mx-auto max-w-[760px] border border-[#dedede] bg-white shadow-[0_3px_14px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-2 border-b border-[#dedede] text-center text-[12px] font-bold uppercase">
          <button onClick={() => setMode("login")} className={`py-4 ${mode === "login" ? "bg-rust text-white" : "bg-[#f4f4f4] text-[#333]"}`}>
            Login
          </button>
          <button onClick={() => setMode("signup")} className={`py-4 ${mode === "signup" ? "bg-rust text-white" : "bg-[#f4f4f4] text-[#333]"}`}>
            Register
          </button>
        </div>
        <div className="grid gap-8 p-7 md:grid-cols-[1fr_0.85fr]">
          <form className="space-y-4">
            <h1 className="serif text-[30px] font-bold">{mode === "login" ? "My Account" : "Create Account"}</h1>
            {mode === "signup" && (
              <label className="block text-[12px] font-bold uppercase text-[#555]">
                Full Name
                <input className="mt-2 w-full border border-[#cfcfcf] px-3 py-3 text-[13px] font-normal normal-case outline-none" placeholder="Your name" />
              </label>
            )}
            <label className="block text-[12px] font-bold uppercase text-[#555]">
              Email Address
              <input type="email" className="mt-2 w-full border border-[#cfcfcf] px-3 py-3 text-[13px] font-normal normal-case outline-none" placeholder="you@example.com" />
            </label>
            <label className="block text-[12px] font-bold uppercase text-[#555]">
              Password
              <input type="password" className="mt-2 w-full border border-[#cfcfcf] px-3 py-3 text-[13px] font-normal normal-case outline-none" placeholder="Password" />
            </label>
            {mode === "signup" && (
              <label className="block text-[12px] font-bold uppercase text-[#555]">
                Confirm Password
                <input type="password" className="mt-2 w-full border border-[#cfcfcf] px-3 py-3 text-[13px] font-normal normal-case outline-none" placeholder="Confirm password" />
              </label>
            )}
            <button type="button" className="w-full bg-rust py-3 text-[12px] font-bold uppercase text-white">
              {mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>
          <div className="border-l border-[#e1e1e1] pl-0 text-[13px] leading-6 text-[#666] md:pl-8">
            <h2 className="serif mb-3 text-[22px] font-bold text-[#222]">Rustik Plank</h2>
            <p>
              Sign in to view orders, save delivery addresses, and keep your cart available while browsing our rustic furniture collections.
            </p>
            <div className="mt-5 border-t border-[#e1e1e1] pt-5 text-[12px]">
              Need help? Call 07584 031409.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

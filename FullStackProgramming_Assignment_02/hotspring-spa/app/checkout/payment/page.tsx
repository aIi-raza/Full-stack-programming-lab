"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Redirect /checkout/payment → /checkout (consolidated in Assignment 2)
export default function PaymentRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/checkout"); }, [router]);
  return null;
}

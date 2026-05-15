"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

function createSessionId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `rustik-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function CartProvider({ children }) {
  const [sessionId, setSessionId] = useState("");
  const [cart, setCart] = useState({ items: [] });

  useEffect(() => {
    const stored = localStorage.getItem("rustik-session-id") || createSessionId();
    localStorage.setItem("rustik-session-id", stored);
    setSessionId(stored);
  }, []);

  async function refreshCart(id = sessionId) {
    if (!id) return;
    const response = await fetch(`/api/cart/${id}`);
    if (response.ok) setCart(await response.json());
  }

  useEffect(() => {
    refreshCart();
  }, [sessionId]);

  async function addToCart(productId, quantity = 1) {
    if (!sessionId) return;
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, productId, quantity })
    });
    if (response.ok) setCart(await response.json());
  }

  async function updateQuantity(productId, quantity) {
    const response = await fetch(`/api/cart/${sessionId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity })
    });
    if (response.ok) setCart(await response.json());
  }

  async function removeItem(productId) {
    const response = await fetch(`/api/cart/${sessionId}/${productId}`, { method: "DELETE" });
    if (response.ok) setCart(await response.json());
  }

  const itemCount = useMemo(
    () => cart.items?.reduce((sum, item) => sum + Number(item.quantity || 0), 0) || 0,
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, itemCount, sessionId, addToCart, updateQuantity, removeItem, refreshCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { Product, defaultUsers, defaultOrders, User, Order } from "./data";

// ── helpers ─────────────────────────────────────────────────────────
function lsGet<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem("hs_" + key);
    return v ? (JSON.parse(v) as T) : null;
  } catch {
    return null;
  }
}
function lsSet<T>(key: string, val: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem("hs_" + key, JSON.stringify(val));
}
function lsInit<T>(key: string, defaultVal: T): T {
  const existing = lsGet<T>(key);
  if (existing === null) {
    lsSet(key, defaultVal);
    return defaultVal;
  }
  return existing;
}

// ── types ────────────────────────────────────────────────────────────
export interface CartItem extends Product {
  qty: number;
}

export interface Toast {
  id: number;
  msg: string;
  type: "success" | "error" | "info";
}

interface StoreCtx {
  // cart
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void;
  // auth
  user: User | null;
  login: (email: string, pass: string) => boolean;
  register: (data: Omit<User, "id">) => boolean;
  logout: () => void;
  // orders
  orders: Order[];
  placeOrder: (items: CartItem[], total: number) => Order;
  // wishlist
  wishlist: string[];
  addToWishlist: (name: string) => void;
  // toast
  toasts: Toast[];
  showToast: (msg: string, type?: Toast["type"]) => void;
}

const Store = createContext<StoreCtx | null>(null);

let _toastId = 0;

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const initialized = useRef(false);

  // seed & hydrate on mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    lsInit("users", defaultUsers);
    lsInit("orders", defaultOrders);
    lsInit("cart", []);
    lsInit("wishlist", []);

    setCart(lsGet<CartItem[]>("cart") ?? []);
    setUser(lsGet<User>("session"));
    setOrders(lsGet<Order[]>("orders") ?? defaultOrders);
    setWishlist(lsGet<string[]>("wishlist") ?? []);
  }, []);

  // ── toast ──
  const showToast = useCallback((msg: string, type: Toast["type"] = "info") => {
    const id = ++_toastId;
    setToasts((prev) => [...prev, { id, msg, type }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      3500
    );
  }, []);

  // ── cart ──
  const saveCart = (c: CartItem[]) => {
    lsSet("cart", c);
    setCart(c);
  };

  const addToCart = useCallback(
    (p: Product) => {
      setCart((prev) => {
        const idx = prev.findIndex((x) => x.id === p.id);
        let next: CartItem[];
        if (idx > -1) {
          next = prev.map((x, i) => (i === idx ? { ...x, qty: x.qty + 1 } : x));
        } else {
          next = [...prev, { ...p, qty: 1 }];
        }
        lsSet("cart", next);
        return next;
      });
      showToast(`"${p.name.substring(0, 30)}…" added to cart.`, "success");
    },
    [showToast]
  );

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => {
      const next = prev.filter((x) => x.id !== id);
      lsSet("cart", next);
      return next;
    });
  }, []);

  const updateQty = useCallback((id: number, qty: number) => {
    setCart((prev) => {
      const next =
        qty < 1
          ? prev.filter((x) => x.id !== id)
          : prev.map((x) => (x.id === id ? { ...x, qty } : x));
      lsSet("cart", next);
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    lsSet("cart", []);
    setCart([]);
  }, []);

  const cartCount = cart.reduce((t, i) => t + i.qty, 0);
  const cartTotal = cart.reduce((t, i) => t + i.salePrice * i.qty, 0);

  // ── auth ──
  const login = useCallback((email: string, pass: string): boolean => {
    const users = lsGet<User[]>("users") ?? defaultUsers;
    const u = users.find((x) => x.email === email && x.password === pass);
    if (u) {
      lsSet("session", u);
      setUser(u);
      return true;
    }
    return false;
  }, []);

  const register = useCallback((data: Omit<User, "id">): boolean => {
    const users = lsGet<User[]>("users") ?? defaultUsers;
    if (users.find((u) => u.email === data.email)) return false;
    const newUser: User = { ...data, id: Date.now() };
    const next = [...users, newUser];
    lsSet("users", next);
    lsSet("session", newUser);
    setUser(newUser);
    return true;
  }, []);

  const logout = useCallback(() => {
    lsSet("session", null);
    setUser(null);
  }, []);

  // ── orders ──
  const placeOrder = useCallback(
    (items: CartItem[], total: number): Order => {
      const order: Order = {
        id: Math.floor(Math.random() * 9000) + 1000,
        userId: user?.id ?? 0,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        status: "Processing",
        total,
        items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.salePrice })),
      };
      setOrders((prev) => {
        const next = [order, ...prev];
        lsSet("orders", next);
        return next;
      });
      return order;
    },
    [user]
  );

  // ── wishlist ──
  const addToWishlist = useCallback(
    (name: string) => {
      setWishlist((prev) => {
        if (prev.includes(name)) {
          showToast("Already in your wishlist.", "info");
          return prev;
        }
        const next = [...prev, name];
        lsSet("wishlist", next);
        showToast("Added to wishlist!", "success");
        return next;
      });
    },
    [showToast]
  );

  return (
    <Store.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        user,
        login,
        register,
        logout,
        orders,
        placeOrder,
        wishlist,
        addToWishlist,
        toasts,
        showToast,
      }}
    >
      {children}
      {/* Toast container */}
      <div style={{ position: "fixed", top: 20, right: 20, zIndex: 9999, display: "flex", flexDirection: "column", gap: 10 }}>
        {toasts.map((t) => (
          <div
            key={t.id}
            style={{
              padding: "12px 20px",
              borderRadius: 4,
              fontSize: 13,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 10,
              maxWidth: 320,
              boxShadow: "0 4px 20px rgba(0,0,0,.25)",
              animation: "slideIn .3s ease",
              background:
                t.type === "success"
                  ? "#2e7d32"
                  : t.type === "error"
                  ? "#cc0000"
                  : "#1a1a1a",
            }}
          >
            <span>{t.type === "success" ? "✓" : t.type === "error" ? "✗" : "ℹ"}</span>
            <span>{t.msg}</span>
          </div>
        ))}
      </div>
    </Store.Provider>
  );
}

export function useStore() {
  const ctx = useContext(Store);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

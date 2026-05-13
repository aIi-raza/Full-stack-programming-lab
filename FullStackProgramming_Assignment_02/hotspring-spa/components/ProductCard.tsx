"use client";
import { useStore } from "@/lib/store";
import { Product, CARD_BG } from "@/lib/data";
import Link from "next/link";

interface Props {
  product: Product;
  idx: number;
  relativeBase?: string; // e.g. "" for home, "" for category
}

export default function ProductCard({ product, idx, relativeBase = "" }: Props) {
  const { addToCart, addToWishlist } = useStore();
  const bg = CARD_BG[idx % CARD_BG.length];

  return (
    <div className="product-card fade-up" style={{ animationDelay: `${idx * 0.07}s` }}>
      <div className="prod-img-wrap" style={{ background: bg }}>
        <span className="spa-icon" style={{ color: "rgba(255,255,255,.8)" }}>♨</span>
      </div>
      <div className="card-body-hs">
        <h5>{product.name}</h5>
        <p>{product.desc.substring(0, 75)}...</p>
        <div className="card-price">${product.salePrice.toFixed(2)}</div>
        <button className="btn-cart" onClick={() => addToCart(product)}>
          🛒 ADD TO CART
        </button>
        <div className="card-links-row">
          <a onClick={() => addToWishlist(product.name)}>ADD TO WISH LIST</a>
          <Link href={`${relativeBase}/product/${product.id}`}>MORE DETAILS</Link>
        </div>
      </div>
    </div>
  );
}

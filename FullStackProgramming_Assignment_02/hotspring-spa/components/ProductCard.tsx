import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
}

export default function ProductCard({ id, name, description, price, image }: ProductCardProps) {
  return (
    <div style={{ backgroundColor: "white", border: "1px solid #e0e0e0", padding: 12, fontSize: 12 }}>
      <div style={{ height: 120, backgroundColor: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
        {image ? (
          <img src={image} alt={name} style={{ maxHeight: 110, maxWidth: "100%", objectFit: "contain" }} />
        ) : (
          <div style={{ width: 80, height: 80, backgroundColor: "#d0d8e0", borderRadius: "50%", border: "8px solid #a0b0c0" }} />
        )}
      </div>
      <p style={{ fontWeight: "bold", marginBottom: 4, fontSize: 11 }}>{name}</p>
      <p style={{ color: "#666", marginBottom: 6, fontSize: 11, lineHeight: 1.4 }}>{description}</p>
      <p className="price" style={{ fontSize: 16, marginBottom: 8 }}>${price}</p>
      <Link href={`/cart`}>
        <button style={{ backgroundColor: "#cc0000", color: "white", border: "none", padding: "6px 12px", cursor: "pointer", fontSize: 11, display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
          🛒 ADD TO CART
        </button>
      </Link>
      <div style={{ display: "flex", gap: 12 }}>
        <a href="#" style={{ color: "#cc0000", fontSize: 11 }}>ADD TO WISH LIST</a>
        <Link href={`/product/${id}`} style={{ color: "#cc0000", fontSize: 11 }}>MORE DETAILS</Link>
      </div>
    </div>
  );
}

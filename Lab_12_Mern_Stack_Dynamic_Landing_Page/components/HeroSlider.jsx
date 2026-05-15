"use client";
 
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
 
export default function HeroSlider({ product }) {
  const cart = useCart();
  const id = product?._id || product?.sku;
 
  return (
    <section
      style={{
        position: "relative",
        marginTop: "-1px",
        minHeight: "460px",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 70% 90% at 42% 38%, #ffffff 0%, #eeeeee 45%, #d4d4d4 100%)",
      }}
    >
      {/* Bottom-right orange wave curve */}
      <div
        style={{
          position: "absolute",
          bottom: "-170px",
          right: "-140px",
          height: "330px",
          width: "640px",
          borderRadius: "100% 0 0 0",
          borderTop: "9px solid #d4600a",
          backgroundColor: "white",
          boxShadow: "0 -2px 0 rgba(0,0,0,0.12)",
        }}
      />
      {/* Bottom-left orange wave curve */}
      <div
        style={{
          position: "absolute",
          bottom: "-125px",
          left: "-80px",
          height: "270px",
          width: "540px",
          transform: "rotate(12deg)",
          borderRadius: "0 100% 0 0",
          borderTop: "7px solid #d4600a",
          backgroundColor: "white",
          boxShadow: "0 -2px 0 rgba(0,0,0,0.10)",
        }}
      />
 
      {/* Main content: centered two-column layout */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 16px",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "420px",
          alignItems: "center",
          gap: "0",
        }}
      >
        {/* Left: Product image in a contained box */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "16px",
            paddingBottom: "60px",
          }}
        >
          <div
            style={{
              width: "220px",
              height: "290px",
              overflow: "hidden",
              backgroundColor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <img
              src={product?.image || "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900"}
              alt={product?.name || "Product"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>
 
        {/* Right: Text content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            paddingTop: "40px",
            paddingBottom: "60px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Orange downward triangle */}
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "22px solid transparent",
              borderRight: "22px solid transparent",
              borderTop: "32px solid #d4600a",
              marginBottom: "18px",
              filter: "drop-shadow(0 2px 1px rgba(212,96,10,0.35))",
            }}
          />
 
          {/* Description text */}
          <p
            style={{
              maxWidth: "320px",
              fontSize: "13px",
              fontWeight: "600",
              lineHeight: "1.55",
              color: "#666",
              textAlign: "center",
              margin: "0 0 20px 0",
            }}
          >
            This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh
            vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          </p>
 
          {/* Price row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "6px",
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "46px",
                fontWeight: "normal",
                lineHeight: 1,
                color: "#d4600a",
              }}
            >
              £129
            </span>
            <span
              style={{
                paddingTop: "6px",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#888",
              }}
            >
              .99
            </span>
            <span
              style={{
                paddingTop: "10px",
                fontSize: "10px",
                fontWeight: "800",
                textTransform: "uppercase",
                color: "#333",
                letterSpacing: "0.05em",
              }}
            >
              Our Price
            </span>
          </div>
 
          {/* Add to cart button */}
          <button
            onClick={() => cart?.addToCart(id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "33px",
              padding: "0 22px",
              borderRadius: "999px",
              border: "1px solid #bbbbbb",
              background: "linear-gradient(to bottom, #efefef, #d5d5d5)",
              fontSize: "10px",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#555",
              cursor: "pointer",
              boxShadow: "inset 0 1px 2px rgba(255,255,255,0.8)",
            }}
          >
            Add To{" "}
            <ShoppingCart size={17} style={{ color: "#d4600a" }} />
          </button>
        </div>
      </div>
 
      {/* Bottom-right chevrons */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          right: "24px",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "0",
        }}
      >
        <ChevronLeft
          size={42}
          strokeWidth={1.2}
          style={{ color: "#222", display: "block" }}
        />
        <ChevronRight
          size={42}
          strokeWidth={1.2}
          style={{ color: "#d4600a", display: "block", marginTop: "-14px" }}
        />
      </div>
    </section>
  );
}
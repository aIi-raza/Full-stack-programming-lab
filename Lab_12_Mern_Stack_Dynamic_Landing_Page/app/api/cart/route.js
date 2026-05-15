import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Cart from "@/models/Cart";
import Product from "@/models/Product";

export const dynamic = "force-dynamic";

export async function POST(request) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ message: "Configure MONGODB_URI to use cart persistence" }, { status: 503 });
  }

  await dbConnect();
  const { sessionId, productId, quantity = 1 } = await request.json();
  if (!sessionId || !productId) {
    return NextResponse.json({ message: "sessionId and productId are required" }, { status: 400 });
  }

  const product = await Product.findById(productId);
  if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });

  let cart = await Cart.findOne({ sessionId });
  if (!cart) cart = await Cart.create({ sessionId, items: [] });

  const existing = cart.items.find((item) => item.productId.toString() === productId);
  if (existing) {
    existing.quantity += Number(quantity);
    existing.price = product.price;
  } else {
    cart.items.push({ productId, quantity: Number(quantity), price: product.price });
  }

  await cart.save();
  await cart.populate("items.productId");
  return NextResponse.json(cart);
}

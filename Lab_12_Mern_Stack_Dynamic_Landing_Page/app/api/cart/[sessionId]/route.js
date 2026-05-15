import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Cart from "@/models/Cart";

export const dynamic = "force-dynamic";

export async function GET(_request, { params }) {
  if (!process.env.MONGODB_URI) return NextResponse.json({ sessionId: params.sessionId, items: [] });

  await dbConnect();
  const cart = await Cart.findOne({ sessionId: params.sessionId }).populate("items.productId");
  return NextResponse.json(cart || { sessionId: params.sessionId, items: [] });
}

export async function PUT(request, { params }) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ message: "Configure MONGODB_URI to use cart persistence" }, { status: 503 });
  }

  await dbConnect();
  const { productId, quantity } = await request.json();
  const cart = await Cart.findOne({ sessionId: params.sessionId });
  if (!cart) return NextResponse.json({ message: "Cart not found" }, { status: 404 });

  const item = cart.items.find((entry) => entry.productId.toString() === productId);
  if (!item) return NextResponse.json({ message: "Item not found" }, { status: 404 });

  item.quantity = Math.max(1, Number(quantity));
  await cart.save();
  await cart.populate("items.productId");
  return NextResponse.json(cart);
}

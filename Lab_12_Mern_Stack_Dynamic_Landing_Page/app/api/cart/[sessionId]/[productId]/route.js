import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Cart from "@/models/Cart";

export const dynamic = "force-dynamic";

export async function DELETE(_request, { params }) {
  if (!process.env.MONGODB_URI) return NextResponse.json({ sessionId: params.sessionId, items: [] });

  await dbConnect();
  const cart = await Cart.findOne({ sessionId: params.sessionId });
  if (!cart) return NextResponse.json({ sessionId: params.sessionId, items: [] });

  cart.items = cart.items.filter((item) => item.productId.toString() !== params.productId);
  await cart.save();
  await cart.populate("items.productId");
  return NextResponse.json(cart);
}

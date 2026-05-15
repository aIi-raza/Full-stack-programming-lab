import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Cart from "@/models/Cart";
import Order from "@/models/Order";

export const dynamic = "force-dynamic";

export async function POST(request) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ message: "Configure MONGODB_URI to create orders" }, { status: 503 });
  }

  await dbConnect();
  const { sessionId } = await request.json();
  const cart = await Cart.findOne({ sessionId }).populate("items.productId");
  if (!cart || cart.items.length === 0) {
    return NextResponse.json({ message: "Cart is empty" }, { status: 400 });
  }

  const items = cart.items.map((item) => ({
    productId: item.productId._id,
    name: item.productId.name,
    price: item.price,
    quantity: item.quantity
  }));
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const order = await Order.create({ sessionId, items, total, status: "pending" });

  cart.items = [];
  await cart.save();
  return NextResponse.json(order, { status: 201 });
}

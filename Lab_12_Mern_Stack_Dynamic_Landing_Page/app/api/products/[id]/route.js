import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";
import { demoProducts } from "@/lib/demoProducts";

export const dynamic = "force-dynamic";

export async function GET(_request, { params }) {
  if (!process.env.MONGODB_URI) {
    const product = demoProducts.map((item) => ({ ...item, _id: item.sku })).find((item) => item.sku === params.id);
    if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });
    return NextResponse.json(product);
  }

  await dbConnect();
  const product = await Product.findById(params.id);
  if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });
  return NextResponse.json(product);
}

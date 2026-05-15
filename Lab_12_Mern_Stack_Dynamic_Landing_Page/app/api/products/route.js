import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";
import { demoProducts } from "@/lib/demoProducts";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const badge = searchParams.get("badge");
  const search = searchParams.get("search");

  if (!process.env.MONGODB_URI) {
    const products = demoProducts
      .filter((product) => !category || product.category === category)
      .filter((product) => !badge || product.badge === badge)
      .filter((product) => !search || product.name.toLowerCase().includes(search.toLowerCase()))
      .map((product) => ({ ...product, _id: product.sku }));
    return NextResponse.json(products);
  }

  await dbConnect();
  const query = {};

  if (category) query.category = category;
  if (badge) query.badge = badge;
  if (search) query.name = { $regex: search, $options: "i" };

  const products = await Product.find(query).sort({ createdAt: -1 });
  return NextResponse.json(products);
}

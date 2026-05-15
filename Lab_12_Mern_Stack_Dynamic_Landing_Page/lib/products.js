import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";
import { demoProducts } from "@/lib/demoProducts";

function serialize(product) {
  const plain = product.toObject ? product.toObject() : product;
  return {
    ...plain,
    _id: plain._id?.toString?.() || plain._id || plain.sku,
    createdAt: plain.createdAt?.toISOString?.() || plain.createdAt
  };
}

export async function getProducts(filters = {}) {
  if (!process.env.MONGODB_URI) {
    return demoProducts
      .filter((product) => !filters.category || product.category === filters.category)
      .filter((product) => !filters.badge || product.badge === filters.badge)
      .filter((product) => !filters.search || product.name.toLowerCase().includes(filters.search.toLowerCase()))
      .map((product) => ({ ...product, _id: product.sku }));
  }

  await dbConnect();
  const query = {};
  if (filters.category) query.category = filters.category;
  if (filters.badge) query.badge = filters.badge;
  if (filters.search) query.name = { $regex: filters.search, $options: "i" };
  const products = await Product.find(query).sort({ createdAt: -1 });
  return products.map(serialize);
}

export async function getProduct(id) {
  if (!process.env.MONGODB_URI) {
    return demoProducts.map((product) => ({ ...product, _id: product.sku })).find((product) => product.sku === id || product._id === id);
  }

  await dbConnect();
  const product = await Product.findById(id);
  return product ? serialize(product) : null;
}

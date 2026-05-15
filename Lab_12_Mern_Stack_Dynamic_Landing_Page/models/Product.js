import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ["beds", "cabinets", "bookcases", "boxes", "chairs", "tables"],
    required: true
  },
  price: { type: Number, required: true },
  originalPrice: Number,
  description: String,
  images: [String],
  badge: { type: String, enum: ["featured", "special", "popular"] },
  stock: { type: Number, default: 0 },
  sku: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);

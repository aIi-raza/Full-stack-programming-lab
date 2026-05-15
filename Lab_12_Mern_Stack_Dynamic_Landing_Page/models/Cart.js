import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, default: 1, min: 1 },
      price: { type: Number, required: true }
    }
  ],
  updatedAt: { type: Date, default: Date.now }
});

cartSchema.pre("save", function updateTimestamp(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);

require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

const chair = "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400";
const table = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400";
const bed = "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400";
const cabinet = "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400";

const productSchema = new mongoose.Schema({
  name: String,
  category: { type: String, enum: ["beds", "cabinets", "bookcases", "boxes", "chairs", "tables"] },
  price: Number,
  originalPrice: Number,
  description: String,
  images: [String],
  badge: { type: String, enum: ["featured", "special", "popular"] },
  stock: Number,
  sku: String,
  tags: [String],
  createdAt: Date
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

const products = [
  ["Round Oak Table", "tables", 134.99, null, table, "featured", "RP-TBL-001", ["oak", "round", "dining"]],
  ["Low Plank Coffee Table", "tables", 134.99, null, `${table}&seed=1`, "featured", "RP-TBL-002", ["rustic", "coffee"]],
  ["Farmhouse Side Table", "tables", 134.99, null, `${table}&seed=2`, "featured", "RP-TBL-003", ["side", "farmhouse"]],
  ["Harvest Storage Bowl", "boxes", 134.99, null, `${cabinet}&seed=3`, "featured", "RP-BOX-001", ["storage", "decor"]],
  ["Slat Back Dining Chair", "chairs", 134.99, 159.99, chair, "special", "RP-CHR-001", ["chair", "dining"]],
  ["Garden Recliner Chair", "chairs", 134.99, 169.99, `${chair}&seed=1`, "special", "RP-CHR-002", ["recliner", "lounge"]],
  ["Pair of Bistro Chairs", "chairs", 134.99, 149.99, `${chair}&seed=2`, "special", "RP-CHR-003", ["pair", "bistro"]],
  ["Rustic Blanket Box", "boxes", 134.99, 154.99, `${cabinet}&seed=4`, "special", "RP-BOX-002", ["box", "storage"]],
  ["Tall Bookcase", "bookcases", 134.99, null, `${cabinet}&seed=5`, "popular", "RP-BKC-001", ["shelves", "bookcase"]],
  ["Carved Storage Bed", "beds", 134.99, null, bed, "popular", "RP-BED-001", ["bed", "storage"]],
  ["Ornate Bench Seat", "chairs", 134.99, null, `${chair}&seed=6`, "popular", "RP-CHR-004", ["bench", "carved"]],
  ["Classic Wooden Bed", "beds", 134.99, null, `${bed}&seed=1`, "popular", "RP-BED-002", ["classic", "bed"]],
  ["Workshop Cabinet", "cabinets", 189.99, null, cabinet, "featured", "RP-CAB-001", ["cabinet", "storage"]],
  ["Panelled Bed Frame", "beds", 229.99, 269.99, `${bed}&seed=2`, "special", "RP-BED-003", ["bed", "panelled"]],
  ["Stacking Bookcase", "bookcases", 149.99, null, `${cabinet}&seed=7`, "popular", "RP-BKC-002", ["bookcase", "shelves"]],
  ["Kitchen Cabinet", "cabinets", 199.99, null, `${cabinet}&seed=8`, "featured", "RP-CAB-002", ["kitchen", "cabinet"]]
].map(([name, category, price, originalPrice, image, badge, sku, tags], index) => ({
  name,
  category,
  price,
  originalPrice,
  description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.",
  images: [image, `${image}&seed=${index + 20}`, `${image}&seed=${index + 40}`, `${image}&seed=${index + 60}`],
  badge,
  stock: 12 + index,
  sku,
  tags,
  createdAt: new Date(Date.now() - index * 86400000)
}));

async function seed() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is missing in .env.local");
  await mongoose.connect(process.env.MONGODB_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log(`Seeded ${products.length} Rustik Plank products`);
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});

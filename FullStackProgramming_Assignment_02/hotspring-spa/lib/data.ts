// ================================================================
// HotSpring Portable Spas — Product & seed data
// mirrors Assignment 1 localStorage seed
// ================================================================

export interface Product {
  id: number;
  name: string;
  model: string;
  price: number;
  salePrice: number;
  category: string;
  capacity: string;
  size: string;
  type: string;
  priceRange: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  voltage: string;
  pumps: string;
  gallons: string;
  heater: string;
  jets: number;
  desc: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Barrier Reef 158 Jet TV-Stereo Home Theater Spa",
    model: "B22CS309NSS",
    price: 4899,
    salePrice: 4899,
    category: "TV-Stereo Spas",
    capacity: "8 Person",
    size: "8 Feet To Large Size",
    type: "TV-Stereo Spas",
    priceRange: "$3,000 To 4,000",
    rating: 4,
    reviews: 14,
    inStock: true,
    voltage: "220V",
    pumps: "3 x 5HP",
    gallons: "305 Gallons / 573 lbs",
    heater: "5.5 KW Heavy Heater",
    jets: 158,
    desc: "Extra Large and Deep 8 Person 158 Jet Supper Spa, TV-Home Theater Spa System. Experience the ultimate luxury relaxation with built-in entertainment.",
  },
  {
    id: 2,
    name: "Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets",
    model: "B22CS309NSS",
    price: 2199,
    salePrice: 1979,
    category: "TV-Stereo Spas",
    capacity: "5-7 People",
    size: "7 - 8 Feet Long",
    type: "TV-Stereo Spas",
    priceRange: "$3,000 To 4,000",
    rating: 4,
    reviews: 14,
    inStock: true,
    voltage: "220V / 50 amp / ETL Certificate",
    pumps: "2 x 5HP",
    gallons: "305 Gallons / 573 lbs",
    heater: "5.5 KW Heavy Heater",
    jets: 90,
    desc: "6-7 Person spa with TV/DVD entertainment. Features premium jets, adjustable seating and full AV system for backyard relaxation.",
  },
  {
    id: 3,
    name: "Cabaret 3 Person 41 Jet Hot Tub 110-Volt Plug In",
    model: "XS-SCYBA-X-119",
    price: 500,
    salePrice: 500,
    category: "Plug and Play 110 Volt",
    capacity: "2 - 4 People",
    size: "5 - 6 Feet Long",
    type: "Plug and Play 110 Volt",
    priceRange: "Under $3,000",
    rating: 4,
    reviews: 8,
    inStock: true,
    voltage: "110V/220V Convertible",
    pumps: "1 x 1HP",
    gallons: "200 Gallons",
    heater: "1KW / 4KW Convertible",
    jets: 41,
    desc: "Easy plug-and-play solution. No electrician required. 220V/50 AMP convertible. Perfect for patios and decks.",
  },
  {
    id: 4,
    name: "Pacific Rim 6 Person Corner Spa",
    model: "XS-SCYBA-X-SET119",
    price: 500,
    salePrice: 500,
    category: "Corner Spas",
    capacity: "5-7 People",
    size: "6 - 7 Feet Long",
    type: "Corner Spas",
    priceRange: "Under $3,000",
    rating: 4,
    reviews: 6,
    inStock: true,
    voltage: "220V",
    pumps: "2 x 3HP",
    gallons: "275 Gallons",
    heater: "4 KW Heater",
    jets: 65,
    desc: "Beautiful corner design perfect for fitting into tight backyard spaces. 6-person capacity with ergonomic seating.",
  },
  {
    id: 5,
    name: "Paradise XL Portable Spa 7 Person",
    model: "XS-SCYBA-X-119-B",
    price: 500,
    salePrice: 500,
    category: "Portable Spas",
    capacity: "5-7 People",
    size: "7 - 8 Feet Long",
    type: "Portable Spas",
    priceRange: "Under $3,000",
    rating: 3,
    reviews: 5,
    inStock: true,
    voltage: "220V",
    pumps: "2 x 4HP",
    gallons: "310 Gallons",
    heater: "4 KW Heater",
    jets: 75,
    desc: "Portable and lightweight with full spa features. Easy setup, no permanent plumbing required.",
  },
  {
    id: 6,
    name: "Deep Reef 8 Person Deeper Spa",
    model: "XS-SCYBA-X-119-C",
    price: 500,
    salePrice: 500,
    category: "Deeper Spas",
    capacity: "8 People And More",
    size: "8 Feet To Large Size",
    type: "Deeper Spas",
    priceRange: "Under $3,000",
    rating: 5,
    reviews: 12,
    inStock: true,
    voltage: "220V",
    pumps: "3 x 5HP",
    gallons: "400 Gallons",
    heater: "6 KW Heater",
    jets: 100,
    desc: "Extra deep design for full immersion hydrotherapy. 8+ person capacity with advanced therapeutic jets.",
  },
];

export interface Order {
  id: number;
  userId: number;
  date: string;
  status: string;
  total: number;
  items: { name: string; qty: number; price: number }[];
}

export const defaultOrders: Order[] = [
  {
    id: 303,
    userId: 1,
    date: "December 18, 2014",
    status: "On hold",
    total: 699,
    items: [{ name: "Cabaret 3 Person Spa", qty: 1, price: 699 }],
  },
  {
    id: 307,
    userId: 1,
    date: "December 18, 2014",
    status: "On hold",
    total: 799,
    items: [{ name: "Barrier Reef Spa", qty: 1, price: 799 }],
  },
];

export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const defaultUsers: User[] = [
  {
    id: 1,
    email: "demo@hotspring.com",
    password: "demo123",
    firstName: "Demo",
    lastName: "User",
  },
];

export const SLIDE_BG = [
  "linear-gradient(135deg,#0d3b5e,#1a6fa3)",
  "linear-gradient(135deg,#0d5e3b,#1aa367)",
  "linear-gradient(135deg,#5e3b0d,#a36f1a)",
];

export const CARD_BG = [
  "linear-gradient(135deg,#122b44,#1f5f8b)",
  "linear-gradient(135deg,#1a3a1a,#2d6a2d)",
  "linear-gradient(135deg,#3b1a00,#8b4a1f)",
  "linear-gradient(135deg,#1a001a,#5a2d6a)",
  "linear-gradient(135deg,#002b44,#1f7a8b)",
  "linear-gradient(135deg,#1a1a00,#6a6a1f)",
];

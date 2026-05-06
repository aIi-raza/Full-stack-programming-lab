const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ecommercedb')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

const Product = mongoose.model('Product', productSchema);

// Seed some products
app.get('/seed', async (req, res) => {
    await Product.insertMany([
        { name: "Laptop", price: 999, description: "High performance laptop" },
        { name: "Phone", price: 499, description: "Latest smartphone" },
        { name: "Headphones", price: 79, description: "Noise cancelling" }
    ]);
    res.send("Products seeded!");
});

// Get all products
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
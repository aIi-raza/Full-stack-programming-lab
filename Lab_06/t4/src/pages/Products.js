// Products.js - Products page (route: "/products")
// Renders a product grid with title, description, price and Add to Cart

import React, { useState } from 'react';
import './Products.css';

function Products() {
  // Sample product data array
  const productList = [
    { id: 1, title: 'Wireless Headphones', description: 'Noise-cancelling with 20-hour battery life.', price: '$49.99' },
    { id: 2, title: 'Laptop Stand',         description: 'Adjustable aluminium stand for better ergonomics.', price: '$29.99' },
    { id: 3, title: 'Mechanical Keyboard',  description: 'RGB backlit with blue switches for crisp typing.', price: '$79.99' },
    { id: 4, title: 'USB-C Hub',            description: 'Multi-port hub: HDMI, USB 3.0, SD card reader.', price: '$39.99' },
  ];

  // Cart state: tracks how many items have been added
  const [cart, setCart] = useState([]);

  // Add product to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`"${product.title}" added to cart!`);
  };

  return (
    <div>
      {/* Page header */}
      <div className="products-header page-card">
        <h1>Our Products</h1>
        <p>Browse our catalog and click <em>Add to Cart</em> to select items.</p>
        <div className="cart-badge">🛒 Cart: <strong>{cart.length}</strong> item(s)</div>
      </div>

      {/* Product cards grid */}
      <div className="product-grid">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="product-footer">
              <span className="price">{product.price}</span>
              <button
                className="cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

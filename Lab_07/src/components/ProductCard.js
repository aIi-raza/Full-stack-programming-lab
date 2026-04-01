import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartStore, Toast } from '../utils/db';
import { AppContext } from '../utils/AppContext';

function ProductCard({ p, idx = 0 }) {
  const { updateCart } = useContext(AppContext);
  const BG = [
    'linear-gradient(135deg,#122b44,#1f5f8b)', 'linear-gradient(135deg,#1a3a1a,#2d6a2d)',
    'linear-gradient(135deg,#3b1a00,#8b4a1f)', 'linear-gradient(135deg,#1a001a,#5a2d6a)',
    'linear-gradient(135deg,#002b44,#1f7a8b)', 'linear-gradient(135deg,#1a1a00,#6a6a1f)'
  ];

  const handleAddToCart = () => {
    CartStore.add(p);
    updateCart();
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    Toast.show('Added to wishlist!', 'success');
  };

  return (
    <div className="product-card fade-up" style={{ animationDelay: `${idx * 0.07}s` }}>
      <div className="prod-img-wrap" style={{ background: BG[idx % BG.length] }}>
        <span className="spa-icon" style={{ color: 'rgba(255,255,255,.8)' }}>♨</span>
      </div>
      <div className="card-body-hs">
        <h5>{p.name}</h5>
        <p>{p.desc.substring(0, 75)}...</p>
        <div className="card-price">${p.salePrice.toFixed(2)}</div>
        <button className="btn-cart" onClick={handleAddToCart}>🛒 ADD TO CART</button>
        <div className="card-links-row">
          <a href="#wishlist" className="add-wishlist" onClick={handleWishlist}>ADD TO WISH LIST</a>
          <Link to={`/product/${p.id}`}>MORE DETAILS</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

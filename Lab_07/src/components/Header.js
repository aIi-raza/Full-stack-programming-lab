import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../utils/AppContext';

function Header() {
  const { cartCount } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (query) {
      navigate(`/category?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <div className="hs-topbar">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <span>Call for Customer support: <a href="tel:02038989565">020 38989565</a></span>
            <div className="top-links">
              <Link to="/login">Sign In</Link>
              <Link to="/register">Register</Link>
              <a href="#wishlist">Wishlist</a>
              <Link to="/cart">To Checkout</Link>
            </div>
          </div>
        </div>
      </div>
      <header className="hs-header">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/" className="logo-brand text-decoration-none">
              <div className="brand-name">HOTSPRING<sup style={{ fontSize: '14px' }}>®</sup></div>
              <div className="brand-sub">Portable Spas</div>
            </Link>
            <Link to="/cart" className="cart-btn text-decoration-none">
              <i className="fas fa-shopping-cart"></i>
              <span>My Cart:</span>
              <span className="cart-badge">{cartCount}</span>
              <span className="cart-items-lbl">Items</span>
              <i className="fas fa-chevron-down" style={{ fontSize: '10px' }}></i>
            </Link>
          </div>
        </div>
      </header>
      <nav className="hs-mainnav">
        <div className="container">
          <ul className="nav">
            <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category">PRODUCTS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category?search=special">SPECIAL OFFERS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">CONTACT</Link></li>
          </ul>
        </div>
      </nav>
      <div className="hs-rednav">
        <div className="container d-flex align-items-center">
          <div>
            <Link to="/category" className="rn-link">CATEGORY</Link>
            <Link to="/category" className="rn-link">BRAND</Link>
            <Link to="/about" className="rn-link">INFO</Link>
          </div>
          <form className="search-wrap" onSubmit={handleSearch}>
            <input type="text" name="search" className="hs-search-input" placeholder="Search" />
            <button type="submit" className="hs-search-btn">SEARCH</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;

import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import DB, { CartStore, Toast } from '../utils/db';
import { AppContext } from '../utils/AppContext';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [calcOptions, setCalcOptions] = useState({ interior: 0, outside: 0, pump: 0, cover: 0, tv: 0, salt: 0 });
  const { updateCart } = useContext(AppContext);

  useEffect(() => {
    const products = DB.get('products') || [];
    const p = products.find(x => x.id === parseInt(id)) || products[1];
    setProduct(p);
    document.title = `${p.name} | HotSpring Portable Spas`;
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleCalcChange = (e, key) => {
    setCalcOptions({ ...calcOptions, [key]: parseInt(e.target.value) });
  };

  const totalPrice = product.salePrice + Object.values(calcOptions).reduce((a, b) => a + b, 0);

  const handleAddToCart = () => {
    CartStore.add({ ...product, salePrice: totalPrice });
    updateCart();
  };

  const tabs = [
    { key: 'details', label: 'Details', content: () => (
      <div>
        <p>{product.desc}</p>
        <p>Experience the ultimate relaxation with our premium hot tub technology. The ergonomically designed seating provides exceptional comfort while the powerful jet system delivers therapeutic hydrotherapy. Built with high-quality materials for years of enjoyment.</p>
        <p>Our advanced filtration system ensures crystal-clear water while the energy-efficient design keeps operating costs low. The intuitive control panel makes it easy to set your perfect spa experience every time.</p>
      </div>
    )},
    { key: 'specs', label: 'Quick Specs', content: () => (
      <table className="spec-tbl" style={{ maxWidth: '480px' }}>
        <tbody>
          <tr><td>Energy Star Rated</td><td>No</td></tr>
          <tr><td>Seating Design</td><td>Bucket, Lounge, Chair, Bench</td></tr>
          <tr><td>Water Capacity</td><td>{product.gallons}</td></tr>
          <tr><td>Number of Pumps</td><td>{product.pumps}</td></tr>
          <tr><td>Electrical</td><td>{product.voltage}</td></tr>
          <tr><td>Total Jets</td><td>{product.jets}</td></tr>
          <tr><td>Warranty</td><td>5 Year Structure / 3 Year Parts</td></tr>
        </tbody>
      </table>
    )},
    { key: 'accessories', label: 'Accessories', content: () => (
      <p>Compatible accessories include spa steps, thermal covers, chemical starter kits, and floating thermometers. Contact us for a complete accessories list for your specific model.</p>
    )},
    { key: 'reviews', label: 'Reviews', content: () => (
      <div>
        <p><strong>{product.rating}/5 Stars</strong> — Based on {product.reviews} reviews</p>
        <p>"Amazing product! We use it every weekend and it has been a great investment for our family." — <em>John D.</em></p>
        <p>"Very easy to set up and maintain. The jets are powerful and adjustable." — <em>Sarah M.</em></p>
      </div>
    )},
    { key: 'qa', label: 'Q & A', content: () => (
      <div>
        <p><strong>Q: Is installation included?</strong><br />A: Installation is not included but most customers set it up themselves with our guide.</p>
        <p><strong>Q: What chemicals are needed?</strong><br />A: Standard bromine or chlorine spa chemicals. A starter kit is available as an add-on.</p>
      </div>
    )}
  ];

  return (
    <div className="container">
      <div className="hs-breadcrumb mt-2">
        <Link to="/">Home</Link><span className="sep">›</span>
        <Link to="/category">Category</Link><span className="sep">›</span>
        <span id="pd-name-bc">{product.name.substring(0, 40)}...</span>
      </div>

      <div className="page-box" id="product-detail">
        <h1 className="pd-name">{product.name}</h1>
        <p className="pd-model">Abt Model:{product.model} | UPC Code: 822CS868729</p>

        <div className="pd-grid">
          <div>
            <div className="pd-main-img">
              <div style={{ width: '200px', height: '200px', background: 'linear-gradient(135deg,#0d3b5e,#1a6fa3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px', color: 'rgba(255,255,255,.8)' }}>
                ♨
              </div>
            </div>
            <div className="thumb-strip">
              <div className="thumb-item active">♨</div>
              <div className="thumb-item">🛁</div>
              <div className="thumb-item">💧</div>
              <div className="thumb-item">⚡</div>
            </div>
          </div>

          <div>
            <div className="stars-row mb-1">
              <span style={{ color: '#f0a800' }}>{'★'.repeat(product.rating) + '☆'.repeat(5 - product.rating)}</span>
              <button className="btn btn-link review-link p-0 m-0 text-decoration-none" onClick={() => setActiveTab('reviews')}>({product.reviews} reviews)</button>
            </div>
            <div className="price-retail">Retail Price: ${product.price.toFixed(2)}</div>
            <div className="price-sale">${product.salePrice.toFixed(2)}</div>
            <div className="low-price-tag mb-2">Low Price Guarantee</div>

            <table className="spec-tbl mb-3">
              <tbody>
                <tr><td>Size/Seating Capacity</td><td>{product.capacity}</td></tr>
                <tr><td>Seating Design</td><td>Bucket, Lounge, Chair, Bench</td></tr>
                <tr><td>Water Capacity / Dry Weight</td><td>{product.gallons}</td></tr>
                <tr><td>Number of Pumps</td><td>{product.pumps}</td></tr>
                <tr><td>Electrical</td><td>{product.voltage}</td></tr>
                <tr><td>Total Jets</td><td>{product.jets}</td></tr>
              </tbody>
            </table>

            <div className="badge-instock">In Stock (available)</div><br />
            <button className="btn-cart mt-2" style={{ maxWidth: '180px' }} onClick={handleAddToCart}>
              <i className="fas fa-shopping-cart"></i> ADD TO CART
            </button>
          </div>

          <div className="price-calc-box">
            <h5>Price Calculator</h5>
            <div className="calc-row"><label>Interior Color:</label><select value={calcOptions.interior} onChange={(e) => handleCalcChange(e,'interior')}><option value="0">Standard</option><option value="50">Premium (+$50)</option></select></div>
            <div className="calc-row"><label>Outside Shell Color:</label><select value={calcOptions.outside} onChange={(e) => handleCalcChange(e,'outside')}><option value="0">Standard</option><option value="30">Custom (+$30)</option></select></div>
            <div className="calc-row"><label>Circulation Pump:</label><select value={calcOptions.pump} onChange={(e) => handleCalcChange(e,'pump')}><option value="0">Standard</option><option value="75">Upgraded (+$75)</option></select></div>
            <div className="calc-row"><label>Cover / Steps:</label><select value={calcOptions.cover} onChange={(e) => handleCalcChange(e,'cover')}><option value="0">None</option><option value="120">With Cover (+$120)</option><option value="180">Cover+Steps (+$180)</option></select></div>
            <div className="calc-row"><label>TV/DVD:</label><select value={calcOptions.tv} onChange={(e) => handleCalcChange(e,'tv')}><option value="0">None</option><option value="250">DVD System (+$250)</option><option value="400">Full Theater (+$400)</option></select></div>
            <div className="calc-row"><label>Salt Water System:</label><select value={calcOptions.salt} onChange={(e) => handleCalcChange(e,'salt')}><option value="0">No</option><option value="150">Yes (+$150)</option></select></div>
            <div className="calc-total">Total Price: <span className="amount-display">${totalPrice.toFixed(2)}</span></div>
            <button className="btn-cart w-100" onClick={handleAddToCart}><i className="fas fa-shopping-cart"></i> ADD TO CART</button>
          </div>
        </div>

        <div className="prod-tabs">
          <div className="tab-nav">
            {tabs.map(t => (
              <button key={t.key} className={`tab-btn ${activeTab === t.key ? 'active' : ''}`} onClick={() => setActiveTab(t.key)}>{t.label}</button>
            ))}
          </div>
          <div className="tab-pane active" style={{ display: 'block' }}>
            {tabs.find(t => t.key === activeTab)?.content()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DB from '../utils/db';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);
  const [slideIdx, setSlideIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home | HotSpring Portable Spas";
    const prods = DB.get('products') || [];
    setProducts(prods.slice(0, 8));

    const autoTimer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(autoTimer);
  }, []);

  return (
    <div>
      {/* HERO SLIDER */}
      <section className="hs-hero">
        <div className={`hs-slide ${slideIdx === 0 ? 'active' : ''}`} style={{ display: slideIdx === 0 ? 'flex' : 'none', padding: '30px 0', alignItems:'center' }}>
          <div className="container d-flex align-items-center justify-content-between gap-4 flex-md-row flex-column text-center text-md-start">
            <div className="slide-content text-white" style={{ maxWidth: '400px' }}>
              <h1 className="slide-title">Barrier Reef 158 Jet<br />TV-Stereo - Home Theater<br />Supper Spa</h1>
              <p className="slide-body">Extra Large and Deep 8 Person<br />158 Jet Supper Spa, TV-Home Theater Spa System</p>
              <div className="slide-price">$4899.00</div>
              <button onClick={() => navigate('/product/1')} className="btn-hs btn-red">More Details</button>
            </div>
            <div className="spa-visual" style={{ background: 'linear-gradient(135deg,#0d3b5e,#1a6fa3)' }}>
              <span>♨ HOT TUB</span><small>158 Jets · 8 Person · TV Theater</small>
            </div>
          </div>
        </div>
        <div className={`hs-slide ${slideIdx === 1 ? 'active' : ''}`} style={{ display: slideIdx === 1 ? 'flex' : 'none', padding: '30px 0', alignItems:'center' }}>
          <div className="container d-flex align-items-center justify-content-between gap-4 flex-md-row flex-column text-center text-md-start">
            <div className="slide-content text-white" style={{ maxWidth: '400px' }}>
              <h1 className="slide-title">Emerald Bay XL<br />TV DVD Stereo<br />Hot Tub 90 Jets</h1>
              <p className="slide-body">6-7 Person Spa with Full Entertainment System</p>
              <div className="slide-price">$1979.00 <small style={{ fontSize: '18px', textDecoration: 'line-through', opacity: .6 }}>$2199</small></div>
              <button onClick={() => navigate('/product/2')} className="btn-hs btn-red">More Details</button>
            </div>
            <div className="spa-visual" style={{ background: 'linear-gradient(135deg,#0d5e3b,#1aa367)' }}>
              <span>♨ EMERALD BAY</span><small>90 Jets · 6-7 Person · DVD/TV</small>
            </div>
          </div>
        </div>
        <div className={`hs-slide ${slideIdx === 2 ? 'active' : ''}`} style={{ display: slideIdx === 2 ? 'flex' : 'none', padding: '30px 0', alignItems:'center' }}>
          <div className="container d-flex align-items-center justify-content-between gap-4 flex-md-row flex-column text-center text-md-start">
            <div className="slide-content text-white" style={{ maxWidth: '400px' }}>
              <h1 className="slide-title">Cabaret 3 Person<br />41 Jet Hot Tub<br />110-Volt Plug In</h1>
              <p className="slide-body">Easy Plug &amp; Play – No Electrician Needed!</p>
              <div className="slide-price">$500.00</div>
              <button onClick={() => navigate('/product/3')} className="btn-hs btn-red">More Details</button>
            </div>
            <div className="spa-visual" style={{ background: 'linear-gradient(135deg,#5e3b0d,#a36f1a)' }}>
              <span>♨ CABARET</span><small>41 Jets · 3 Person · 110V Plug-In</small>
            </div>
          </div>
        </div>
        <button className="slider-ctrl prev" onClick={() => setSlideIdx((prev) => (prev - 1 + 3) % 3)}><i className="fas fa-chevron-left"></i></button>
        <button className="slider-ctrl next" onClick={() => setSlideIdx((prev) => (prev + 1) % 3)}><i className="fas fa-chevron-right"></i></button>
        <div className="slider-dots">
          <button className={`dot ${slideIdx === 0 ? 'active' : ''}`} onClick={() => setSlideIdx(0)}></button>
          <button className={`dot ${slideIdx === 1 ? 'active' : ''}`} onClick={() => setSlideIdx(1)}></button>
          <button className={`dot ${slideIdx === 2 ? 'active' : ''}`} onClick={() => setSlideIdx(2)}></button>
        </div>
      </section>

      {/* PROMO BANNERS */}
      <div className="container">
        <div className="promo-grid mt-1">
          <div className="promo-item" style={{ background: 'linear-gradient(135deg,#0d3b5e,#1a5fa3)' }} onClick={() => navigate('/category?type=tv')}>
            <div className="promo-overlay"></div>
            <div className="promo-label">
              <h3>5-7 PERSON SPA</h3>
              <p>THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN GRAVIDA NIBH VEL VELIT AUCTOR</p>
            </div>
          </div>
          <div className="promo-item" style={{ background: 'linear-gradient(135deg,#1a3a1a,#2d6a2d)' }} onClick={() => navigate('/category?type=tv')}>
            <div className="promo-overlay"></div>
            <div className="promo-label">
              <h3>TV THEATER SPA</h3>
              <p>THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN</p>
            </div>
          </div>
          <div className="promo-item" style={{ background: 'var(--red)' }} onClick={() => navigate('/category')}>
            <div className="promo-overlay"></div>
            <div className="promo-save-big" style={{ width: '100%' }}>SAVE<br /><small style={{ fontSize: '28px' }}>50%</small></div>
          </div>
        </div>
      </div>

      {/* NEW PRODUCTS */}
      <div className="container mt-4">
        <h2 className="section-title">NEW PRODUCTS</h2>
        <div id="home-products" className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          {products.map((p, i) => (
            <div className="col" key={p.id}>
              <ProductCard p={p} idx={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import DB from '../utils/db';
import ProductCard from '../components/ProductCard';

function Category() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState('default');
  const location = useLocation();

  useEffect(() => {
    document.title = "Category | HotSpring Portable Spas";
    const searchParams = new URLSearchParams(location.search);
    const qs = searchParams.get('search')?.toLowerCase() || '';
    
    let prods = DB.get('products') || [];
    
    if (qs) {
      prods = prods.filter(p => p.name.toLowerCase().includes(qs) || p.category.toLowerCase().includes(qs));
    }
    
    setProducts(prods);
  }, [location.search]);

  const toggleFilter = (type, val) => {
    setFilters(prev => {
      const next = { ...prev };
      if (next[type] === val) {
        delete next[type];
      } else {
        next[type] = val;
      }
      return next;
    });
  };

  const getFilteredSortedProducts = () => {
    let filtered = products.filter(p => {
      for (const key in filters) {
        if (p[key] !== filters[key]) return false;
      }
      return true;
    });

    if (sortOrder === 'price-asc') filtered.sort((a,b) => a.salePrice - b.salePrice);
    if (sortOrder === 'price-desc') filtered.sort((a,b) => b.salePrice - a.salePrice);

    return filtered;
  };

  const filteredProducts = getFilteredSortedProducts();

  const isFilterActive = (type, val) => filters[type] === val;

  const renderFilterList = (title, type, values) => (
    <div className="filter-group">
      <h6>{title}</h6>
      <ul className="list-unstyled">
        {values.map(val => (
          <li key={val}>
            <a href="#filter" 
               className={`filter-link ${isFilterActive(type, val) ? 'active' : ''}`}
               onClick={(e) => { e.preventDefault(); toggleFilter(type, val); }}>
              {val.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container">
      <div className="hs-breadcrumb mt-2"><Link to="/">Home</Link><span className="sep">›</span> Category</div>
      <div className="cat-layout mt-2">
        <aside className="sidebar-hs">
          <h4>Shopping Options</h4>
          {renderFilterList('SEATING CAPACITY', 'capacity', ['2 - 4 People', '5-7 People', '8 People And More'])}
          {renderFilterList('CHOOSE SIZES', 'size', ['5 - 6 Feet Long', '6 - 7 Feet Long', '7 - 8 Feet Long', '8 Feet To Large Size'])}
          {renderFilterList('SPAS BY TYPE', 'type', ['Plug and Play 110 Volt', 'TV-Stereo Spas', 'Corner Spas', 'Portable Spas', 'Deeper Spas'])}
          {renderFilterList('PRICE RANGES FROM', 'pricerange', ['Under $3,000', '$3,000 To 4,000', '$4,000 To 5,000', '$5,000 To 6,000', '$6,000 +'])}
        </aside>
        
        <div>
          <h2 className="section-title">Top Product Listing</h2>
          <div className="cat-toolbar">
            <span><span id="result-count">{filteredProducts.length}</span> Item(s)</span>
            <span>Show: 
              <select id="sort-select" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </span>
          </div>
          <div id="cat-grid" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {filteredProducts.map((p, i) => (
              <div className="col prod-col" key={p.id}>
                <ProductCard p={p} idx={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;

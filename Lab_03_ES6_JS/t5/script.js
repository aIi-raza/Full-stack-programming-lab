// ============================================================
// t5 — Product Catalog using Map
// ES6 Features: Map, map.get(), map.set(), map.delete(),
//               map.forEach(), map.size, Template Literals,
//               const/let, Arrow functions
// ============================================================

// ── ES6 MAP — key/value store; key = product ID string ──
const productCatalog = new Map();

// Add products: key = "P001", value = product object
productCatalog.set('P001', { name: 'Wireless Headphones', price: 79.99, category: 'Electronics', stock: 45, emoji: '🎧' });
productCatalog.set('P002', { name: 'Mechanical Keyboard', price: 129.99, category: 'Peripherals', stock: 20, emoji: '⌨️' });
productCatalog.set('P003', { name: 'Ergonomic Mouse', price: 49.99, category: 'Peripherals', stock: 60, emoji: '🖱️' });
productCatalog.set('P004', { name: 'USB-C Monitor Hub', price: 39.99, category: 'Accessories', stock: 80, emoji: '🔌' });
productCatalog.set('P005', { name: 'Laptop Stand Pro', price: 29.99, category: 'Accessories', stock: 35, emoji: '💻' });
productCatalog.set('P006', { name: 'HD Webcam 1080p', price: 59.99, category: 'Electronics', stock: 15, emoji: '📷' });

// ── Display ALL products using Map.forEach() ──
const displayAllProducts = () => {
    let cardsHTML = '';

    // ── map.forEach(callback) — iterates over [value, key] pairs ──
    productCatalog.forEach((product, id) => {
        cardsHTML += `
      <div class="product-card">
        <div class="product-image">${product.emoji}</div>
        <div class="product-info">
          <div class="product-id">${id}</div>
          <div class="product-name">${product.name}</div>
          <div class="product-price">$${product.price.toFixed(2)}</div>
          <div class="product-meta">
            <span class="category-badge">${product.category}</span>
            <span class="stock-info">Stock: ${product.stock}</span>
          </div>
        </div>
      </div>
    `;
    });

    // ── map.size — total number of entries in the Map ──
    document.getElementById('output').innerHTML = `
    <div class="catalog-header">
      <span class="catalog-title">All Products</span>
      <span class="count-badge">Total: ${productCatalog.size} products</span>
    </div>
    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(210px,1fr)); gap:20px">
      ${cardsHTML}
    </div>
  `;
};

// ── Search a product by ID using map.get() ──
const searchProduct = () => {
    const id = document.getElementById('searchInput').value.trim().toUpperCase();
    if (!id) return;

    // ── map.get(key) — retrieves the value for a given key ──
    const product = productCatalog.get(id);

    const resultSection = document.getElementById('search-result') ||
        (() => {
            const div = document.createElement('div');
            div.id = 'search-result';
            document.querySelector('main').insertBefore(div, document.getElementById('output'));
            return div;
        })();

    if (product) {
        resultSection.innerHTML = `
      <div class="search-result">
        <strong style="color:#f59e0b;font-size:.78rem;text-transform:uppercase;letter-spacing:.8px">
          Search Result — ${id}
        </strong>
        <div style="margin-top:12px;display:flex;align-items:center;gap:14px">
          <span style="font-size:2.5rem">${product.emoji}</span>
          <div>
            <div style="font-weight:600;font-size:1rem;color:#f8fafc">${product.name}</div>
            <div style="color:#f59e0b;font-size:1.1rem;font-weight:700;margin:4px 0">$${product.price.toFixed(2)}</div>
            <div style="font-size:.8rem;color:#64748b">Category: ${product.category} &nbsp;|&nbsp; Stock: ${product.stock}</div>
          </div>
        </div>
      </div>
    `;
    } else {
        resultSection.innerHTML = `
      <div class="search-result not-found">
        🔍 Product ID <strong>"${id}"</strong> not found in catalog.
      </div>
    `;
    }

    document.getElementById('searchInput').value = '';
};

// ── Delete a product by ID using map.delete() ──
const deleteProduct = () => {
    const id = document.getElementById('deleteInput').value.trim().toUpperCase();
    if (!id) return;

    // ── map.delete(key) — removes the entry and returns boolean ──
    const deleted = productCatalog.delete(id);

    const toast = document.createElement('div');
    toast.style.cssText = `
    position:fixed; top:20px; right:20px; z-index:999;
    background:${deleted ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.12)'};
    border:1px solid ${deleted ? 'rgba(34,197,94,0.4)' : 'rgba(239,68,68,0.4)'};
    color:${deleted ? '#4ade80' : '#f87171'};
    padding:12px 20px; border-radius:10px;
    font-family:Poppins,sans-serif; font-size:.85rem; font-weight:600;
    box-shadow:0 8px 24px rgba(0,0,0,0.3);
    animation:slideIn .3s ease;
  `;
    toast.textContent = deleted
        ? `✅ Product "${id}" deleted successfully.`
        : `❌ Product "${id}" not found.`;

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);

    document.getElementById('deleteInput').value = '';
    if (deleted) displayAllProducts(); // Refresh grid
};

// ── Allow Enter key on inputs ──
document.getElementById('searchInput').addEventListener('keydown', e => { if (e.key === 'Enter') searchProduct(); });
document.getElementById('deleteInput').addEventListener('keydown', e => { if (e.key === 'Enter') deleteProduct(); });

// ── Run on page load ──
displayAllProducts();

// ============================================================
// t2 — Online Shopping Cart
// ES6 Features: Rest operator, Spread operator,
//               Array Destructuring, Template Literals, const/let
// ============================================================

// ── ES6 REST OPERATOR — accepts any number of item args ──
const addToCart = (...items) => {
    // 'items' is an automatically created array thanks to rest (...)
    return items;
};

// ── Initial product list (const array of objects) ──
const initialProducts = [
    { name: 'Wireless Headphones', price: 79.99, qty: 1, emoji: '🎧' },
    { name: 'Mechanical Keyboard', price: 129.99, qty: 2, emoji: '⌨️' },
    { name: 'USB-C Hub', price: 39.99, qty: 1, emoji: '🖥️' },
    { name: 'Webcam HD 1080p', price: 59.99, qty: 1, emoji: '📷' },
];

// ── ES6 SPREAD OPERATOR — clone the array into a new cart array ──
// The spread (...) copies each element; the original stays unchanged
let cart = addToCart(...initialProducts);   // rest collects into array
const cartCopy = [...cart];                  // spread clones it

// ── ES6 ARRAY DESTRUCTURING — extract first item and the rest ──
const [firstItem, ...remainingItems] = cartCopy;

// ── Render function using Template Literals ──
const renderCart = () => {
    // Build remaining items HTML
    const remainingHTML = remainingItems
        .map(item => `
      <div class="item-card">
        <div class="item-emoji" style="font-size:1.8rem;margin-bottom:8px">${item.emoji}</div>
        <h3>${item.name}</h3>
        <div class="price">$${item.price.toFixed(2)}</div>
        <div class="qty">Qty: ${item.qty}</div>
      </div>
    `)
        .join('');

    // Inject everything into #output using a single template literal
    document.getElementById('output').innerHTML = `
    <div class="cart-summary">
      <div class="cart-icon">🛒</div>
      <div class="cart-info">
        <h2>Total Items in Cart</h2>
        <div class="cart-count">${cart.length}</div>
      </div>
    </div>

    <p class="section-title">⭐ First Item (Destructured)</p>
    <div class="first-item-card">
      <div class="item-icon">${firstItem.emoji}</div>
      <div class="item-details">
        <h3>${firstItem.name}</h3>
        <div class="item-price">$${firstItem.price.toFixed(2)}</div>
        <div class="item-qty">Quantity: ${firstItem.qty}</div>
      </div>
      <span class="first-badge">First Item</span>
    </div>

    <p class="section-title remaining">📦 Remaining Items (Rest of Array)</p>
    <div class="items-grid">${remainingHTML}</div>
  `;
};

// Run on page load
renderCart();

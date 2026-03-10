/* ==========================================================
   HotSpring Portable Spas — main.js
   jQuery + vanilla JS
   LocalStorage acts as the runtime database
   (seeded from Excel data structure)
   ========================================================== */

$(function () {

  /* ── DB LAYER (localStorage mirrors Excel sheets) ─── */
  const DB = {
    get  : k => { try { return JSON.parse(localStorage.getItem('hs_' + k)) ?? null; } catch { return null; } },
    set  : (k, v) => localStorage.setItem('hs_' + k, JSON.stringify(v)),
    init : (k, v) => { if (DB.get(k) === null) DB.set(k, v); }
  };

  /* Seed default data (mirrors Excel workbook) */
  DB.init('products', [
    { id:1, name:'Barrier Reef 158 Jet TV-Stereo Home Theater Spa', model:'B22CS309NSS', price:4899, salePrice:4899,
      category:'TV-Stereo Spas', capacity:'8 Person', size:'8 Feet To Large Size', type:'TV-Stereo Spas',
      priceRange:'$3,000 To 4,000', rating:4, reviews:14, inStock:true, voltage:'220V', pumps:'3 x 5HP',
      gallons:'305 Gallons / 573 lbs', heater:'5.5 KW Heavy Heater', jets:158,
      desc:'Extra Large and Deep 8 Person 158 Jet Supper Spa, TV-Home Theater Spa System. Experience the ultimate luxury relaxation with built-in entertainment.' },
    { id:2, name:'Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets', model:'B22CS309NSS', price:2199, salePrice:1979,
      category:'TV-Stereo Spas', capacity:'5-7 People', size:'7 - 8 Feet Long', type:'TV-Stereo Spas',
      priceRange:'$3,000 To 4,000', rating:4, reviews:14, inStock:true, voltage:'220V / 50 amp / ETL Certificate', pumps:'2 x 5HP',
      gallons:'305 Gallons / 573 lbs', heater:'5.5 KW Heavy Heater', jets:90,
      desc:'6-7 Person spa with TV/DVD entertainment. Features premium jets, adjustable seating and full AV system for backyard relaxation.' },
    { id:3, name:'Cabaret 3 Person 41 Jet Hot Tub 110-Volt Plug In', model:'XS-SCYBA-X-119', price:500, salePrice:500,
      category:'Plug and Play 110 Volt', capacity:'2 - 4 People', size:'5 - 6 Feet Long', type:'Plug and Play 110 Volt',
      priceRange:'Under $3,000', rating:4, reviews:8, inStock:true, voltage:'110V/220V Convertible', pumps:'1 x 1HP',
      gallons:'200 Gallons', heater:'1KW / 4KW Convertible', jets:41,
      desc:'Easy plug-and-play solution. No electrician required. 220V/50 AMP convertible. Perfect for patios and decks.' },
    { id:4, name:'Pacific Rim 6 Person Corner Spa', model:'XS-SCYBA-X-SET119', price:500, salePrice:500,
      category:'Corner Spas', capacity:'5-7 People', size:'6 - 7 Feet Long', type:'Corner Spas',
      priceRange:'Under $3,000', rating:4, reviews:6, inStock:true, voltage:'220V', pumps:'2 x 3HP',
      gallons:'275 Gallons', heater:'4 KW Heater', jets:65,
      desc:'Beautiful corner design perfect for fitting into tight backyard spaces. 6-person capacity with ergonomic seating.' },
    { id:5, name:'Paradise XL Portable Spa 7 Person', model:'XS-SCYBA-X-119-B', price:500, salePrice:500,
      category:'Portable Spas', capacity:'5-7 People', size:'7 - 8 Feet Long', type:'Portable Spas',
      priceRange:'Under $3,000', rating:3, reviews:5, inStock:true, voltage:'220V', pumps:'2 x 4HP',
      gallons:'310 Gallons', heater:'4 KW Heater', jets:75,
      desc:'Portable and lightweight with full spa features. Easy setup, no permanent plumbing required.' },
    { id:6, name:'Deep Reef 8 Person Deeper Spa', model:'XS-SCYBA-X-119-C', price:500, salePrice:500,
      category:'Deeper Spas', capacity:'8 People And More', size:'8 Feet To Large Size', type:'Deeper Spas',
      priceRange:'Under $3,000', rating:5, reviews:12, inStock:true, voltage:'220V', pumps:'3 x 5HP',
      gallons:'400 Gallons', heater:'6 KW Heater', jets:100,
      desc:'Extra deep design for full immersion hydrotherapy. 8+ person capacity with advanced therapeutic jets.' }
  ]);
  DB.init('users',   [{ id:1, email:'demo@hotspring.com', password:'demo123', firstName:'Demo', lastName:'User' }]);
  DB.init('orders',  [
    { id:303, userId:1, date:'December 18, 2014', status:'On hold', total:699, items:[{name:'Cabaret 3 Person Spa',qty:1,price:699}] },
    { id:307, userId:1, date:'December 18, 2014', status:'On hold', total:799, items:[{name:'Barrier Reef Spa',qty:1,price:799}] }
  ]);
  DB.init('cart',     []);
  DB.init('session',  null);
  DB.init('billing',  { firstName:'Farrukh', lastName:'Javaid', company:'Hotub Spas', address:'Plot 10 Tech Society', city:'California', state:'CA', zip:'20112', country:'United States' });
  DB.init('shipping', DB.get('billing'));
  DB.init('wishlist', []);
  DB.init('contacts', []);

  /* ── TOAST ── */
  const Toast = {
    show(msg, type = 'info') {
      const icons = { success:'✓', error:'✗', info:'ℹ' };
      const cls   = { success:'t-success', error:'t-error', info:'t-info' };
      const $t = $(`<div class="hs-toast ${cls[type]}"><span>${icons[type]}</span><span>${msg}</span></div>`);
      $('body').append($t);
      requestAnimationFrame(() => $t.addClass('show'));
      setTimeout(() => { $t.removeClass('show'); setTimeout(() => $t.remove(), 320); }, 3200);
    }
  };

  /* ── CART ── */
  const Cart = {
    all  : () => DB.get('cart') || [],
    save : c  => DB.set('cart', c),
    add  (product) {
      const c = Cart.all(), i = c.findIndex(x => x.id === product.id);
      i > -1 ? c[i].qty++ : c.push({ ...product, qty: 1 });
      Cart.save(c); Cart.updateUI();
      Toast.show(`"${product.name.substring(0,30)}..." added to cart.`, 'success');
    },
    remove(id) { Cart.save(Cart.all().filter(x => x.id !== id)); Cart.updateUI(); },
    updateQty(id, qty) {
      const c = Cart.all(), i = c.findIndex(x => x.id === id);
      if (i > -1) { if (qty < 1) c.splice(i,1); else c[i].qty = qty; }
      Cart.save(c); Cart.updateUI();
    },
    total : () => Cart.all().reduce((t,i) => t + i.salePrice * i.qty, 0),
    count : () => Cart.all().reduce((t,i) => t + i.qty, 0),
    clear : () => { Cart.save([]); Cart.updateUI(); },
    updateUI() {
      const n = Cart.count();
      $('.cart-badge').text(n);
      $('.cart-items-lbl').text(n + ' Item' + (n !== 1 ? 's' : ''));
    }
  };

  /* ── AUTH ── */
  const Auth = {
    user    : () => DB.get('session'),
    loggedIn: () => !!Auth.user(),
    login(email, pass) {
      const u = (DB.get('users') || []).find(x => x.email === email && x.password === pass);
      if (u) { DB.set('session', u); return true; }
      return false;
    },
    register(data) {
      const users = DB.get('users') || [];
      if (users.find(u => u.email === data.email)) return false;
      data.id = Date.now(); users.push(data); DB.set('users', users); return true;
    },
    logout() { DB.set('session', null); window.location.href = '../index.html'; }
  };

  /* ── VALIDATION ── */
  const V = {
    email : s => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim()),
    filled: s => s.trim() !== '',
    minLen: (s, n) => s.trim().length >= n,
    eq    : (a, b) => a === b,

    /* Run rules on a single jQuery input, return true if valid */
    field($inp, rules) {
      $inp.removeClass('is-invalid');
      const $err = $inp.closest('.form-group,.label-input-row').find('.hs-error');
      $err.removeClass('show').text('');

      for (const [rule, arg] of Object.entries(rules)) {
        let ok = true, msg = '';
        if (rule === 'required' && !V.filled($inp.val()))      { ok=false; msg='This field is required.'; }
        if (rule === 'email'    && !V.email($inp.val()))        { ok=false; msg='Enter a valid email address.'; }
        if (rule === 'min'      && !V.minLen($inp.val(), arg))  { ok=false; msg=`Minimum ${arg} characters.`; }
        if (rule === 'max'      && $inp.val().trim().length > arg) { ok=false; msg=`Maximum ${arg} characters.`; }
        if (rule === 'match')   {
          const $other = $(arg);
          if (!V.eq($inp.val(), $other.val())) { ok=false; msg='Passwords do not match.'; }
        }
        if (!ok) { $inp.addClass('is-invalid'); $err.text(msg).addClass('show'); return false; }
      }
      return true;
    }
  };

  /* ── HERO SLIDER ── */
  let slideIdx = 0;
  const $slides = $('.hs-slide');
  const $dots   = $('.slider-dots .dot');
  let autoTimer;

  function gotoSlide(n) {
    $slides.removeClass('active');
    $dots.removeClass('active');
    slideIdx = ((n % $slides.length) + $slides.length) % $slides.length;
    $slides.eq(slideIdx).addClass('active');
    $dots.eq(slideIdx).addClass('active');
  }

  if ($slides.length) {
    const startAuto = () => { autoTimer = setInterval(() => gotoSlide(slideIdx + 1), 5000); };
    const resetAuto = () => { clearInterval(autoTimer); startAuto(); };
    startAuto();
    $('.slider-ctrl.next').on('click', () => { gotoSlide(slideIdx + 1); resetAuto(); });
    $('.slider-ctrl.prev').on('click', () => { gotoSlide(slideIdx - 1); resetAuto(); });
    $dots.on('click', function () { gotoSlide($(this).index()); resetAuto(); });
  }

  /* ── PRODUCT TABS ── */
  $('.tab-btn').on('click', function () {
    const tab = $(this).data('tab');
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.tab-pane').removeClass('active');
    $(`#tab-${tab}`).addClass('active');
  });

  /* ── PRODUCT THUMBNAIL ── */
  $('.thumb-item').on('click', function () {
    $('.thumb-item').removeClass('active');
    $(this).addClass('active');
  });

  /* ── PRICE CALCULATOR ── */
  function calcUpdate() {
    const base = parseFloat($('#calc-base').val() || 0);
    const extra = $('.calc-row select').toArray().reduce((s, el) => s + parseFloat(el.value || 0), 0);
    $('.amount-display').text('$' + (base + extra).toFixed(2));
  }
  $('.calc-row select').on('change', calcUpdate);

  /* ── ADD TO CART (delegated) ── */
  $(document).on('click', '.btn-cart', function () {
    const id = parseInt($(this).data('id'));
    const products = DB.get('products') || [];
    const p = products.find(x => x.id === id);
    if (p) Cart.add(p);
    else Toast.show('Product not found.', 'error');
  });

  /* ── WISHLIST ── */
  $(document).on('click', '.add-wishlist', function () {
    const name = $(this).data('name');
    const wl = DB.get('wishlist') || [];
    if (!wl.includes(name)) { wl.push(name); DB.set('wishlist', wl); Toast.show('Added to wishlist!', 'success'); }
    else Toast.show('Already in your wishlist.', 'info');
  });

  /* ── CART PAGE RENDER ── */
  function renderCart() {
    const $tbody = $('#cart-tbody');
    if (!$tbody.length) return;
    const cart = Cart.all();
    $tbody.empty();
    if (!cart.length) {
      $tbody.html('<tr><td colspan="5" style="text-align:center;padding:30px;color:#888;">Your cart is empty. <a href="../index.html" class="inline-link">Continue shopping</a></td></tr>');
      $('#cart-total').text('$0.00');
      return;
    }
    const COLORS = ['#122b44','#1a3a1a','#3b1a00','#1a001a','#002b44','#1a1a00'];
    cart.forEach((item, idx) => {
      const bg = COLORS[idx % COLORS.length];
      $tbody.append(`
        <tr>
          <td><div class="cart-prod-thumb" style="background:${bg};color:#fff;">♨</div></td>
          <td>
            <div class="cart-prod-name">${item.name}</div>
            <div class="cart-desc">${(item.desc||'').substring(0,60)}...</div>
          </td>
          <td>
            <input type="number" class="qty-box" value="${item.qty}" min="1"
              onchange="window._updateQty(${item.id}, this.value)">
          </td>
          <td>$${item.salePrice.toFixed(2)}</td>
          <td>
            $${(item.salePrice * item.qty).toFixed(2)}
            <button class="cart-remove" onclick="window._removeCart(${item.id})">Remove | Edit Your Order</button>
          </td>
        </tr>`);
    });
    $('#cart-total').text('$' + Cart.total().toFixed(2));
    $('#cart-count-lbl').text(cart.length + ' item' + (cart.length !== 1 ? 's' : ''));
  }

  window._removeCart   = id  => { Cart.remove(id); renderCart(); };
  window._updateQty    = (id, qty) => { Cart.updateQty(id, parseInt(qty)); renderCart(); };
  renderCart();

  /* ── CHECKOUT: populate review table ── */
  function fillCheckoutReview() {
    const $tb = $('#checkout-review-tbody');
    if (!$tb.length) return;
    const cart = Cart.all();
    $tb.empty();
    cart.forEach(i => $tb.append(`<tr><td>${i.name}</td><td>$${i.salePrice.toFixed(2)}</td><td>${i.qty}</td><td>$${(i.salePrice*i.qty).toFixed(2)}</td></tr>`));
    const total = Cart.total();
    $('#checkout-total').text('$' + total.toFixed(2));
    $('#co-total-summary').text('$' + total.toFixed(2));
  }
  fillCheckoutReview();

  /* ── ACCOUNT PAGE ── */
  function fillAccountPage() {
    const $tbody = $('#orders-tbody');
    if (!$tbody.length) return;
    const user = Auth.user();
    if (user) $('#user-greeting').text('Hello ' + user.firstName + '!');
    const orders = DB.get('orders') || [];
    $tbody.empty();
    orders.slice(0,6).forEach(o => {
      $tbody.append(`<tr>
        <td><a href="order-details.html?id=${o.id}" class="order-num-link">#${o.id}</a></td>
        <td>${o.date}</td>
        <td><span class="status-pill on-hold">${o.status}</span></td>
        <td>$${(+o.total).toFixed(2)}</td>
        <td><a href="order-details.html?id=${o.id}" class="btn-hs btn-red" style="font-size:11px;padding:5px 12px;">VIEW ORDERS</a></td>
      </tr>`);
    });
    const b = DB.get('billing') || {};
    const s = DB.get('shipping') || {};
    const fmt = a => `${a.firstName||''} ${a.lastName||''}<br>${a.company||''}<br>${a.address||''}<br>${a.city||''}, ${a.state||''} ${a.zip||''}<br>${a.country||''}`;
    $('#billing-addr-disp').html(fmt(b));
    $('#shipping-addr-disp').html(fmt(s));
  }
  fillAccountPage();

  /* ── ORDER DETAILS PAGE ── */
  function fillOrderDetails() {
    const params = new URLSearchParams(location.search);
    const id = parseInt(params.get('id'));
    if (!id || !$('#order-id-disp').length) return;
    const order = (DB.get('orders')||[]).find(o => o.id === id);
    if (!order) { $('#order-id-disp').text('Not found'); return; }
    $('#order-id-disp').text('#' + order.id);
    $('#order-date-disp').text(order.date);
    $('#order-status-disp').text(order.status);
    $('#order-total-disp').text('$' + (+order.total).toFixed(2));
    const $tb = $('#order-items-tbody');
    $tb.empty();
    (order.items||[]).forEach(i => $tb.append(`<tr><td>${i.name}</td><td>${i.qty}</td><td>$${(+i.price).toFixed(2)}</td><td>$${(i.qty*(+i.price)).toFixed(2)}</td></tr>`));
  }
  fillOrderDetails();

  /* ── ORDER SUMMARY PAGE ── */
  function fillOrderSummary() {
    const $wrap = $('#order-summary-list');
    if (!$wrap.length) return;
    const orders = DB.get('orders') || [];
    if (!orders.length) { $wrap.html('<p style="font-size:13px;color:#888;">No orders yet.</p>'); return; }
    let html = '<table class="orders-tbl"><thead><tr><th>Order</th><th>Date</th><th>Status</th><th>Total</th><th>Action</th></tr></thead><tbody>';
    orders.forEach(o => {
      html += `<tr><td><a href="order-details.html?id=${o.id}" class="order-num-link">#${o.id}</a></td><td>${o.date}</td><td><span class="status-pill on-hold">${o.status}</span></td><td>$${(+o.total).toFixed(2)}</td><td><a href="order-details.html?id=${o.id}" class="btn-hs btn-red" style="font-size:11px;padding:5px 12px;">VIEW</a></td></tr>`;
    });
    html += '</tbody></table>';
    $wrap.html(html);
  }
  fillOrderSummary();

  /* ── PRE-FILL FORMS ── */
  const billing = DB.get('billing') || {};
  $('#b-first').val(billing.firstName||''); $('#b-last').val(billing.lastName||'');
  $('#b-company').val(billing.company||''); $('#b-address').val(billing.address||'');
  $('#b-city').val(billing.city||''); $('#b-state').val(billing.state||'');
  $('#b-zip').val(billing.zip||''); $('#b-country').val(billing.country||'');

  const shipping = DB.get('shipping') || {};
  $('#s-first').val(shipping.firstName||''); $('#s-last').val(shipping.lastName||'');
  $('#s-company').val(shipping.company||''); $('#s-address').val(shipping.address||'');
  $('#s-city').val(shipping.city||''); $('#s-state').val(shipping.state||'');
  $('#s-zip').val(shipping.zip||''); $('#s-country').val(shipping.country||'');

  const sess = Auth.user();
  if (sess) { $('#acc-first').val(sess.firstName||''); $('#acc-last').val(sess.lastName||''); $('#acc-email').val(sess.email||''); }

  /* ── PRODUCT DETAIL POPULATE ── */
  function fillProductDetail() {
    if (!$('#pd-name').length) return;
    const id = parseInt(new URLSearchParams(location.search).get('id')) || 2;
    const products = DB.get('products') || [];
    const p = products.find(x => x.id === id) || products[1];
    document.title = p.name + ' | HotSpring Portable Spas';
    $('#pd-name').text(p.name);
    $('#pd-name-bc').text(p.name.substring(0,40) + '...');
    $('#pd-model').text(`Abt Model:${p.model} | UPC Code: 822CS868729`);
    $('#pd-retail').text('Retail Price: $' + p.price.toFixed(2));
    $('#pd-sale').text('$' + p.salePrice.toFixed(2));
    $('#pd-capacity').text(p.capacity);
    $('#pd-jets').text(p.jets);
    $('#pd-pumps').text(p.pumps);
    $('#pd-voltage').text(p.voltage);
    $('#pd-gallons').text(p.gallons);
    $('#pd-heater').text(p.heater);
    $('#pd-desc, #pd-tab-desc').text(p.desc);
    $('#pd-stars').text('★'.repeat(p.rating) + '☆'.repeat(5 - p.rating));
    $('#pd-reviews').text('(' + p.reviews + ' reviews)');
    $('#pd-add-cart, #pd-calc-cart').data('id', p.id).attr('data-id', p.id);
    $('#calc-base').val(p.salePrice);
    calcUpdate();
    // Spec tab
    ['gallons','pumps','voltage','jets'].forEach(k => $(`#spec-${k}`).text(p[k]));
    // Related
    const $rel = $('#related-slider');
    if ($rel.length) {
      products.filter(x => x.id !== p.id).slice(0,5).forEach(rp => {
        $rel.append(`<div class="rel-item" onclick="location.href='product.html?id=${rp.id}'">
          <div class="rel-icon">♨</div>
          <div class="rel-name">${rp.name.substring(0,28)}...</div>
          <div class="rel-price">$${rp.salePrice.toFixed(2)}</div>
        </div>`);
      });
    }
  }
  fillProductDetail();

  /* ── HOME & CATEGORY: Render product grids ── */
  function renderProductGrid(containerId, filter, maxItems) {
    const $c = $(containerId);
    if (!$c.length) return;
    let products = DB.get('products') || [];
    if (filter) products = products.filter(filter);
    if (maxItems) products = products.slice(0, maxItems);
    const BG = ['linear-gradient(135deg,#122b44,#1f5f8b)','linear-gradient(135deg,#1a3a1a,#2d6a2d)',
                 'linear-gradient(135deg,#3b1a00,#8b4a1f)','linear-gradient(135deg,#1a001a,#5a2d6a)',
                 'linear-gradient(135deg,#002b44,#1f7a8b)','linear-gradient(135deg,#1a1a00,#6a6a1f)'];
    $c.empty();
    products.forEach((p, idx) => {
      $c.append(`
        <div class="col">
          <div class="product-card fade-up" style="animation-delay:${idx * 0.07}s">
            <div class="prod-img-wrap" style="background:${BG[idx%BG.length]}">
              <span class="spa-icon" style="color:rgba(255,255,255,.8)">♨</span>
            </div>
            <div class="card-body-hs">
              <h5>${p.name}</h5>
              <p>${p.desc.substring(0,75)}...</p>
              <div class="card-price">$${p.salePrice.toFixed(2)}</div>
              <button class="btn-cart" data-id="${p.id}">🛒 ADD TO CART</button>
              <div class="card-links-row">
                <a href="#" class="add-wishlist" data-name="${p.name}">ADD TO WISH LIST</a>
                <a href="pages/product.html?id=${p.id}">MORE DETAILS</a>
              </div>
            </div>
          </div>
        </div>`);
    });
    Cart.updateUI();
  }

  function renderProductGridCat(containerId, filter) {
    const $c = $(containerId);
    if (!$c.length) return;
    let products = DB.get('products') || [];
    if (filter) products = products.filter(filter);
    const BG = ['linear-gradient(135deg,#122b44,#1f5f8b)','linear-gradient(135deg,#1a3a1a,#2d6a2d)',
                 'linear-gradient(135deg,#3b1a00,#8b4a1f)','linear-gradient(135deg,#1a001a,#5a2d6a)',
                 'linear-gradient(135deg,#002b44,#1f7a8b)','linear-gradient(135deg,#1a1a00,#6a6a1f)'];
    $c.empty();
    products.forEach((p, idx) => {
      $c.append(`
        <div class="col prod-col"
          data-capacity="${p.capacity}"
          data-size="${p.size}"
          data-type="${p.type}"
          data-pricerange="${p.priceRange}">
          <div class="product-card fade-up" style="animation-delay:${idx*0.07}s">
            <div class="prod-img-wrap" style="background:${BG[idx%BG.length]}">
              <span class="spa-icon" style="color:rgba(255,255,255,.8)">♨</span>
            </div>
            <div class="card-body-hs">
              <h5>${p.name}</h5>
              <p>${p.desc.substring(0,75)}...</p>
              <div class="card-price">$${p.salePrice.toFixed(2)}</div>
              <button class="btn-cart" data-id="${p.id}">🛒 ADD TO CART</button>
              <div class="card-links-row">
                <a href="#" class="add-wishlist" data-name="${p.name}">ADD TO WISH LIST</a>
                <a href="product.html?id=${p.id}">MORE DETAILS</a>
              </div>
            </div>
          </div>
        </div>`);
    });
    $('#result-count').text(products.length);
    Cart.updateUI();
  }

  /* HOME grids */
  if ($('#home-products').length) renderProductGrid('#home-products', null, 8);

  /* CATEGORY grid */
  if ($('#cat-grid').length) {
    const params = new URLSearchParams(location.search);
    const search = params.get('search') || '';
    renderProductGridCat('#cat-grid', search ? p => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()) : null);
  }

  /* ── CATEGORY FILTERS ── */
  $(document).on('click', '.filter-link', function (e) {
    e.preventDefault();
    const type = $(this).data('ftype');
    const val  = $(this).data('fval');
    $(`.filter-link[data-ftype="${type}"]`).removeClass('active');
    $(this).toggleClass('active');
    applyFilters();
  });

  function applyFilters() {
    const active = {};
    $('.filter-link.active').each(function () { active[$(this).data('ftype')] = $(this).data('fval'); });
    let count = 0;
    $('.prod-col').each(function () {
      let show = true;
      for (const [type, val] of Object.entries(active)) {
        if ($(this).data(type) !== val) { show = false; break; }
      }
      $(this).closest('.col').toggle(show);
      if (show) count++;
    });
    $('#result-count').text(count);
  }

  /* ── SORT ── */
  $('#sort-select').on('change', function () {
    const val = $(this).val();
    const $grid = $('#cat-grid');
    const cols = $grid.children('.col').get();
    cols.sort((a, b) => {
      const pa = parseFloat($(a).find('.card-price').text().replace(/[^0-9.]/g,'')) || 0;
      const pb = parseFloat($(b).find('.card-price').text().replace(/[^0-9.]/g,'')) || 0;
      return val === 'price-asc' ? pa - pb : val === 'price-desc' ? pb - pa : 0;
    });
    cols.forEach(c => $grid.append(c));
  });

  /* ── RELATED PRODUCTS (generic) ── */
  function renderRelated(excludeId) {
    const $wrap = $('#related-slider');
    if (!$wrap.length || $wrap.children().length) return;  // already filled by pd page
    const products = DB.get('products') || [];
    products.filter(p => p.id !== excludeId).slice(0,6).forEach(p => {
      $wrap.append(`<div class="rel-item" onclick="location.href='${location.pathname.includes('/pages/') ? '' : 'pages/'}product.html?id=${p.id}'">
        <div class="rel-icon">♨</div>
        <div class="rel-name">${p.name.substring(0,28)}...</div>
        <div class="rel-price">$${p.salePrice.toFixed(2)}</div>
      </div>`);
    });
  }
  renderRelated(0);

  /* ── SEARCH ── */
  function doSearch() {
    const q = $('.hs-search-input').val().trim();
    if (!q) return;
    const base = location.pathname.includes('/pages/') ? '' : 'pages/';
    location.href = `${base}category.html?search=${encodeURIComponent(q)}`;
  }
  $('.hs-search-btn').on('click', doSearch);
  $('.hs-search-input').on('keypress', e => { if (e.which === 13) doSearch(); });

  /* ── LOGOUT ── */
  $(document).on('click', '#logout-btn', e => { e.preventDefault(); Auth.logout(); });

  /* ── SHIPPING TOGGLE (checkout) ── */
  $('#co-ship-diff').on('change', function () { $('#ship-diff-wrap').toggle($(this).is(':checked')); });

  /* ── CARD NUMBER FORMAT ── */
  $('#co-card').on('input', function () {
    let v = $(this).val().replace(/\D/g,'').substring(0,16);
    $(this).val(v.replace(/(.{4})/g,'$1 ').trim());
  });

  /* ── NEWSLETTER ── */
  $(document).on('click', '.newsletter-btn', function () {
    const $inp = $(this).prev('input');
    if (!V.email($inp.val())) { Toast.show('Enter a valid email address.', 'error'); return; }
    Toast.show('Subscribed successfully!', 'success');
    $inp.val('');
  });

  /* ───────────────────────
     FORM SUBMISSIONS
  ─────────────────────── */

  /* LOGIN */
  $('#login-form').on('submit', function (e) {
    e.preventDefault();
    const email = $('#login-email').val().trim();
    const pass  = $('#login-pass').val();
    if (!email || !pass) { Toast.show('Please fill in all fields.', 'error'); return; }
    if (Auth.login(email, pass)) {
      Toast.show('Welcome back! Redirecting…', 'success');
      setTimeout(() => location.href = 'my-account.html', 1300);
    } else {
      Toast.show('Invalid email or password.', 'error');
      $('#login-email, #login-pass').addClass('is-invalid');
    }
  });

  /* REGISTER */
  $('#register-form').on('submit', function (e) {
    e.preventDefault();
    const email   = $('#reg-email').val().trim();
    const pass    = $('#reg-pass').val();
    const repass  = $('#reg-repass').val();
    const first   = $('#reg-first').val().trim();
    const last    = $('#reg-last').val().trim();
    let ok = true;
    if (!V.field($('#reg-email'),  { required:true, email:true })) ok = false;
    if (!V.field($('#reg-pass'),   { required:true, min:6, max:20 })) ok = false;
    if (!V.field($('#reg-repass'), { required:true })) ok = false;
    if (ok && pass !== repass) { Toast.show('Passwords do not match.', 'error'); $('#reg-repass').addClass('is-invalid'); ok = false; }
    if (!V.field($('#reg-first'),  { required:true })) ok = false;
    if (!V.field($('#reg-last'),   { required:true })) ok = false;
    if (!ok) return;
    if (Auth.register({ email, password:pass, firstName:first, lastName:last })) {
      Auth.login(email, pass);
      Toast.show('Account created! Redirecting…', 'success');
      setTimeout(() => location.href = 'my-account.html', 1300);
    } else {
      Toast.show('This email is already registered.', 'error');
    }
  });

  /* FORGOT PASSWORD */
  $('#forgot-form').on('submit', function (e) {
    e.preventDefault();
    if (!V.field($('#forgot-email'), { required:true, email:true })) return;
    Toast.show('Password reset link sent to ' + $('#forgot-email').val(), 'success');
    setTimeout(() => location.href = 'login.html', 2000);
  });

  /* CONTACT */
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();
    let ok = true;
    if (!V.field($('#c-first'),   { required:true })) ok = false;
    if (!V.field($('#c-email'),   { required:true, email:true })) ok = false;
    if (!V.field($('#c-subject'), { required:true })) ok = false;
    if (!V.field($('#c-msg'),     { required:true })) ok = false;
    if (!ok) return;
    const msgs = DB.get('contacts') || [];
    msgs.push({ first:$('#c-first').val(), email:$('#c-email').val(), subject:$('#c-subject').val(), msg:$('#c-msg').val(), date:new Date().toISOString() });
    DB.set('contacts', msgs);
    Toast.show('Message sent! We\'ll reply within 24 hours.', 'success');
    this.reset();
  });

  /* CHECKOUT */
  $('#checkout-form').on('submit', function (e) {
    e.preventDefault();
    let ok = true;
    if (!V.field($('#co-first'),   { required:true })) ok = false;
    if (!V.field($('#co-last'),    { required:true })) ok = false;
    if (!V.field($('#co-email'),   { required:true, email:true })) ok = false;
    if (!V.field($('#co-address'), { required:true })) ok = false;
    if (!V.field($('#co-card'),    { required:true })) ok = false;
    if (!V.field($('#co-cvv'),     { required:true })) ok = false;
    if (!$('#co-terms').is(':checked')) { Toast.show('Please accept Terms & Conditions.', 'error'); ok = false; }
    if (!ok) return;
    const cart = Cart.all();
    if (!cart.length) { Toast.show('Your cart is empty.', 'error'); return; }
    const order = {
      id: Math.floor(Math.random() * 9000) + 1000,
      date: new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' }),
      status: 'Processing', total: Cart.total(),
      items: cart.map(i => ({ name:i.name, qty:i.qty, price:i.salePrice }))
    };
    const orders = DB.get('orders') || [];
    orders.unshift(order); DB.set('orders', orders);
    Cart.clear();
    Toast.show(`Order #${order.id} placed successfully!`, 'success');
    setTimeout(() => location.href = 'my-account.html', 2200);
  });

  /* EDIT ACCOUNT */
  $('#edit-account-form').on('submit', function (e) {
    e.preventDefault();
    const s = Auth.user(); if (!s) return;
    let ok = true;
    if (!V.field($('#acc-first'), { required:true })) ok = false;
    if (!V.field($('#acc-last'),  { required:true })) ok = false;
    if (!V.field($('#acc-email'), { required:true, email:true })) ok = false;
    if (!ok) return;
    const newPass = $('#acc-newpass').val();
    const curPass = $('#acc-curpass').val();
    let users = DB.get('users') || [];
    const idx = users.findIndex(u => u.id === s.id);
    if (idx === -1) return;
    if (newPass) {
      if (users[idx].password !== curPass) { Toast.show('Current password incorrect.', 'error'); return; }
      if (newPass.length < 6) { Toast.show('New password must be at least 6 chars.', 'error'); return; }
      users[idx].password = newPass;
    }
    users[idx].firstName = $('#acc-first').val().trim();
    users[idx].lastName  = $('#acc-last').val().trim();
    users[idx].email     = $('#acc-email').val().trim();
    DB.set('users', users); DB.set('session', users[idx]);
    Toast.show('Account updated!', 'success');
    setTimeout(() => location.href = 'my-account.html', 1300);
  });

  /* EDIT BILLING */
  $('#edit-billing-form').on('submit', function (e) {
    e.preventDefault();
    DB.set('billing', { firstName:$('#b-first').val(), lastName:$('#b-last').val(), company:$('#b-company').val(),
      address:$('#b-address').val(), city:$('#b-city').val(), state:$('#b-state').val(),
      zip:$('#b-zip').val(), country:$('#b-country').val() });
    Toast.show('Billing address saved!', 'success');
    setTimeout(() => location.href = 'my-account.html', 1200);
  });

  /* EDIT SHIPPING */
  $('#edit-shipping-form').on('submit', function (e) {
    e.preventDefault();
    DB.set('shipping', { firstName:$('#s-first').val(), lastName:$('#s-last').val(), company:$('#s-company').val(),
      address:$('#s-address').val(), city:$('#s-city').val(), state:$('#s-state').val(),
      zip:$('#s-zip').val(), country:$('#s-country').val() });
    Toast.show('Shipping address saved!', 'success');
    setTimeout(() => location.href = 'my-account.html', 1200);
  });

  /* ── INIT ── */
  Cart.updateUI();
});

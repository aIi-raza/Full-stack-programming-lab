// src/utils/db.js
const DB = {
  get: (k) => { try { return JSON.parse(localStorage.getItem('hs_' + k)) ?? null; } catch { return null; } },
  set: (k, v) => localStorage.setItem('hs_' + k, JSON.stringify(v)),
  init: (k, v) => { if (DB.get(k) === null) DB.set(k, v); }
};

export function initDB() {
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
}

export const Toast = {
  show(msg, type = 'info') {
    const icons = { success:'✓', error:'✗', info:'ℹ' };
    const cls   = { success:'t-success', error:'t-error', info:'t-info' };
    
    const div = document.createElement('div');
    div.className = `hs-toast ${cls[type]}`;
    div.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
    document.body.appendChild(div);
    
    requestAnimationFrame(() => div.classList.add('show'));
    setTimeout(() => { 
      div.classList.remove('show'); 
      setTimeout(() => div.remove(), 320); 
    }, 3200);
  }
};

export const CartStore = {
  all: () => DB.get('cart') || [],
  save: (c) => DB.set('cart', c),
  add(product) {
    const c = CartStore.all(), i = c.findIndex(x => x.id === product.id);
    i > -1 ? c[i].qty++ : c.push({ ...product, qty: 1 });
    CartStore.save(c);
    Toast.show(`"${product.name.substring(0,30)}..." added to cart.`, 'success');
  },
  remove(id) { CartStore.save(CartStore.all().filter(x => x.id !== id)); },
  updateQty(id, qty) {
    const c = CartStore.all(), i = c.findIndex(x => x.id === id);
    if (i > -1) { if (qty < 1) c.splice(i,1); else c[i].qty = qty; }
    CartStore.save(c);
  },
  total: () => CartStore.all().reduce((t,i) => t + i.salePrice * i.qty, 0),
  count: () => CartStore.all().reduce((t,i) => t + i.qty, 0),
  clear: () => CartStore.save([]),
};

export const AuthStore = {
  user: () => DB.get('session'),
  loggedIn: () => !!AuthStore.user(),
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
  logout() { DB.set('session', null); window.location.href = '/'; }
};

export default DB;

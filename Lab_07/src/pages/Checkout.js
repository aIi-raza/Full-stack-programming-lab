import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DB, { CartStore, Toast } from '../utils/db';
import { AppContext } from '../utils/AppContext';

function Checkout() {
  const [form, setForm] = useState({ first: '', last: '', email: '', address: '', card: '', cvv: '', terms: false });
  const navigate = useNavigate();
  const { updateCart } = useContext(AppContext);
  const cartItems = CartStore.all();
  const total = CartStore.total();

  useEffect(() => {
    document.title = "Checkout | HotSpring Portable Spas";
    if (cartItems.length === 0) {
      Toast.show('Your cart is empty. Redirecting...', 'error');
      setTimeout(() => navigate('/category'), 2000);
    }
  }, [cartItems.length, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.terms) { Toast.show('Please accept Terms & Conditions.', 'error'); return; }
    
    const order = {
      id: Math.floor(Math.random() * 9000) + 1000,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      status: 'Processing', total: total,
      items: cartItems.map(i => ({ name: i.name, qty: i.qty, price: i.salePrice }))
    };
    
    const orders = DB.get('orders') || [];
    orders.unshift(order);
    DB.set('orders', orders);
    CartStore.clear();
    updateCart();
    
    Toast.show(`Order #${order.id} placed successfully!`, 'success');
    setTimeout(() => navigate('/'), 2200);
  };

  if (cartItems.length === 0) return null;

  return (
    <div className="container">
      <div className="hs-breadcrumb mt-2">Home<span className="sep">›</span> Checkout</div>
      <div className="page-box">
        <h1 className="page-heading">Checkout</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="step-box">
                <h3 className="step-heading">1. Billing Details</h3>
                <input type="text" className="hs-input mb-2" placeholder="First Name *" value={form.first} onChange={e => setForm({...form, first: e.target.value})} required />
                <input type="text" className="hs-input mb-2" placeholder="Last Name *" value={form.last} onChange={e => setForm({...form, last: e.target.value})} required />
                <input type="email" className="hs-input mb-2" placeholder="Email Address *" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                <input type="text" className="hs-input mb-2" placeholder="Full Address *" value={form.address} onChange={e => setForm({...form, address: e.target.value})} required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="step-box">
                <h3 className="step-heading">2. Payment Method</h3>
                <input type="text" className="hs-input mb-2" placeholder="Credit Card Number *" value={form.card} onChange={e => setForm({...form, card: e.target.value})} required />
                <input type="text" className="hs-input mb-2" placeholder="CVV *" value={form.cvv} onChange={e => setForm({...form, cvv: e.target.value})} required />
                
                <h3 className="step-heading mt-4">3. Order Review</h3>
                <table className="order-review-tbl">
                  <thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th></tr></thead>
                  <tbody>
                    {cartItems.map(i => (
                      <tr key={i.id}><td>{i.name}</td><td>${i.salePrice.toFixed(2)}</td><td>{i.qty}</td><td>${(i.salePrice * i.qty).toFixed(2)}</td></tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ textAlign: 'right', fontWeight: 700, fontSize: '18px', marginTop: '10px' }}>Total: ${total.toFixed(2)}</div>
                
                <label className="hs-check mt-3"><input type="checkbox" checked={form.terms} onChange={e => setForm({...form, terms: e.target.checked})} /> I accept the Terms &amp; Conditions</label>
                <button type="submit" className="btn-hs btn-red w-100 mt-2">PLACE ORDER</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;

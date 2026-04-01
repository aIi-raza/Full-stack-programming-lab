import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartStore } from '../utils/db';
import { AppContext } from '../utils/AppContext';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { updateCart } = useContext(AppContext);

  const fetchCart = () => setCartItems(CartStore.all());

  useEffect(() => {
    fetchCart();
    document.title = "Shopping Cart | HotSpring Portable Spas";
  }, []);

  const handleUpdateQty = (id, newQty) => {
    CartStore.updateQty(id, parseInt(newQty));
    fetchCart();
    updateCart();
  };

  const handleRemove = (id) => {
    CartStore.remove(id);
    fetchCart();
    updateCart();
  };

  const COLORS = ['#122b44','#1a3a1a','#3b1a00','#1a001a','#002b44','#1a1a00'];

  return (
    <div className="container">
      <div className="hs-breadcrumb mt-2">
        <Link to="/">Home</Link><span className="sep">›</span> Shopping Cart
      </div>

      <div className="page-box">
        <h1 className="page-heading">Shopping Cart</h1>
        <h5 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '14px' }}>Your Shopping Cart</h5>

        <table className="cart-tbl">
          <thead>
            <tr>
              <th style={{ width: '80px' }}></th>
              <th>Product</th>
              <th style={{ width: '100px' }}>Quantity</th>
              <th style={{ width: '110px' }}>Unit Price</th>
              <th style={{ width: '120px' }}>Items Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: '#888' }}>
                  Your cart is empty. <Link to="/" className="inline-link">Continue shopping</Link>
                </td>
              </tr>
            ) : (
              cartItems.map((item, idx) => (
                <tr key={item.id}>
                  <td>
                    <div className="cart-prod-thumb" style={{ background: COLORS[idx % COLORS.length], color: '#fff' }}>♨</div>
                  </td>
                  <td>
                    <div className="cart-prod-name">{item.name}</div>
                    <div className="cart-desc">{(item.desc || '').substring(0, 60)}...</div>
                  </td>
                  <td>
                    <input type="number" className="qty-box" value={item.qty} min="1" onChange={(e) => handleUpdateQty(item.id, e.target.value)} />
                  </td>
                  <td>${item.salePrice.toFixed(2)}</td>
                  <td>
                    ${(item.salePrice * item.qty).toFixed(2)}
                    <button className="cart-remove text-start border-0 bg-transparent p-0 mt-1 d-block" onClick={() => handleRemove(item.id)}>Remove</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {cartItems.length > 0 && (
          <div className="cart-summary-box">
            <div className="cart-total-row">Cart summary (<span>{cartItems.length} items</span>) &nbsp; Total: <span>${CartStore.total().toFixed(2)}</span></div>
            <div className="d-flex justify-content-end gap-2">
              <Link to="/category" className="btn-hs btn-outline-red">CONTINUE SHOPPING</Link>
              <Link to="/checkout" className="btn-hs btn-red">PROCEED TO CHECKOUT</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

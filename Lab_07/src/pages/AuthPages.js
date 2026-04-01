import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DB, { AuthStore, Toast } from '../utils/db';
import { AppContext } from '../utils/AppContext';

function AuthPages({ type }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const navigate = useNavigate();
  const { updateCart } = useContext(AppContext);

  useEffect(() => {
    document.title = `${type === 'login' ? 'Login' : 'Register'} | HotSpring Portable Spas`;
  }, [type]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !pass) { Toast.show('Please fill in all fields.', 'error'); return; }
    if (AuthStore.login(email, pass)) {
      Toast.show('Welcome back! Redirecting…', 'success');
      setTimeout(() => navigate('/'), 1300);
    } else {
      Toast.show('Invalid email or password.', 'error');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (pass !== repass) { Toast.show('Passwords do not match.', 'error'); return; }
    if (AuthStore.register({ email, password: pass, firstName, lastName })) {
      AuthStore.login(email, pass);
      Toast.show('Account created! Redirecting…', 'success');
      setTimeout(() => navigate('/'), 1300);
    } else {
      Toast.show('This email is already registered.', 'error');
    }
  };

  if (type === 'login') {
    return (
      <div className="container">
        <div className="hs-breadcrumb mt-2">Home<span className="sep">›</span> My Account</div>
        <div className="page-box">
          <h1 className="page-heading">Login Or Create Account</h1>
          <div className="auth-split">
            <div className="auth-panel">
              <h4>User Login Details</h4>
              <p style={{ fontSize: '13px', color: '#666', marginBottom: '4px' }}>Please sign in below with your login information.</p>
              <p style={{ fontSize: '12px', color: '#999', marginBottom: '16px' }}>*Required Fields</p>

              <form onSubmit={handleLogin}>
                <div className="label-input-row">
                  <label className="form-label-hs">Email <span className="req">*</span></label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="hs-input" required />
                </div>
                <div className="label-input-row">
                  <label className="form-label-hs">Password <span className="req">*</span></label>
                  <input type="password" value={pass} onChange={e => setPass(e.target.value)} className="hs-input" required />
                </div>
                <div className="label-input-row">
                  <label></label>
                  <label className="hs-check"><input type="checkbox" /> Remember me</label>
                </div>
                <div className="label-input-row">
                  <label></label>
                  <div className="d-flex align-items-center gap-3">
                    <button type="submit" className="btn-hs btn-red">SIGN IN</button>
                    <a href="#forgot" className="inline-link">Forgot password?</a>
                  </div>
                </div>
              </form>
              <div className="demo-note mt-3"><strong>Demo:</strong> demo@hotspring.com / demo123</div>
            </div>

            <div className="auth-panel">
              <h4>New Customer</h4>
              <p style={{ fontSize: '13px', color: '#666' }}>As a registered customer you can:</p>
              <ul className="new-cust-list">
                <li>Store billing &amp; shipping information</li>
                <li>Check your order status</li>
                <li>Track your delivery status</li>
                <li>View your order history</li>
              </ul>
              <button onClick={() => navigate('/register')} className="btn-hs btn-red">CREATE NEW ACCOUNT</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Register
  return (
    <div className="container">
      <div className="hs-breadcrumb mt-2">Home<span className="sep">›</span> Register</div>
      <div className="page-box">
        <h1 className="page-heading">Create New Account</h1>
        <div style={{ maxWidth: '540px' }}>
          <div className="step-box">
            <h4 style={{ fontFamily: 'var(--heading)', fontSize: '17px', marginBottom: '8px' }}>User Account Details</h4>
            <form onSubmit={handleRegister}>
              <div className="label-input-row">
                <label className="form-label-hs">First Name <span className="req">*</span></label>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="hs-input" required />
              </div>
              <div className="label-input-row">
                <label className="form-label-hs">Last Name <span className="req">*</span></label>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="hs-input" required />
              </div>
              <div className="label-input-row">
                <label className="form-label-hs">Email Address <span className="req">*</span></label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="hs-input" required />
              </div>
              <div className="label-input-row">
                <label className="form-label-hs">Password <span className="req">*</span></label>
                <input type="password" value={pass} onChange={e => setPass(e.target.value)} className="hs-input" required />
              </div>
              <div className="label-input-row">
                <label className="form-label-hs">Re-enter Password <span className="req">*</span></label>
                <input type="password" value={repass} onChange={e => setRepass(e.target.value)} className="hs-input" required />
              </div>
              <div className="d-flex align-items-center gap-3">
                <button type="submit" className="btn-hs btn-red">CREATE ACCOUNT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPages;

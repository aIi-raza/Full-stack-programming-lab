import React, { useState, useEffect } from 'react';
import DB, { Toast } from '../utils/db';

function Contact() {
  const [first, setFirst] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    document.title = "Contact Us | HotSpring Portable Spas";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first || !email || !subject || !msg) {
      Toast.show('Please fill in all fields.', 'error');
      return;
    }
    const msgs = DB.get('contacts') || [];
    msgs.push({ first, email, subject, msg, date: new Date().toISOString() });
    DB.set('contacts', msgs);
    Toast.show('Message sent! We\'ll reply within 24 hours.', 'success');
    setFirst(''); setEmail(''); setSubject(''); setMsg('');
  };

  return (
    <div className="container">
      <div className="hs-breadcrumb mt-2">Home<span className="sep">›</span> Customer Support<span className="sep">›</span> Contact Us</div>
      <div className="page-box">
        <h1 className="page-heading">Contact Us</h1>

        <div style={{ background: '#f9f9f9', border: '1px solid var(--border)', borderRadius: '4px', padding: '24px' }}>
          <h2 style={{ fontFamily: 'var(--heading)', fontSize: '18px', marginBottom: '6px' }}>Contact Our Customer Support</h2>
          <p style={{ fontSize: '13px', color: '#666', marginBottom: '18px' }}>Fill in the form below and our team will get back to you within 24 hours.</p>

          <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>Online Sales &amp; Customer Support</h4>
          <p style={{ fontSize: '13px', color: '#555', marginBottom: '18px' }}>Call Us: <strong>020 78989845</strong></p>

          <div className="row mb-4 pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="col-md-6">
              <h5 style={{ fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>Retail Store Location</h5>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.9 }}>Hotub Store Loc<br />5000N, Ford Avenue<br />Newyourk, NY 20145<br />888.123.1234</p>
            </div>
            <div className="col-md-6">
              <h5 style={{ fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>Services</h5>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.9 }}>Hotub Store Loc<br />5000N, Ford Avenue<br />Newyourk, NY 20145<br />888.123.1234</p>
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--heading)', fontSize: '18px', marginBottom: '15px' }}>Contact Us</h2>
          <form onSubmit={handleSubmit} style={{ maxWidth: '490px' }}>
            <div className="label-input-row">
              <label className="form-label-hs">First name <span className="req">*</span></label>
              <input type="text" value={first} onChange={e => setFirst(e.target.value)} className="hs-input" required />
            </div>
            <div className="label-input-row">
              <label className="form-label-hs">Email <span className="req">*</span></label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="hs-input" required />
            </div>
            <div className="label-input-row">
              <label className="form-label-hs">Subject <span className="req">*</span></label>
              <input type="text" value={subject} onChange={e => setSubject(e.target.value)} className="hs-input" required />
            </div>
            <div className="label-input-row" style={{ alignItems: 'flex-start' }}>
              <label className="form-label-hs" style={{ paddingTop: '8px' }}>Your Message</label>
              <textarea value={msg} onChange={e => setMsg(e.target.value)} className="hs-input" rows="6" required></textarea>
            </div>
            <div style={{ marginLeft: '145px', marginTop: '6px' }}>
              <button type="submit" className="btn-hs btn-red">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

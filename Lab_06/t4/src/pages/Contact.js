// Contact.js - Contact Us page (route: "/contact")
// Form with Name, Email, Message + submit clears fields and shows success msg

import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  // Controlled state for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Tracks whether the form has been submitted
  const [submitted, setSubmitted] = useState(false);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page reload

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    setSubmitted(true); // Show success banner
    // Clear all fields after submit
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="page-card">
      <h1>Contact Us</h1>
      <p>Have a question or want to get in touch? Fill out the form below.</p>

      {/* Success message shown after submission */}
      {submitted && (
        <div className="success-message">
          ✅ Thank you! Your message has been sent. We will get back to you soon.
        </div>
      )}

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            rows="5"
          />
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

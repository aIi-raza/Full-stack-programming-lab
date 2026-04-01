import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = "About Us | HotSpring Portable Spas";
  }, []);

  return (
    <div className="container">
      <div className="hs-breadcrumb mt-2">Home<span className="sep">›</span> About Us</div>
      <div className="page-box">
        <h1 className="page-heading">About Us</h1>

        <div style={{ background: '#f9f9f9', border: '1px solid var(--border)', borderRadius: '4px', padding: '24px' }}>
          <h2 style={{ fontFamily: 'var(--heading)', fontSize: '19px', marginBottom: '14px' }}>Welcome to the Company</h2>
          <div className="about-top">
            <div>
              <p style={{ fontSize: '13px', lineHeight: 1.9, color: '#555', marginBottom: '12px' }}>HotSpring Portable Spas is a leading retailer of premium hot tubs and portable spa products. We have been serving customers across North America since 2001, delivering quality, comfort, and innovation to backyards everywhere.</p>
              <p style={{ fontSize: '13px', lineHeight: 1.9, color: '#555', marginBottom: '12px' }}>We carry a wide selection including TV-Stereo Spas, Corner Spas, Portable Spas, Plug-and-Play 110V Spas, and Deeper Therapy Spas. Our products are sourced from the most trusted brands: Oceanic Spa, Caldera Spas, and Island Spas by Artesian.</p>
              <p style={{ fontSize: '13px', lineHeight: 1.9, color: '#555' }}>Our knowledgeable team is available 24/7 to assist you in finding the perfect spa for your needs and budget. We offer competitive pricing, flexible payment options, and nationwide delivery.</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg,#0d3b5e,#1a6fa3)', borderRadius: '8px', minHeight: '170px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '70px', color: 'rgba(255,255,255,.8)' }}>
              ♨
            </div>
          </div>

          <div className="divider"></div>
          <h2 style={{ fontFamily: 'var(--heading)', fontSize: '19px', marginBottom: '8px' }}>Our Company Members</h2>
          <p style={{ fontSize: '13px', color: '#555', marginBottom: '18px', lineHeight: 1.8 }}>Our team brings decades of combined experience in spa retail, installation, and customer service. We are committed to making your spa ownership experience exceptional.</p>

          <div className="team-grid">
            {[
              { emoji: '👩', bg: 'linear-gradient(135deg,#667eea,#764ba2)', name: 'Jennifer Lawrence', role: 'Business Consultant', bio: 'Helping customers find the perfect spa solution since 2008.' },
              { emoji: '👨', bg: 'linear-gradient(135deg,#f093fb,#f5576c)', name: 'Michael Stevens', role: 'Business Consultant', bio: 'Expert in hot tub installation and maintenance guidance.' },
              { emoji: '👩', bg: 'linear-gradient(135deg,#4facfe,#00f2fe)', name: 'Amanda Clarke', role: 'Business Consultant', bio: 'Specializes in luxury spa configurations and custom orders.' },
              { emoji: '👩', bg: 'linear-gradient(135deg,#43e97b,#38f9d7)', name: 'Sarah Mitchell', role: 'Business Consultant', bio: 'Customer service and after-sales support specialist.' }
            ].map((t, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar" style={{ background: t.bg }}>{t.emoji}</div>
                <h6>{t.name}</h6>
                <div className="role">{t.role}</div>
                <div className="bio">{t.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

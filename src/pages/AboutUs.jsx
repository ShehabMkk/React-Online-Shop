import React from 'react';

const AboutUs = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h1 className="text-center mb-5" style={{ 
            color: 'var(--primary)',
            textShadow: '0 0 30px rgba(0, 212, 255, 0.4)'
          }}>
            About Us
          </h1>
          
          <div className="card mb-4" style={{ 
            background: 'var(--card-bg)', 
            border: '1px solid var(--card-border)',
            borderRadius: '16px',
            padding: '35px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <h3 className="mb-3" style={{ color: 'var(--primary)' }}>Welcome to Online Shop</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '16px' }}>
              We are your premier destination for quality products across multiple categories. 
              Our mission is to provide an exceptional online shopping experience with a curated 
              selection of items that meet your needs and exceed your expectations.
            </p>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-12 col-md-6">
              <div 
                className="card h-100" 
                style={{ 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--card-border)',
                  borderRadius: '16px',
                  padding: '30px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 45px rgba(0, 212, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                }}
              >
                <h4 className="mb-3" style={{ color: 'var(--primary)' }}>Our Vision</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  To become the most trusted online marketplace by offering quality products, 
                  competitive prices, and outstanding customer service. We strive to make online 
                  shopping simple, secure, and enjoyable for everyone.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div 
                className="card h-100" 
                style={{ 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--card-border)',
                  borderRadius: '16px',
                  padding: '30px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 45px rgba(0, 212, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                }}
              >
                <h4 className="mb-3" style={{ color: 'var(--primary)' }}>Our Values</h4>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '20px' }}>
                  <li className="mb-2">Quality products at competitive prices</li>
                  <li className="mb-2">Customer satisfaction is our priority</li>
                  <li className="mb-2">Fast and reliable shipping</li>
                  <li className="mb-2">Secure and easy payment options</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card" style={{ 
            background: 'var(--card-bg)', 
            border: '1px solid var(--card-border)',
            borderRadius: '16px',
            padding: '35px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <h4 className="mb-4" style={{ color: 'var(--primary)' }}>Why Choose Us?</h4>
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <div 
                  style={{ 
                    padding: '20px',
                    borderRadius: '12px',
                    background: 'rgba(0, 212, 255, 0.05)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                  }}
                >
                  <h5 style={{ color: 'var(--primary)', marginBottom: '12px' }}>Wide Selection</h5>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
                    Browse through our extensive collection of products spanning electronics, 
                    fashion, jewelry, and more.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div 
                  style={{ 
                    padding: '20px',
                    borderRadius: '12px',
                    background: 'rgba(0, 212, 255, 0.05)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                  }}
                >
                  <h5 style={{ color: 'var(--primary)', marginBottom: '12px' }}>Quality Assurance</h5>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
                    Every product is carefully selected and verified to ensure you receive 
                    only the best quality items.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div 
                  style={{ 
                    padding: '20px',
                    borderRadius: '12px',
                    background: 'rgba(0, 212, 255, 0.05)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                  }}
                >
                  <h5 style={{ color: 'var(--primary)', marginBottom: '12px' }}>Easy Returns</h5>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
                    Not satisfied? Our hassle-free return policy ensures you can shop with 
                    confidence.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div 
                  style={{ 
                    padding: '20px',
                    borderRadius: '12px',
                    background: 'rgba(0, 212, 255, 0.05)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                  }}
                >
                  <h5 style={{ color: 'var(--primary)', marginBottom: '12px' }}>24/7 Support</h5>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
                    Our dedicated customer support team is always ready to assist you with 
                    any questions or concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
              Thank you for choosing Online Shop. We look forward to serving you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

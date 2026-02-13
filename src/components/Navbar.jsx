import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = React.useState(null);

  return (
    <nav className="navbar navbar-expand-lg mb-4" style={{ 
      background: 'rgba(15, 32, 39, 0.95)', 
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 212, 255, 0.3)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
    }}>
      <div className="container">
        <Link 
          className="navbar-brand fw-bold" 
          style={{ 
            color: 'var(--primary)', 
            fontSize: '1.8rem', 
            letterSpacing: '1px',
            textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
            transition: 'all 0.3s ease'
          }} 
          to="/"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.textShadow = '0 0 30px rgba(0, 212, 255, 0.8)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.textShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
          }}
        >
          Online Shop
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link 
                className={`nav-link${location.pathname === '/' ? ' active' : ''}`} 
                style={{ 
                  color: location.pathname === '/' ? 'var(--primary)' : (hoveredLink === 'home' ? 'var(--primary)' : 'var(--text-main)'), 
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  transform: hoveredLink === 'home' ? 'translateY(-2px)' : 'translateY(0)',
                  textShadow: hoveredLink === 'home' ? '0 0 10px rgba(0, 212, 255, 0.5)' : 'none',
                  position: 'relative'
                }} 
                to="/"
                onMouseEnter={() => setHoveredLink('home')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link${location.pathname.startsWith('/products') ? ' active' : ''}`} 
                style={{ 
                  color: location.pathname.startsWith('/products') ? 'var(--primary)' : (hoveredLink === 'products' ? 'var(--primary)' : 'var(--text-main)'), 
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  transform: hoveredLink === 'products' ? 'translateY(-2px)' : 'translateY(0)',
                  textShadow: hoveredLink === 'products' ? '0 0 10px rgba(0, 212, 255, 0.5)' : 'none'
                }} 
                to="/products"
                onMouseEnter={() => setHoveredLink('products')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link${location.pathname === '/about' ? ' active' : ''}`} 
                style={{ 
                  color: location.pathname === '/about' ? 'var(--primary)' : (hoveredLink === 'about' ? 'var(--primary)' : 'var(--text-main)'), 
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  transform: hoveredLink === 'about' ? 'translateY(-2px)' : 'translateY(0)',
                  textShadow: hoveredLink === 'about' ? '0 0 10px rgba(0, 212, 255, 0.5)' : 'none'
                }} 
                to="/about"
                onMouseEnter={() => setHoveredLink('about')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
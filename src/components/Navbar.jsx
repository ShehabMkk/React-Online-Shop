import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg mb-4" style={{ background: 'rgba(34,34,59,0.85)', backdropFilter: 'blur(8px)' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" style={{ color: 'var(--primary)', fontSize: '2rem', letterSpacing: '2px' }} to="/">Online Shop</Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/' ? ' active' : ''}`} style={{ color: location.pathname === '/' ? 'var(--primary)' : 'var(--text-main)', fontWeight: 600 }} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname.startsWith('/products') ? ' active' : ''}`} style={{ color: location.pathname.startsWith('/products') ? 'var(--primary)' : 'var(--text-main)', fontWeight: 600 }} to="/products">Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
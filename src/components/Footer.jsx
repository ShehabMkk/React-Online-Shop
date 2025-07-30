import React from 'react';

const Footer = () => (
  <footer style={{ background: 'rgba(34,34,59,0.85)', backdropFilter: 'blur(8px)', borderTop: '2px solid var(--accent)' }} className="text-light py-3 mt-5">
    <div className="container text-center" style={{ fontWeight: 500, letterSpacing: '1px' }}>
      &copy; {new Date().getFullYear()} Online Shop. All rights reserved.
    </div>
  </footer>
);

export default Footer; 
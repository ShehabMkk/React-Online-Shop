import React from 'react';

const ProductCard = ({ product, onViewDetails }) => (
  <div className="card h-100 shadow-lg border-0" style={{ borderRadius: '1.5rem', border: '3px solid', borderImage: 'linear-gradient(135deg, var(--primary), var(--secondary)) 1', overflow: 'hidden', background: 'rgba(255,255,255,0.95)' }}>
    <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '200px', objectFit: 'contain', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '1.2rem 1.2rem 0 0' }} />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', minHeight: '3em' }}>{product.title}</h5>
      <p className="card-text fw-bold mb-2" style={{ color: 'var(--secondary)', fontSize: '1.2rem' }}>${product.price}</p>
      <button className="btn mt-auto" style={{ background: 'var(--accent)', color: '#22223b', fontWeight: 600, borderRadius: '0.7rem', transition: 'background 0.2s' }} onClick={() => onViewDetails(product.id)}
        onMouseOver={e => e.currentTarget.style.background = 'var(--primary)'}
        onMouseOut={e => e.currentTarget.style.background = 'var(--accent)'}>
        View Details
      </button>
    </div>
  </div>
);

export default ProductCard; 
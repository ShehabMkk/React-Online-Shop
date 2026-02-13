import React from 'react';

const ProductCard = ({ product, onViewDetails }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="card h-100" 
      style={{ 
        borderRadius: '16px', 
        border: '1px solid var(--card-border)', 
        overflow: 'hidden', 
        background: 'var(--card-bg)',
        boxShadow: isHovered ? '0 15px 45px rgba(0, 212, 255, 0.4)' : '0 8px 32px rgba(0, 0, 0, 0.3)',
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ 
        background: isHovered ? 'rgba(0, 212, 255, 0.15)' : 'rgba(0, 212, 255, 0.1)', 
        padding: '20px',
        borderBottom: '1px solid var(--card-border)',
        transition: 'all 0.4s ease'
      }}>
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.title} 
          style={{ 
            height: '200px', 
            objectFit: 'contain',
            transform: isHovered ? 'scale(1.1) rotate(2deg)' : 'scale(1) rotate(0deg)',
            transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }} 
        />
      </div>
      <div className="card-body d-flex flex-column" style={{ padding: '20px' }}>
        <h5 
          className="card-title" 
          style={{ 
            color: 'var(--text-main)', 
            fontWeight: 600, 
            fontSize: '1rem', 
            minHeight: '3em',
            marginBottom: '12px'
          }}
        >
          {product.title}
        </h5>
        <p 
          className="card-text fw-bold mb-3" 
          style={{ 
            color: 'var(--primary)', 
            fontSize: '1.4rem',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          ${product.price}
        </p>
        <button 
          className="btn mt-auto" 
          style={{ 
            background: isHovered ? 'var(--primary)' : 'rgba(0, 212, 255, 0.2)', 
            color: isHovered ? 'var(--text-dark)' : 'var(--primary)', 
            fontWeight: 600, 
            borderRadius: '10px', 
            border: '1px solid var(--primary)',
            padding: '10px',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }} 
          onClick={() => onViewDetails(product.id)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 
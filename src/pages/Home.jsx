import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div 
        className="rounded-4 shadow p-5 w-100" 
        style={{ 
          maxWidth: 800,
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          animation: 'fadeInUp 0.8s ease-out'
        }}
      >
        <h1 
          className="display-4 mb-3" 
          style={{ 
            color: 'var(--primary)',
            textShadow: '0 0 30px rgba(0, 212, 255, 0.4)',
            animation: 'fadeInDown 1s ease-out'
          }}
        >
          Welcome to Online Shop!
        </h1>
        <p className="lead mb-4" style={{ 
          color: 'var(--text-secondary)',
          animation: 'fadeIn 1.2s ease-out'
        }}>
          This is a simple React application built with Vite, Bootstrap, and Fake Store API.
        </p>
        <hr className="my-4" style={{ borderColor: 'var(--card-border)', opacity: 0.5 }} />
        <p className="mb-4" style={{ 
          color: 'var(--text-secondary)',
          animation: 'fadeIn 1.4s ease-out'
        }}>
          Browse our collection of products and learn more about React development.
        </p>
        <button 
          className="btn btn-lg" 
          style={{
            background: isButtonHovered ? 'var(--primary)' : 'rgba(0, 212, 255, 0.2)',
            color: isButtonHovered ? 'var(--text-dark)' : 'var(--primary)',
            border: '2px solid var(--primary)',
            borderRadius: '12px',
            padding: '12px 32px',
            fontWeight: 600,
            transform: isButtonHovered ? 'scale(1.1) translateY(-3px)' : 'scale(1) translateY(0)',
            boxShadow: isButtonHovered ? '0 8px 25px rgba(0, 212, 255, 0.5)' : '0 4px 12px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
          onClick={() => navigate('/products')}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          View Products
        </button>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Home; 
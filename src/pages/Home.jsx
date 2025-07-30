import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div className="bg-light rounded-4 shadow p-5 w-100" style={{ maxWidth: 800 }}>
        <h1 className="display-4 mb-3 text-primary">Welcome to Online Shop!</h1>
        <p className="lead mb-4">This is a simple React application built with Vite, Bootstrap, and Fake Store API.</p>
        <hr className="my-4" />
        <p className="mb-4">Browse our collection of products and learn more about React development.</p>
        <button className="btn btn-primary btn-lg" onClick={() => navigate('/products')}>
          View Products
        </button>
      </div>
    </div>
  );
};

export default Home; 
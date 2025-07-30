import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import Loader from '../components/Loader';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductById(id).then(data => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <div className="container">Product not found.</div>;

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row align-items-center rounded-4 shadow-lg p-4" style={{ background: 'rgba(255,255,255,0.92)', border: '3px solid', borderImage: 'linear-gradient(135deg, var(--primary), var(--secondary)) 1', minHeight: 350 }}>
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img src={product.image} alt={product.title} className="img-fluid p-3" style={{ maxHeight: '350px', objectFit: 'contain', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '1.2rem' }} />
            </div>
            <div className="col-md-7">
              <h2 className="mb-2" style={{ color: 'var(--primary)', fontWeight: 700 }}>{product.title}</h2>
              <h4 className="mb-2" style={{ color: 'var(--secondary)', fontWeight: 600 }}>${product.price}</h4>
              <span className="badge mb-3" style={{ background: 'var(--accent)', color: '#22223b', fontWeight: 600, fontSize: '1em' }}>{product.category}</span>
              <p className="mb-4" style={{ color: 'var(--text-dark)' }}>{product.description}</p>
              <div className="d-grid gap-2 my-4">
                <button className="btn btn-lg" style={{ background: 'var(--accent)', color: '#22223b', fontWeight: 600, borderRadius: '0.7rem', transition: 'background 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.background = 'var(--primary)'}
                  onMouseOut={e => e.currentTarget.style.background = 'var(--accent)'}
                  type="button">
                  Add to Cart
                </button>
                <button className="btn btn-outline-secondary btn-lg" style={{ borderRadius: '0.7rem', fontWeight: 600 }} type="button" onClick={() => navigate('/products')}>
                  Back to Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 
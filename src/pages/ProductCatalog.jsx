import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  if (loading) return <Loader />;

  return (
    <div className="container">
      <div className="mb-4">
        <h2 className="text-center mb-4" style={{ color: 'var(--primary)' }}>Product Catalog</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search products by name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '14px 24px',
                fontSize: '16px',
                borderRadius: '12px',
                border: '2px solid var(--card-border)',
                background: 'var(--card-bg)',
                color: 'var(--text-main)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
            />
          </div>
        </div>
        {searchTerm && (
          <p className="text-center mt-3" style={{ color: 'var(--text-secondary)' }}>
            Found {filteredProducts.length} product(s)
          </p>
        )}
      </div>
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <ProductCard product={product} onViewDetails={handleViewDetails} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>
              No products found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog; 
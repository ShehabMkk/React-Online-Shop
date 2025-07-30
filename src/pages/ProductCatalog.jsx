import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  if (loading) return <Loader />;

  return (
    <div className="container">
      <div className="row g-4">
        {products.map(product => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} onViewDetails={handleViewDetails} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog; 
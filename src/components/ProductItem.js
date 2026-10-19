import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center py-3 bg-transparent text-inherit border">
      <div>
        <h5 className="mb-1">{product.name}</h5>
        <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
          {product.category} 
        </p>
        <p className="mb-0 text-success fw-bold" style={{ fontSize: '0.95rem' }}>
          {product.price?.toLocaleString('vi-VN')} đ
        </p>
        <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
          {product.description} 
        </p>
      </div>
      <div>
        {/* Điều hướng trang chi tiết bằng React Router Link */}
        <Link to={`/products/${product.id}`} className="btn btn-sm btn-outline-info">
          Chi tiết
        </Link>
      </div>
    </li>
  );
}

export default ProductItem;
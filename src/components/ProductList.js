import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  if (products.length === 0) {
    return <div className="alert alert-warning text-center">Không tìm thấy sản phẩm nào!</div>;
  }

  return (
    <ul className="list-group shadow-sm">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </ul>
  );
}

export default ProductList;

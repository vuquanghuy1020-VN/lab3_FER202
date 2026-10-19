import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../datas/Product';
import ProductItem from '../components/ProductItem';

function FavoritesPage({ favorites, onToggleFavorite }) {
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Sản phẩm yêu thích của bạn ({favoriteProducts.length})</h2>
        <Link to="/" className="btn btn-outline-secondary">&larr; Về trang chủ</Link>
      </div>

      {favoriteProducts.length === 0 ? (
        <div className="alert alert-info">Bạn chưa thêm sản phẩm nào vào danh sách yêu thích!</div>
      ) : (
        <ul className="list-group">
          {favoriteProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;
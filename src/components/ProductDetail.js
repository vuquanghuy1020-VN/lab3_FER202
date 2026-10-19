import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../datas/Product';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((m) => m.id === Number(id));

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h3>Không tìm thấy sản phẩm!</h3>
        <button onClick={() => navigate('/')} className="btn btn-secondary mt-3">
          Quay lại danh sách
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: '700px' }}>
      <div className="card shadow p-4 bg-transparent text-inherit border">
        <div className="mb-3">
          <h2 className="mb-0">{product.name}</h2>
        </div>

        <p><strong>Tên:</strong> {product.name}</p>
        <p><strong>Thể loại:</strong> {product.category}</p>
        <p><strong>Giá:</strong> <span className="text-success fw-bold">{product.price?.toLocaleString('vi-VN')} đ</span></p>
        <p><strong>Mô tả:</strong> {product.description}</p>

        <div className="mt-4 d-flex gap-2">
          <button onClick={() => navigate(-1)} className="btn btn-outline-secondary">
            &larr; Quay lại trang trước (Back)
          </button>
          <button onClick={() => navigate('/')} className="btn btn-outline-primary">
            Về Trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

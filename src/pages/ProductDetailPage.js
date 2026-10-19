import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../datas/Product';

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook điều hướng bằng code logic
  const product = products.find((m) => m.id === Number(id));

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h3>Không tìm thấy sản phẩm nào!</h3>
        {/* Điều hướng về trang chủ bằng useNavigate */}
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

        {/* Các nút điều hướng sử dụng useNavigate */}
        <div className="mt-4 d-flex gap-2">
          {/* navigate(-1) giúp quay lại đúng trang trước kèm giữ nguyên bộ lọc query search/genre/sort */}
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

export default ProductDetailPage;
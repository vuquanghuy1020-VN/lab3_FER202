import React from 'react';

const CATEGORIES = ["All Categories", "Điện thoại", "Laptop", "Máy tính bảng", "Phụ kiện"];

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold">Tất cả danh mục :</label>
      <select
        className="form-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {CATEGORIES.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
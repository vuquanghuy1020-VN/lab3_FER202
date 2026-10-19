import React from 'react';

function SortRating({ sortOrder, onSortChange }) {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold">Sắp xếp theo Giá:</label>
      <select
        className="form-select"
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="default">Mặc định</option>
        <option value="high-low">Giá: Cao &rarr; Thấp</option>
        <option value="low-high">Giá: Thấp &rarr; Cao</option>
      </select>
    </div>
  );
}

export default SortRating;
import React, { useRef, useEffect } from 'react';

function SearchBar({ keyword, onSearchChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus(); // Tự động focus ô tìm kiếm
  }, []);

  return (
    <div className="mb-3">
      <label className="form-label fw-bold">Tìm tên sản phẩm:</label>
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Nhập tên sản phẩm cần tìm..."
        value={keyword}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
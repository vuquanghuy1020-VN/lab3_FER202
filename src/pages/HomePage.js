import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../datas/Product';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import SortRating from '../components/SortRating';
import ProductList from '../components/ProductList';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || 'All Categories';
  const sortOrder = searchParams.get('sort') || 'default';
  const pageFromUrl = Number(searchParams.get('page')) || 1;

  const updateParams = (changes) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(changes).forEach(([key, value]) => {
      if (!value || value === '' || value === 'All Categories' || value === 'default') {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });
    setSearchParams(newParams);
  };

  const handleKeywordChange = (newKeyword) => {
    updateParams({ keyword: newKeyword, page: 1 });
  };

  const handleCategoryChange = (newCategory) => {
    updateParams({ category: newCategory, page: 1 });
  };

  const handleSortChange = (newSort) => {
    updateParams({ sort: newSort, page: 1 });
  };

  const goToPage = (newPage) => {
    updateParams({ page: newPage });
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (keyword.trim()) {
      result = result.filter((m) =>
        m.name.toLowerCase().includes(keyword.trim().toLowerCase())
      );
    }

    if (category !== 'All Categories') {
      result = result.filter((m) => m.category === category);
    }

    if (sortOrder === 'high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'low-high') {
      result.sort((a, b) => a.price - b.price);
    }

    return result;
  }, [keyword, category, sortOrder]);

  const pageSize = 3;
  const totalPage = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const currentPage = Math.min(Math.max(1, pageFromUrl), totalPage);
  const startIndex = (currentPage - 1) * pageSize;
  const displayProducts = filteredProducts.slice(startIndex, startIndex + pageSize);

  return (
    <div className="container py-4">
      <div className="row g-3">
        <div className="col-md-4">
          <SearchBar keyword={keyword} onSearchChange={handleKeywordChange} />
        </div>
        <div className="col-md-4">
          <CategoryFilter selectedCategory={category} onCategoryChange={handleCategoryChange} />
        </div>
        <div className="col-md-4">
          <SortRating sortOrder={sortOrder} onSortChange={handleSortChange} />
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center my-3">
        <h4 className="mb-0">Danh sách sản phẩm</h4>
        <span className="badge bg-primary fs-6">
          Tổng số: {filteredProducts.length} sản phẩm (Trang {currentPage}/{totalPage})
        </span>
      </div>

      {/* Sử dụng component ProductList */}
      <ProductList
        products={displayProducts}
      />

      {/* Pagination */}
      {totalPage > 1 && (
        <nav aria-label="Page navigation" className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
              >
                &laquo; Prev
              </button>
            </li>

            {Array.from({ length: totalPage }, (_, index) => index + 1).map((pageNumber) => (
              <li
                key={pageNumber}
                className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => goToPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPage ? 'disabled' : ''}`}>
              <button
                className="page-link"
                disabled={currentPage === totalPage}
                onClick={() => goToPage(currentPage + 1)}
              >
                Next &raquo;
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HomePage;
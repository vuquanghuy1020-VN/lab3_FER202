import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-black' : 'navbar-light bg-white border-bottom'}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/"> Welcome to ProductStore</Link>
        <div className="d-flex align-items-center gap-3">
          <NavLink to="/" className={({ isActive }) => `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}>
            Home
          </NavLink>
          <button className="btn btn-sm btn-secondary" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
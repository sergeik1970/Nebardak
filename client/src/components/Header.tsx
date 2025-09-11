import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">НЕБАРДАК</h1>
        <p className="header-subtitle">дизайн интерьера</p>
      </div>
    </header>
  );
};

export default Header;
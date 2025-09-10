import React, { useState } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Логотип */}
        <div className="nav-logo">
          <img src="/images/logo.jpg" alt="Логотип" className="logo-image" />
        </div>

        {/* Меню для десктопа и планшета */}
        <div className="nav-menu">
          <a href="#" className="nav-link">Главная</a>
          <a href="#" className="nav-link">О нас</a>
          <a href="#" className="nav-link">Контакты</a>
          <a href="#" className="nav-link">Тест</a>
          <button className="nav-register-btn">Регистрация</button>
        </div>

        {/* Кнопка бургер-меню для мобильных */}
        <button 
          className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Мобильное меню */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <h2 className="mobile-menu-title">НЕБАРДАК</h2>
          <div className="mobile-menu-divider"></div>
          <a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Регистрация</a>
          <a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>О нас</a>
          <a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Тест</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
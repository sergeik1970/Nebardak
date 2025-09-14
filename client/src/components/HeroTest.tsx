import React from 'react';
import './HeroTest.css';

const HeroTest: React.FC = () => {
  const handleTestClick = () => {
    // Здесь будет логика перехода к тесту
    console.log('Переход к тесту');
  };

  const handleResultsClick = () => {
    // Здесь будет логика перехода к результатам
    console.log('Переход к результатам');
  };

  return (
    <section className="hero-test">
      <div className="hero-test-content">
        <h2 className="hero-test-title hero-test-title-mobile">Попробуй сейчас!</h2>
        
        <div className="hero-test-visual">
          <div className="hero-test-arrow"></div>
          <div className="hero-test-capsule">
            <img
              src="/images/capsule.jpg" 
              alt="Капсула с людьми за тестом"
            />
          </div>
        </div>

        <div className="hero-test-buttons">
          <h2 className="hero-test-title hero-test-title-desktop">Попробуй сейчас!</h2>
          <div className="hero-test-buttons-group">
            <button 
              className="hero-test-btn hero-test-btn-results"
              onClick={handleResultsClick}
            >
              Результаты
            </button>
            <button 
              className="hero-test-btn hero-test-btn-test"
              onClick={handleTestClick}
            >
              Тест
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTest;
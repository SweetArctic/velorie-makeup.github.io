import React from 'react';
import { ArrowDown } from 'lucide-react';
import './Sections.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="bg-pattern" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80")' }}></div>
      <div className="section-content">
        <div className="home-content">
          <h1 className="home-title">Welcome to Veloire</h1>
          <h2 className="home-subtitle">Discover Beauty, Embrace Elegance</h2>
          <p className="home-text">
            Explore our premium collection of makeup products designed to enhance your natural beauty.
            From stunning lipsticks to perfect foundations, we have everything you need to create your ideal look.
          </p>
          <div className="home-buttons">
            <a href="#products" className="btn">Explore Products</a>
          </div>
        </div>
        <div className="home-image">
          <img 
            src="https://images.unsplash.com/photo-1596704017254-9b5e3d5c0a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Makeup products" 
          />
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#products">
          <ArrowDown size={30} color="#D8829D" />
        </a>
      </div>
    </section>
  );
};

export default Home;
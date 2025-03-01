import React from 'react';
import { ArrowDown } from 'lucide-react';
import './Sections.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="bg-pattern" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80")' }}></div>
      <div className="section-content">
        <div className="about-container">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="About Veloire" 
            />
          </div>
          <div className="about-text">
            <h2 className="section-title">About Veloire</h2>
            <p>
              Founded in 2020, Veloire was born from a passion for beauty and a commitment to quality. 
              We believe that makeup should not only enhance your natural beauty but also be good for your skin.
            </p>
            <p>
              Our products are cruelty-free, made with premium ingredients, and designed to suit all skin types and tones. 
              We work with leading makeup artists and dermatologists to create formulas that deliver exceptional results.
            </p>
            <p>
              At Veloire, we're committed to sustainability. Our packaging is eco-friendly, 
              and we continuously work to reduce our environmental footprint.
            </p>
            <div className="about-values">
              <div className="value-item">
                <h3>Quality</h3>
                <p>Premium ingredients for exceptional results</p>
              </div>
              <div className="value-item">
                <h3>Inclusivity</h3>
                <p>Products for all skin types and tones</p>
              </div>
              <div className="value-item">
                <h3>Sustainability</h3>
                <p>Eco-friendly practices and packaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#contact">
          <ArrowDown size={30} color="#D8829D" />
        </a>
      </div>
    </section>
  );
};

export default About;
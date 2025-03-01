import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import './Sections.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="bg-pattern" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80")' }}></div>
      <div className="section-content">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">We'd love to hear from you</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={24} color="#D8829D" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <Mail size={24} color="#D8829D" />
              <p>info@Veloire.com</p>
            </div>
            <div className="contact-item">
              <MapPin size={24} color="#D8829D" />
              <p>123 Beauty Lane, Makeup City, MC 12345</p>
            </div>
            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">Instagram</a>
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">Twitter</a>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                className="form-control" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                className="form-control" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                className="form-control" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { useCart } from "../context/CartContext";
import SearchBar from "../components/SearchBar";
import "./Sections.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const Products: React.FC = () => {
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const products = [
    { id: 1, name: "Velvet Matte Lipstick", description: "Long-lasting matte finish", price: "$24.99", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Radiant Foundation", description: "Lightweight coverage", price: "$36.50", image: "https://images.unsplash.com/photo-1631214503851-a17ebcb2d33e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Shimmer Eyeshadow Palette", description: "12 stunning shades", price: "$42.00", image: "https://images.unsplash.com/photo-1583241475880-083f84372725?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Precision Eyeliner", description: "Waterproof formula", price: "$18.99", image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Volumizing Mascara", description: "Dramatic volume", price: "$22.50", image: "https://images.unsplash.com/photo-1631214503852-29b1c2b85d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Hydrating Primer", description: "Smooth base", price: "$28.99", image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
  ];

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    setFilteredProducts(
      query
        ? products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
          )
        : products
    );
  }, [searchQuery]);

  return (
    <section id="products" className="products-section">
      <div className="searchbar-wrapper">
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <div className="section-content">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">Discover our premium makeup collection</p>

        {filteredProducts.length === 0 ? (
          <div className="no-results">
            <p>No products found matching "{searchQuery}"</p>
          </div>
        ) : (
          <div className="grid">
            {filteredProducts.map(product => (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.name} className="card-img" />
                <div className="card-content">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.description}</p>
                  <p className="card-price">{product.price}</p>
                  <button className="btn" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="scroll-indicator">
        <a href="#about">
          <ArrowDown size={30} color="#D8829D" />
        </a>
      </div>
    </section>
  );
};

export default Products;
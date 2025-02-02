import React from 'react';
import { FaReact, FaPaintBrush, FaRocket, FaQuoteLeft, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import product1 from '../images/logo.png';
import product2 from '../images/logoo.jpg';
import product3 from '../images/fa9a71f8abc96731ad7725b3a7d8fcd3.jpg';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Elite Creative Agency</h1>
          <p>Your one-stop solution for stunning designs, branding, and marketing.</p>
          <div className="hero-buttons">
            <Link to="/shop" className="cta-button">
              <FaShoppingCart /> Shop Now
            </Link>
            <Link to="/services" className="cta-button secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src={product1} alt="Product 1" className="product-image" />
            <h3>Product 1</h3>
            <p>$20.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={product2} alt="Product 2" className="product-image" />
            <h3>Product 2</h3>
            <p>$30.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={product3} alt="Product 3" className="product-image" />
            <h3>Product 3</h3>
            <p>$25.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaReact className="service-icon" />
            <h3>Web Design</h3>
            <p>We create stunning, responsive websites tailored to your needs.</p>
          </div>
          <div className="service-card">
            <FaPaintBrush className="service-icon" />
            <h3>Branding</h3>
            <p>Build a memorable brand that stands out in the market.</p>
          </div>
          <div className="service-card">
            <FaRocket className="service-icon" />
            <h3>Marketing</h3>
            <p>Reach your target audience with our effective marketing strategies.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"Elite Creative Agency transformed our business with their amazing designs and marketing strategies!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"The team is professional, creative, and delivers on time. Highly recommended!"</p>
            <h4>- Jane Smith</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Elevate Your Business?</h2>
        <p>Join thousands of satisfied clients and take your brand to the next level.</p>
        <Link to="/contacts" className="cta-button">Contact Us</Link>
      </section>
    </div>
  );
};

export default Home;
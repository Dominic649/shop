import React from 'react';
import { FaPaintBrush, FaRocket, FaCode, FaChartLine, FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1>Unlock Your Potential with Elite Creative Agency</h1>
          <p>We provide the tools and expertise to help your business soar to new heights.</p>
          <Link to="/contacts" className="cta-button">Get Started Today</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaPaintBrush className="service-icon" />
            <h3>Branding & Design</h3>
            <p>Create a memorable brand that stands out in the market. We design logos, packaging, and more.</p>
          </div>
          <div className="service-card">
            <FaRocket className="service-icon" />
            <h3>Marketing Strategy</h3>
            <p>Reach your target audience with data-driven marketing strategies that deliver results.</p>
          </div>
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Web Development</h3>
            <p>Build stunning, responsive websites that captivate your audience and drive conversions.</p>
          </div>
          <div className="service-card">
            <FaChartLine className="service-icon" />
            <h3>Analytics & Optimization</h3>
            <p>Track performance and optimize your campaigns for maximum ROI.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
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

      {/* Motivational Quote Section */}
      <section className="motivational-quote">
        <h2>Dream Big, Achieve Bigger</h2>
        <p>"Success is not final, failure is not fatal: It is the courage to continue that counts." – Winston Churchill</p>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Take the Next Step?</h2>
        <p>Join thousands of satisfied clients and take your brand to the next level.</p>
        <Link to="/contacts" className="cta-button">Contact Us Now</Link>
      </section>
    </div>
  );
};

export default Services;
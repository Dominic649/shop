import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaStar, FaFilter, FaSun, FaMoon, FaSearch, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { products } from "./Products";  // Import the expanded product list

const Shop = ({ addToCart }) => {
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const filteredProducts = products
    .filter(
      (product) =>
        (filter === "all" || product.category === filter) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

  return (
    <div className={`shop-page ${darkMode ? "dark-mode" : ""}`}>
      {/* Dark Mode Toggle */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Hero Section */}
      <section className="shop-hero">
        <h1>Elite Designs Store</h1>
        <p>Premium Graphics, Web Development, Branding & Digital Marketing Services.</p>
      </section>

      {/* Search & Filters */}
      <div className="controls">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filters">
          <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>
            <FaFilter /> All
          </button>
          <button onClick={() => setFilter("graphic-design")} className={filter === "graphic-design" ? "active" : ""}>
            Graphic Designs
          </button>
          <button onClick={() => setFilter("web-development")} className={filter === "web-development" ? "active" : ""}>
            Web Development
          </button>
          <button onClick={() => setFilter("branding")} className={filter === "branding" ? "active" : ""}>
            Branding
          </button>
          <button onClick={() => setFilter("digital-marketing")} className={filter === "digital-marketing" ? "active" : ""}>
            Digital Marketing
          </button>
        </div>

        {/* Sorting */}
        <button className="sort-button" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          {sortOrder === "asc" ? <FaSortAmountDown /> : <FaSortAmountUp />} Sort by Price
        </button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <button
                  className="add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <div className="product-rating">
                {Array.from({ length: product.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="product-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setSelectedProduct(null)}>
              &times;
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p>${selectedProduct.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(selectedProduct)}>
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;

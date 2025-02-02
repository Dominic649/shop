import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/shop';
import Cart from './components/Cart';
import Services from './components/Services';
import Profile from './components/profile';
import ContactUs from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/footer" element={<Footer />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;

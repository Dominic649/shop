import React from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';


const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Start shopping now!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <FaPlus />
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
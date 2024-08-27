import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/SlideOutCart.scss';

const SlideOutCart = ({ isOpen, setOpen }) => {
  const { cartItems, removeItemFromCart } = useCart();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false); // Close the cart
  };

  const handleOpen = () => {
    setOpen(true); // Open the cart
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to checkout page
  };

  return (
    <>
      <div className={`slide-out-cart ${isOpen ? 'open' : 'closed'}`}>
        <div className="cart-header">
          <h2>Cart</h2>
          <button className="close-btn" onClick={handleClose} aria-label="Close cart">×</button>
        </div>
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <button className="remove-item" onClick={() => removeItemFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <p>Subtotal: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          <button 
            className="checkout-btn" 
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            CHECKOUT
          </button>
        </div>
      </div>

      {/* Floating Cart Icon */}
      {!isOpen && cartItems.length > 0 && (
        <div className="floating-cart-icon" onClick={handleOpen} aria-label="Open cart">
          <img src="/path/to/cart-icon.png" alt="Cart Icon" />
          <span className="cart-item-count">{cartItems.length}</span>
        </div>
      )}
    </>
  );
};

export default SlideOutCart;

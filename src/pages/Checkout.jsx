import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import '../styles/checkout.css';

const Checkout = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  const purchasedItems = cartItems.map(item => item.name);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handlePaymentSuccess = async (details) => {
    console.log('Transaction completed by', details.payer.name.given_name);

    try {
      console.log('Sending POST request to /api/email/send-order-confirmation');
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/email/send-order-confirmation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerDetails, purchasedItems, totalAmount })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Order confirmation sent successfully');
      navigate('/thank-you');
    } catch (error) {
      console.error('Error sending order confirmation:', error);
      setError('Failed to send order confirmation. Please try again.');
    }
  };

  return (
    <div className="checkout-page1">
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Enter Your Details</h2>
          <label>
            Name:
            <input type="text" name="name" value={customerDetails.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={customerDetails.email} onChange={handleChange} required />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={customerDetails.phone} onChange={handleChange} required />
          </label>
          <label>
            Address:
            <textarea name="address" value={customerDetails.address} onChange={handleChange} required />
          </label>
          <button type="submit">Proceed to Payment</button>
        </form>
      ) : (
        <>
          <h2>Your Cart</h2>
          <div className="cart-summary">
            <div className="cart-total">
              <h3>Total: ${totalAmount}</h3>
            </div>
          </div>

          <h2>Complete Your Purchase</h2>
          {error && <p className="error">{error}</p>}
          <div className="paypal-button-container">
            <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
              <PayPalButtons
                style={{ layout: 'vertical', color: 'blue', shape: 'rect', label: 'paypal', tagline: false }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [{
                      amount: {
                        currency_code: 'USD',
                        value: totalAmount
                      }
                    }]
                  });
                }}
                onApprove={async (data, actions) => {
                  return actions.order.capture().then(async (details) => {
                    await handlePaymentSuccess(details);
                  });
                }}
                onError={(err) => {
                  console.error('PayPal error:', err);
                  setError('An error occurred with PayPal. Please try again.');
                }}
              />
            </PayPalScriptProvider>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;

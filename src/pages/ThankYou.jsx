// src/pages/ThankYou.jsx
import React from 'react';
import '../styles/ThankYou.scss'; // Import the CSS file for styling

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <h2>Thank You for Your Purchase!</h2>
      <p>Your payment was successful, and a confirmation email with download links has been sent to you.</p>
    </div>
  );
};

export default ThankYou;

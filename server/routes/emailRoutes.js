const express = require('express');
const router = express.Router();
const { sendOrderConfirmation } = require('../../src/controllers/emailController');

// Define the route
router.post('/send-order-confirmation', sendOrderConfirmation);

module.exports = router;

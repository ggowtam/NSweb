const express = require('express');
const cors = require('cors');
const path = require('path');
const paymentRoutes = require('./routes/paymentRoutes');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/payments', paymentRoutes);
app.use('/api/email', emailRoutes); // Ensure this line is present

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any request that doesn't match the API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

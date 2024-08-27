// server/routes/paymentRoutes.js
const express = require('express');
const { sendEmail } = require('../../src/services/emailService');

const router = express.Router();

router.post('/payment-success', async (req, res) => {
  const { email, presetsPurchased } = req.body;

  // Define preset links
  const presetLinks = {
    'Awaken Preset Pack': 'https://drive.google.com/file/d/1zxcb0KWQbA9fYENQg3ucweIteghzh4yw/view?usp=sharing',
    'Regal Tones Presets': 'https://drive.google.com/file/d/14E34SZ6eGgI9ZE89DlV1nIJpmmPc-cYk/view?usp=sharing',
    'Stoic Tone Presets': 'https://drive.google.com/file/d/1U2fNlXe_bpti4mf2RqYawWrVJcycdODe/view?usp=sharing',
    'Filmic Preset Pack': 'https://drive.google.com/file/d/1ZUobd_-WefxAL6fqQBLMJkH-7WX1FZBz/view?usp=sharing',
    'Earthy Tone Presets': 'https://drive.google.com/file/d/18dYybLB8n4y6t7KXVSPXh3VaR1zcNmfJ/view?usp=sharing',
    'Soul Tones Preset Pack': 'https://drive.google.com/file/d/12tgRQJsPmqT1LrPm6PGu6hyOgjUl_yrR/view?usp=sharing'
  };

  // Construct download links based on purchased presets
  const presetLinksHtml = presetsPurchased.map(preset => {
    const link = presetLinks[preset];
    return link ? `<li><a href="${link}">${preset}</a></li>` : '';
  }).join('');

  const customerEmailHtml = `
    <p>Thank you for your purchase!</p>
    <p>You have purchased the following preset(s):</p>
    <ul>
      ${presetsPurchased.map(preset => `<li>${preset}</li>`).join('')}
    </ul>
    <p>You can download your presets using the following links:</p>
    <ul>${presetLinksHtml}</ul>
  `;

  const adminEmailHtml = `
    <p>A new purchase has been made!</p>
    <p>Customer Email: ${email}</p>
    <p>Presets Purchased:</p>
    <ul>
      ${presetsPurchased.map(preset => `<li>${preset}</li>`).join('')}
    </ul>
  `;

  try {
    // Send email to customer
    await sendEmail(
      email,
      'Your Preset Purchase',
      'Thank you for your purchase!',
      customerEmailHtml
    );

    // Send email to admin
    await sendEmail(
      'admin@yourdomain.com',
      'New Preset Purchase',
      `A new purchase has been made by ${email}`,
      adminEmailHtml
    );

    res.status(200).send('Payment success and emails sent');
  } catch (error) {
    res.status(500).send('Error in payment process or sending email');
  }
});

module.exports = router;

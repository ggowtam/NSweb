const { sendEmail } = require('../services/emailService'); // Importing sendEmail from emailService

const sendOrderConfirmation = (req, res) => {
  const { customerDetails, purchasedItems, totalAmount } = req.body;

  console.log('Received email request:', { customerDetails, purchasedItems, totalAmount });

  // Define preset download links
  const presetLinks = {
    'Awaken': 'https://drive.google.com/file/d/1zxcb0KWQbA9fYENQg3ucweIteghzh4yw/view?usp=sharing',
    'Regal Tones': 'https://drive.google.com/file/d/14E34SZ6eGgI9ZE89DlV1nIJpmmPc-cYk/view?usp=sharing',
    'Stoic Pack': 'https://drive.google.com/file/d/1U2fNlXe_bpti4mf2RqYawWrVJcycdODe/view?usp=sharing',
    'Film Pack': 'https://drive.google.com/file/d/1ZUobd_-WefxAL6fqQBLMJkH-7WX1FZBz/view?usp=sharing',
    'Earthy Tone': 'https://drive.google.com/file/d/18dYybLB8n4y6t7KXVSPXh3VaR1zcNmfJ/view?usp=sharing',
    'Soul Tone': 'https://drive.google.com/file/d/12tgRQJsPmqT1LrPm6PGu6hyOgjUl_yrR/view?usp=sharing'
  };

  // Generate plain text email content
  const presetLinksText = purchasedItems.map(preset => {
    const link = presetLinks[preset];
    return link ? `${preset}: ${link}` : '';
  }).join('\n');

  const textContent = `
    Thank you for your purchase, ${customerDetails.name}!

    You have purchased the following items:
    ${purchasedItems.join('\n')}

    Total Amount: $${totalAmount}

    You can download your presets using the following links:
    ${presetLinksText}
  `;

  // Prepare notification email content
  const notificationTextContent = `
    A new order has been placed by ${customerDetails.name}.
    Total Amount: $${totalAmount}.
    Purchased Items: ${purchasedItems.join(', ')}
  `;

  // Send email to the customer
  sendEmail(customerDetails.email, 'Order Confirmation', textContent)
    .then(() => {
      console.log('Customer email sent');

      // Send notification email
      return sendEmail('thenscreationfilms@gmail.com', 'New Order Placed', notificationTextContent);
    })
    .then(() => {
      console.log('Notification email sent');
      res.status(200).send('Order confirmation and notification sent');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    });
};

module.exports = { sendOrderConfirmation };

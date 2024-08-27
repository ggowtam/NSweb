const nodemailer = require('nodemailer');
const smtpConfig = require('./smtpConfig');

const transporter = nodemailer.createTransport(smtpConfig);

const sendOrderConfirmation = (toEmail) => {
  const mailOptions = {
    from: smtpConfig.auth.user,
    to: toEmail,
    subject: 'Order Confirmation',
    text: 'Your order has been placed successfully.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = { sendOrderConfirmation };

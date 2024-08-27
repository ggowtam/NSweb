// src/services/emailService.js
const nodemailer = require('nodemailer');
const smtpConfig = require('../../src/utils/smtpConfig');

const transporter = nodemailer.createTransport(smtpConfig);

const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: smtpConfig.auth.user,
      to,
      subject,
      text, // Use plain text here
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmail };

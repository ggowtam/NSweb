const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
dotenv.config();

console.log('SMTP_USER:', process.env.SMTP_USER);  // Log the SMTP_USER value
console.log('SMTP_PASS:', process.env.SMTP_PASS);  // Log the SMTP_PASS value

module.exports = {
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

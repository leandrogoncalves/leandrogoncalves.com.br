/**
 * SENDGRID
 */
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.API_KEY_SENDGRID);


/**
 * MAILGUN
 */
// const mailgun = require("mailgun-js");
// const DOMAIN = "sandbox9061ea8cf5024a52b1db0a5d274e6cc1.mailgun.org";
// const API_KEY_MAILGUN = process.env.API_KEY_MAILGUN;
// const transporter = mailgun({apiKey: API_KEY_MAILGUN, domain: DOMAIN});

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     host: "mail.diegopinho.com.br",
//     port: 25,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: "no-reply@diegopinho.com",
//         pass: "senhaqualquerdeteste"
//     },
//     tls: { rejectUnauthorized: false }
// });

export default sgMail;
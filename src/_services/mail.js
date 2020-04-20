const mailgun = require("mailgun-js");
const DOMAIN = "sandbox9061ea8cf5024a52b1db0a5d274e6cc1.mailgun.org";
const API_KEY = process.env.API_KEY;
const transporter = mailgun({apiKey: API_KEY, domain: DOMAIN});

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

export default transporter;
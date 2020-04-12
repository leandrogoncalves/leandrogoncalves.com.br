const mailgun = require("mailgun-js");
const DOMAIN = "sandbox9061ea8cf5024a52b1db0a5d274e6cc1.mailgun.org";
const transporter = mailgun({apiKey: "2283301a026d2ba0a6e7f9ac7a4381c6-aa4b0867-b6670067", domain: DOMAIN});

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
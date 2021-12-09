require('dotenv').config()
const nodemailer = require("nodemailer");

(async function run() {
    console.log("doge mailer is running")

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.USER_EMAIL , // generated ethereal user
          pass: process.env.USER_PASSWORD , // generated ethereal password
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_FROM, // sender address
        to: process.env.EMAIL_TO, // list of receivers
        subject: " Daily Doge Mail", // Subject line
        text: `
        yOUR daily Crypto mail
        `, // plain text body
        html: `
        <b>Your Daily Crypto Mail</b>
        `, // html body
      });
})();
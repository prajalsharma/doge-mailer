require('dotenv').config()
const fetch = require('node-fetch');
const nodemailer = require("nodemailer");

(async function run() {
    console.log("doge mailer is running")

    //Using API for fetching Crypto Price

    const url = await fetch( `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY} `)
    const pricing = await url.json();

    const coin1price = pricing.data[0].quote.USD.price;
    const percent_change_oneday = pricing.data[0].quote.USD.percent_change_24h;
    const last_updated_date = pricing.data[0].last_updated;

    const coin2price = pricing.data[1].quote.USD.price;
    const percent_change_oneday1 = pricing.data[1].quote.USD.percent_change_24h;
    
    const coin3price = pricing.data[10].quote.USD.price;
    const percent_change_oneday2 = pricing.data[10].quote.USD.percent_change_24h;
    
    const coin4price = pricing.data[12].quote.USD.price;
    const percent_change_oneday3 = pricing.data[12].quote.USD.percent_change_24h;

    // Using API to fetch GIF

    const GIF_url= await fetch ( ` https://g.tenor.com/v1/search?q=doge&key=${process.env.TENOR_API_KEY}`);
    const gif = await GIF_url.json();

    const final_GIF = gif.results[0].media[0].tinygif.url;




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
        Your Daily Crypto Mail
        `, // plain text body
        html: `
        <h1>Your Daily Crypto Mail</h1>
        <h2> Last Updated date and time of your Crypto : ${last_updated_date}</h2>
        <h2> Bitcoin <b>[BTC]</b></h2>
        <p> Price : $${coin1price} USD </p>
        <p> Percentage Change in one day :${percent_change_oneday}</p>

        <h2> Etherium <b>[ETH]</b></h2>
        <p> Price :$${coin2price} USD </p>
        <p> Percentage Change in one day : ${percent_change_oneday1}</p>
        <h2> Dogecoin <b>[DOGE]</b> </h2>
        <p> Price : $${coin3price} USD </p>
        <p> Percentage Change in one day : ${percent_change_oneday2}</p>
        <h2> Shiba Inu <b>[SHIB]</b></h2>
        <p> Price : $${coin4price} USD </p>
        <p> Percentage Change in one day : ${percent_change_oneday3}</p>

        <p> <img src="${final_GIF}"/></p>





        `, // html body
      });
})();

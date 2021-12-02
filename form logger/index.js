import express from 'express';
import cors from 'cors';
import { } from "dotenv/config";
import sgMail from "./mailService.js"

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')),


  app.post('/submit', async function (req, res, next) {
    console.log(req.body.message);
    const msg = {
      to: 'mikael.tukue@elev.ga.ntig.se',
      from: {
        email: "noreply@inosida.com",
        name: "Inosida Forms",
      }, // Use the email address or domain you verified above
      subject: 'Encrypted form message - Inosida',
      text: req.body.message,
      html: req.body.message.replace(/(?:\r\n|\r|\n)/g, '<br>'),
    };
    try {
      const response = await sgMail.send(msg);
      console.log(response.status);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    }

    res.send({ message: `${req.body.message}` });
  })

app.use('/', express.static('public'))

app.listen(8080);
console.log("App is listening on port http://localhost:8080");
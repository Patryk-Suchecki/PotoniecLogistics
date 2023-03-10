  const express = require('express');
  const bodyParser = require('body-parser');
  const nodemailer = require('nodemailer');
  
  const app = express();
  app.get('/', (req, res) => {
    
  });
  // Konfiguracja Nodemailer
  const transporter = nodemailer.createTransport({
    host: "poczta.int.pl",
    port: 465,
    auth: {
      user: "patryksuchecki@int.pl",
      pass: "suchecki00282102490"
    }
  });
  
  // Parser danych z formularza
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  // Endpoint dla wysyłania e-maila
  app.post('/send-email', (req, res) => {
    const { name, email, message, telephone, company } = req.body;

    const mailOptions = {
      from: 'patryksuchecki@int.pl',
      to: 'suchymonster@gmail.com',
      subject: `Wiadomość od ${name} (${email})`,
      text: `Wiadomość od ${name} z ${company} 
      Kontakt:
        E-mail: ${email}
        Telefon: ${telephone}
        
        Wiadmość:
        ${message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Błąd podczas wysyłania wiadomości.');
      } else {
        console.log(info);
        res.send('Wiadomość została wysłana.');
      }
    });
  });
  
  app.listen(3000, () => {
    console.log('Serwer nasłuchuje na porcie 3000');
  });
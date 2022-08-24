var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'prashant17699kumar@gmail.com',
    pass: 'uubauhkojfkqjhzs'
  }
});

var mailOptions = {
  from: 'prashant17699kumar@gmail.com',
  to: 'cython17@gmail.com', // for sending to multiple users put their email with , .
  subject: 'Sending Email using Nodemailer',
  html: '<html><body><h1>hello prashant</h1><p>This is a demo <b>mail</b> sent through <em>Nodemailer</em></p><p>Thank you!</p></body></html>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
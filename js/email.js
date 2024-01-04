var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dogangns.98@gmail.com',
    pass: '06dogan061998'
  }
});

var mailOptions = {
  from: 'dogangns.98@gmail.com',
  to: 'dogangns.98@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors')
const express = require("express")
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
var admin = require('firebase-admin');
const port = process.env.PORT || 80;
let phone;
let one;
let key;
//
 //firebase admin sdk
 const serviceAccount = require('../its-called-god-firebase-adminsdk-bpmzw-116bf1efd7.json')
 admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://its-called-god-default-rtdb.firebaseio.com'
});

//
const db = admin.firestore()
// Setting path for public directory
////const static_path = path.join('clients', "/confirm.html");
//app.use(express.static(static_path));
app.use(cors({
    orgin: "*", 
    methods: ["GET", "POST", "DELETE", "PUT"]
}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
   res.send("This is server home page.");
    /*res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Credentials', true);
   res.end()*/
 });
// Handling request
app.post("/r", (req, res) => {
res.send('hi')    
    /*res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //res.setHeader('Access-Control-Allow-Credentials', true);
*/
let key = req.body.key;
let one = req.body.name;
let phone = req.body.phone;
console.log(req.body.name)
console.log(req.body.key)
console.log(req.body.phone)
res.json.toString([{
	email_recieved: req.body.name,
  phone_number: req.body.phone,

}])

})

// Server Setup
app.listen(port, () => {
console.log(`server is running at ${port}`);
});


//gmail
"use strict";
const nodemailer = require("nodemailer");



let gmail = `${one}`
console.log(gmail)
 const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mailsendtest1299@gmail.com',
      pass: '1234567@test' // naturally, replace both with your real credentials or an application-specific password
    }
  });

  var mailOptions = {
    from: '"GlobalOperationsDepartment" <mailsendtest1299@gmail.com>',
    to: `${gmail}`,
    subject: 'G.O.D.',
    text: 'Greetings From G.O.D '+
    'G.O.D would like for you to please take a moment to visit'+
     'www.Jesus-Today.com.'
      +'G.O.D would like for you to know '
      +'your financial burdens have been placed with G.O.D’s Right Hand.'
       +'Visit now and claim your FREE account. G.O.D is here' 
       +'to help you with your financial burdens.',
       html: '<h1>Greetings From G.O.D</h1> ' +
       'G.O.D would like for you to please take a moment to visit  '+
        ' www.Jesus-Today.com.'
         +'<b>G.O.D would like for you to know</b> '
         +'your financial burdens have been placed with G.O.D’s Right Hand.'
          +'Visit now and claim your FREE account. G.O.D is here ' 
          +'to help you with your financial burdens.'
}
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});  

//twilio sms Setup

const twilio = require('twilio');
//import twilio from '/twilio';
const accountSid = 'AC59fb001037102bb22dccf4ae42693fa5';
const authToken = '08d415780b42393acda8f08930fe1ec8';

const client = twilio(accountSid, authToken);

if(key == true){
  

  let msg = 'Greetings From G.O.D'+

 
  'G.O.D would like for you to please take a moment to visit'+
   'www.Jesus-Today.com.'
    +'G.O.D would like for you to know '
    +'your financial burdens have been placed with G.O.D’s Right Hand.'
     +'Visit now and claim your FREE account. G.O.D is here' 
     'to help you with your financial burdens.',

  client.messages
  .create({
     body: msg,
     from: '+17035961890',
     to: phone
   })
  .then(function(){message => console.log(message.sid)
  })
  .catch(err => console.error(err))

}else{
  db.collection("Added Accounts").doc(`${one}`)
    .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());

    }).then(function(){

  
  client.messages
    .create({
       body: "your account have been placed by" + doc.data().Name,
       from: '+17035961890',
       to: phone
     })
    .then(function(){message => console.log(message.sid)
    })
    .catch(err => console.error(err))
})  

db.collection("Added Accounts").doc(`${one}`).collection("Dates").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
  console.log("Current data: ", doc.data());
//data.payments_1
if(doc.exists){

if(doc.data().payments == '1'){
client.messages
.create({
   body: "your payment date is"+
   'payment one:' + doc.data().payment_one
   +"Your repayment option is 25% due, 1 payment",
   from: '+17035961890',
   to: phone
 })
.then(message => console.log(message.sid)
)
.catch(err => console.error(err))
}
//two payment
else if(doc.data().payments == '6'){
  client.messages
  .create({
     body: "your payment date is"

     +'payment one:' + doc.data().payment_one
     +'payment two:' + doc.data().payment_two
     +'payment three:' + doc.data().payment_three
     +'payment four:' + doc.data().payment_four
     +'payment five:' + doc.data().payment_five
     +'payment six:' + doc.data().payment_six
     +"Your repayment option is 60% due, 6 payments",
     from: '+17035961890',
     to: phone
   })
  .then(message => console.log(message.sid)
  )
  .catch(err => console.error(err))
  }

//three payment
else if(doc.data().payments == '12(1)'){
  client.messages
  .create({
     body: "your payment dates are"

     +'payment one:' + doc.data().payment_one
     +'payment two:' + doc.data().payment_two
     +'payment three:' + doc.data().payment_three
     +'payment four:' + doc.data().payment_four
     +'payment five:' + doc.data().payment_five
     +'payment six:' + doc.data().payment_six
     +'payment seven:' + doc.data().payment_seven
     +'payment eight:' + doc.data().payment_eight
     +'payment nine:' + doc.data().payment_nine
     +'payment ten:' + doc.data().payment_ten
     +'payment eleven:' + doc.data().payment_eleven
     +'payment twelve:' + doc.data().payment_twelve
     +"Your repayment option is 75% due, 12 payments",
     from: '+17035961890',
     to: phone
   })
  .then(message => console.log(message.sid)
  )
  .catch(err => console.error(err))
  }

  else if(doc.data().payments == '12'){
    client.messages
    .create({
       body: "your payment dates are"
  
       +'payment one:' + doc.data().payment_one
       +'payment two:' + doc.data().payment_two
       +'payment three:' + doc.data().payment_three
       +'payment four:' + doc.data().payment_four
       +'payment five:' + doc.data().payment_five
       +'payment six:' + doc.data().payment_six
       +'payment seven:' + doc.data().payment_seven
       +'payment eight:' + doc.data().payment_eight
       +'payment nine:' + doc.data().payment_nine
       +'payment ten:' + doc.data().payment_ten
       +'payment eleven:' + doc.data().payment_eleven
       +'payment twelve:' + doc.data().payment_twelve
       +"Your repayment option is 100% due, 12 payments",
       from: '+17035961890',
       to: phone
     })
    .then(message => console.log(message.sid)
    )
    .catch(err => console.error(err))
    }

  }
})  
})

}





const accountSid = "ACbd348ec8a39d07c5d527695e15960287";
const authToken = "382fde2f07191a3ac3e37e1b053d6ed2" ;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hola! tu codigo es 251912 Gracias por usar la app',
     from: '+17075322687',
     to: '+595962288857'
   })
  .then(message => console.log(message.sid));
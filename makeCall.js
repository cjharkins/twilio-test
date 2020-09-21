const accountSid = process.argv[2]
const authToken = process.argv[3];
console.log({accountSid, authToken})
const client = require('twilio')(accountSid, authToken);

client.calls
  .create({
    twiml: '<Response><Say>Hello, Mason Embry, I have a message for you from Cory Harkins, What is up my dude?</Say></Response>',
    to: '+6158667272',
    from: '+16292221944'
  })
  .then(call => console.log(call.sid));

const VoiceResponse = require('twilio').twiml.VoiceResponse
const express =require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('<h1>Hey!</h1>')
})

app.get('/twiml', (req, res) => {
  const twiml = new VoiceResponse();

  twiml.say('Hello from Cory Harkins, testing a node.js application he just built!')
  res.writeHead(200, { 'Content-Type': 'text/xml'})
  res.end(twiml.toString())
})

app.listen(3000,()=>{
  console.log('The app is running on localhost:3000');
});

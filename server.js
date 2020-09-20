const VoiceResponse = require('twilio').twiml.VoiceResponse
const express =require('express');
const app = express();
const port = 1337;


app.get('/',(req,res)=>{
  res.end('Hello!')
})

app.get('/twiml', (req, res) => {
  const twiml = new VoiceResponse();

  twiml.say('Hello from Cory Harkins, testing a node.js application he just built!')
  res.writeHead(200, { 'Content-Type': 'text/xml'})
  res.end(twiml.toString())
})


app.listen(3000, () => {
  console.log('API Server Listening on port 3000')
})

const VoiceResponse = require('twilio').twiml.VoiceResponse
const express =require('express');
const app = express();
const port = 1337;


app.get('/',(req,res)=>{
  res.json({message: 'Welcome to the backend'})
})

app.get('/twiml', (req, res) => {
  const twiml = new VoiceResponse();

  twiml.say('Hello from Cory Harkins, testing a node.js application he just built!')
  res.writeHead(200, { 'Content-Type': 'text/xml'})
  res.end(twiml.toString())
})


const httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('example running on port ' + port + '.');
});

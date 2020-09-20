const http = require('http')
const VoiceResponse = require('twilio').twiml.VoiceResponse
const express =require('express');
const app = express();

http.createServer((req, res)=>{
  console.log('The app is running');
  const twiml = new VoiceResponse();

  twiml.say('Hello from Cory Harkins, testing a node.js application he just built!');

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
}).listen(process.env.PORT || 3000);

module.exports = app

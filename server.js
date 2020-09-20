const http = require('http')
const VoiceResponse = require('twilio').twiml.VoiceResponse

http.createServer((req, res) => {
  const twiml = new VoiceResponse();

  twiml.say('Hello from Cory Harkins, testing a node.js application he just built!')
  res.writeHead(200, { 'Content-Type': 'text/xml'})
  res.end(twiml.toString())
}).listen(1337, '127.0.0.1');

console.log('TwiML server running at http://127.0.0.1:1337/');

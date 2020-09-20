const sid = 'ACe0d367d73e194590e4fd26d065da99fa'
const authToken = '539d72c244d4d375796f55f692bed36a'

const client = require('twilio')(sid, authToken)

const phone = '16292221944'

client.calls.create({
  url: 'http://demo.twilio.com/docs/voice.xml',
  to: '6158667272',
  from: phone,
})

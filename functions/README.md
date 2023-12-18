##Setup
npm install -g firebase-tools
firebase login
firebase init emulators

##Test
firebase emulators:start
test with insomnia or postman - send the fabricjs json under a property called data and the endpoint will return json with a property called url

##Deploy
firebase deploy

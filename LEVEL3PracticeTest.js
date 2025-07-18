const http = require('http');
const requestHandler = require('./LEVEL3PracticeTestModules.js');

const server = http.createServer(requestHandler);

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
// Modules in JS

const http = require('http');

const userrequestHandler = require('./LEVEL3'); // Importing the requestHandler from LEVEL3Part2.js

const server = http.createServer(userrequestHandler);

server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
})
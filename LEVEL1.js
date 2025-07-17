console.log("This is LEVEL1 of Learning of Node.js");

// Require Syntax :- It is used to include external as well as in built modules in Node.js
// const moduleName = require('moduleName');

const fs = require('fs'); // File System module

// To write data to a file
/*fs.writeFile(filename, DataThatYouWantToWrite, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  }});*/

fs.writeFile('example.txt', 'Writing in the file example.txt', (err) => {

    if(err) console.error('Error while writing to file:', err);

    else console.log('Data written successfully to example.txt');
});

// REPL :- Read-Eval-Print Loop. Execute js code interactively in the terminal
// To start REPL, type `node` in the terminal and press Enter

/* First Node JS Server
const http = require('http'); // HTTP module

function requestHandler(request, response) {  // We will get request in in this
  console.log(request);
}
  
http.createServer(requestHandler);*/

const http = require('http'); // HTTP module

const server = http.createServer((request, response) => {
  console.log(request);
}); // Abhi bas server create kiya hai, request handler nahi diya hai

/*server.listen(5656);  Server will listen on port 5650. This is port number where server will run*/

// Fancy way to write the server
const PORT = 5656;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// To open local server, open browser and type `localhost:port_number` in the address bar
// In this case, it will be `localhost
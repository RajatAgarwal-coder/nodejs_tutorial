// npm - Node Package Manager. It is used to create and manage project as well as install packages.

const http = require('http');

const server = http.createServer((req, res) => {
  
    console.log(req);
    
});

server.listen(3002, () => {
  console.log('Server is running at http://localhost:3000/');
});

// npm init - It initializes a new Project and creates a package.json file.

/* Making Changinges in script section of package.json file
 "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "start": "node LEVEL5.js" // start is a special script that can be run using 'npm start' command
   "Raj_Run": "node LEVEL5.js" // It is not a supported command but can be run using 'npm run Raj_Run' command
*/

// To install a package, we can use the command: npm install <package_name>

// Installing nodemon package : Used to autoupdate the server without restarting it manually

// npm install is used to Reinstall all the packages listed in package.json file

/* using nodemon in package.json file in start script
 "scripts": {
   "start": "nodemon LEVEL5.js"
 }*/

// nodemon app.js will not run because nodemon is not installed globally.
// To run the script, we can use the command: npm start or npm run start
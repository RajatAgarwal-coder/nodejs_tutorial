const http = require('http');
const fs = require('fs');

const server = http.createServer( (request, response) => {

    // Making UI from the server is called Server Side Rendering (SSR)

    if (request.url == '/') {
        response.setHeader('Content-Type', 'text/html'); // Informing the browser that the response is plain text/html
        response.write('<html>');
        response.write('<head><title>Taking user Input</title></head>');

        response.write('<boby><h1>Enter Your Details : </h1>');
        response.write('<form action="/submited-details" method="POST">'); // Do not use same URL to give data
        response.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        response.write('<label for="male"> Male</label>');
        response.write('<input type="radio" id="male" value="male" name="gender" /><br>');  
        response.write('<label for="female"> Female</label>');
        response.write('<input type="radio" id="female" value="female" name="gender" /><br>');
        response.write('<br><input type="submit" value="Submit">');
        response.write('</form>');
        response.write('</body>');

        return response.end(); // Ending the response for Home Page. It will stop request processing here.

    } else if (request.url.toLowerCase() === '/submited-details' && request.method === 'POST') {

        // Redirecting to request URL

        fs.writeFileSync('user.txt', 'Rajat Agarwal\n'); // Creating a file to store user details

        response.statusCode = 302; // Setting status code to redirect
        response.setHeader('Location', '/'); // Redirecting to Home Page
        return response.end(); 

    }

    response.setHeader('Content-Type', 'text/html'); // Informing the browser that the response is plain text/html
    response.write('<html>');
    response.write('<head><title>Taking user Input</title></head>');
    response.write('<body><h1>Hello from Node.js Server</h1></body>');
    response.write('</html>');
    
    response.end(); // Ending the response

})

server.listen(5657, () => {
  console.log('Server is listening on port http://localhost:5657');
})

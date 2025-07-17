const http = require('http'); // File System module

const server = http.createServer((req ,response) => {
    // process.exit();  Exit the Event Loop

    console.log('URL Request:', req.url); // Port tak ke address ko URL nahi maante hai. Or Default URL is '/'

    console.log('Method Request:', req.method); // Method Request: GET - Data lene aaya , POST - Data dene aaya, PUT - Data update karne, DELETE - Data delete karne

    console.log('Headers Request:', req.headers); // BY default, the request headers are sent by the browser to the server.

    // Sending a response back to the Browser

    response.setHeader('Content-Type', 'text/html'); // Informing the browser that the response is plain text/html
    response.write('<html>');
    response.write('<head><title>Routing the Request</title></head>');

    // Routing the request based on URL

    if (req.url === '/') {

        response.write('<body><h1>Welcome to the Home Page</h1></body></html>');
        return response.end(); // Ending the response for Home Page. It will stop request processing here.

    } else if (req.url === '/products') {
        response.write('<body><h1>This is your Product Page Please Place Your Order</h1></body></html>');
        return response.end();
    }

    response.write('<body><h1>Hello from Node.js Server</h1></body>');
    response.write('</html>');
    
    response.end(); // Ending the response

    // Without using exit the next request will also get logged
    // process.exit();
});

server.listen(5656, () => {
    console.log('Server is running on port http://localhost:5656');
});


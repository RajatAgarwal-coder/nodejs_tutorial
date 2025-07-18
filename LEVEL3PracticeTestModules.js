const requestHandlersum = require('./LEVEL3PracticeTestModules2.js');

const requestHandler = (req , res) => {

    if (req.url === '/') {

        res.setHeader('Content-Type', 'text/html');

        res.write(`
            <html>
            <head>
                <title>Calculator App</title>
            </head>
            <body>
                <h1>Welcome to Calculator App</h1>
                <a href="/calculator">Go to Calculator</a>
            </body>`)

        return res.end();

    } else if (req.url.toLowerCase() === '/calculator') { 

        res.setHeader('Content-Type', 'text/html');

        res.write(`
            <html>
            <head>
                <title>Calculator App</title>
            </head>
            <body>
                <h1>Calculator Page</h1>
                <form action="/calculate-result" method="POST">
                    <input type="number" name="num1" placeholder="Enter first number" required>
                    <input type="number" name="num2" placeholder="Enter second number" required>
                    <button type="submit">Sum</button>
                </form>
            </body>`)

        return res.end();

    } else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
        return requestHandlersum(req, res); // So it cannot go through the 404 handler
    }

    res.setHeader('Content-Type', 'text/html');

        res.write(`
            <html>
            <head>
                <title>Calculator App</title>
            </head>
            <body>
                <h1>404 Page not Found</h1>
                <a href="/">Go to Home</a>
            </body>`)

        res.end();

}

module.exports = requestHandler;
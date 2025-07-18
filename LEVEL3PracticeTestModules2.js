const sumhandler = (req, res) => {

    console.log('In sum request handler');

    let body = [];

    req.on('data', chunk => {
        body.push(chunk);
    });

    req.on('end', () => {

        const fullBodydBody = Buffer.concat(body).toString();
        
        const params = new URLSearchParams(fullBodydBody);
        const bodyObject = Object.fromEntries(params.entries());
        const sum = Number(bodyObject.num1) + Number(bodyObject.num2);

        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head>
                <title>Calculator Result</title>
            </head>
            <body>
                <h1>Sum Result</h1>
                <p>The sum of ${Number(bodyObject.num1)} and ${Number(bodyObject.num2)} is ${sum}</p>
                <a href="/calculator">Go back to Calculator</a>
            </body>`)
        res.end();
    });
}

module.exports = sumhandler;
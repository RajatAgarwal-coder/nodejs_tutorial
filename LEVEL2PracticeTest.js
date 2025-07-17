const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.method, req.url);
    if (req.url === '/home') {
        res.write(`<h1>Welcome to the Home Page</h1>`);
        return res.end();
    } else if (req.url === '/man') {
        res.write(`<h1>Welcome to the Mans Wear</h1>`);
        return res.end();
    } else if (req.url === '/women') {
        res.write(`<h1>Welcome to the Women Wear</h1>`);
        return res.end();
    } else if (req.url === '/kids') {
        res.write(`<h1>Welcome to the Kids Wear</h1>`);
        return res.end();
    } else if (req.url === '/cart') {
        res.write(`<h1>Welcome to the Cart Page</h1>`);
        return res.end();
    }

    console.log(req.method, req.url);

    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>LEVEL2 Practice Set</title>
    </head>
    <body>
    
        <head>

            <nav>

                <ul>
                    <li><a href="/home"> HOME </a></li>
                    <li><a href="/man"> MAM </a></li>
                    <li><a href="/women">WOMEN </a></li>
                    <li><a href="/kids"> KIDS </a></li>
                    <li><a href="/cart"> CART </a></li>

                </ul>

            </nav>

        </head>
    
    </body>
    </html>`)
    res.end();

}



)

server.listen(3000, () => {
    console.log('Server is listening on port http://localhost:3000');
})
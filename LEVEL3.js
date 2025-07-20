// Parsing Request

const fs = require('fs'); 

const requestHandler = (req, res) => {

    console.log(req.method, req.url); // Logging the request method and URL

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Parsing Request</title>
            </head>
            <body>
            <h1>Enter Your Details:</h1>
            <form action="/submit" method="POST">
            <input type="text" name="username" placeholder="Enter your name"/><br>
            <label for="male"> Male</label>
            <input type="radio" id="male" value="male" name="gender" /><br>
            <label for="female"> Female</label>
            <input type="radio" id="female" value="female" name="gender" /><br>
            <input type="submit" value="Submit"/>
            </form>
            </body>
            </html>`);

        return res.end();
    } 

    else if (req.url === '/submit' && req.method === 'POST') {

        const body = []; // Array to hold the chunks of data
        // Reading Chunks
        req.on('data', (chunk) => { // req.on('data') is used to read the incoming data in chunks
            console.log(chunk);
            body.push(chunk); // Pushing each chunk into the body array
        })

        // Now we will put this chunks in buffer

        req.on('end', () => { // req.on('end') is used to know when all the data has been received
            const fullBody = Buffer.concat(body).toString(); // Concatenating all chunks into a single buffer and converting it to string
            console.log(fullBody); 

            // Generally arguments get encoded in the URL. To decode the URL, we can use the URLSearchParams class and convert them into key value pairs

            const parms = new URLSearchParams(fullBody); // URLSearchParams { 'username' => 'Rajat','gender'=> 'male' }

            /*const  bodyObject = {};

            for (const [key, value] of parms) { // Looping through the key  value pairs
                bodyObject[key] = value; // Adding them to the bodyObject
            }*/

            const bodyObject = Object.fromEntries(parms); // Using Object.fromEntries to convert URLSearchParams to an object Shorthand for the above loop
            console.log(bodyObject); // Logging the bodyObject to see the parsed data

            /*fs.writeFileSync('userDetails.txt', JSON.stringify(bodyObject))  Beacause it want Stringify data to write in file*/

            // By using fs.writeFileSync, bol raha hai yaha kam worker thread ko maat daalo. So we will use fs.writeFile instead of fs.writeFileSync

            fs,fs.writeFile('userDetails.txt', JSON.stringify(bodyObject), (err) => {
                console.log(err);
            });

            res.setHeader('Location', '/'); // Correct spelling 
            res.statusCode = 302; 
            res.end(); // Ending the response

        })

    }
};

module.exports = requestHandler; // Exporting the requestHandler function to be used in the server file
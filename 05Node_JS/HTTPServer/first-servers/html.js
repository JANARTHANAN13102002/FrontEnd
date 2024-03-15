const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;
let indexfile ;

    // const requestListener = function (req, res) {
    //     fs.readFile(__dirname + "/htmlFile.html")
    //     .then(contents => {
    //         res.setHeader("Content-Type", "text/html");
    //         res.writeHead(200);
    //         res.end(contents);
    //     })
    //     .catch(err => {
    //         res.writeHead(500);
    //         res.end(err);
    //         return;
    //     });
    // };  

    // const server = http.createServer(requestListener);
    // server.listen(port, host, () => {
    //     console.log(`Server is running on http://${host}:${port}`);
    // });

    const require1 = function (req,res) {
        res.setHeader("Content-Type","text/html");
        res.writeHead(200);
        res.end(indexfile);
    }

    const server = http.createServer(require1);
    fs.readFile(__dirname + "/htmlFile.html")
    .then(contents => {
        indexfile = contents;
        server.listen(port,host,() => {
            console.log(`Server is running on http://${host}:${port}`);
        })
    })
    .catch(err => {
        console.log(`Could not read index.html file: ${err}`);
        process.exit(1);
    });
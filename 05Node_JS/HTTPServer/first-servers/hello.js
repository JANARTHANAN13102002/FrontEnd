const http = require("http");
const host = 'localhost';
const port = 3000;

const request = function (req,res) {
    res.writeHead(200);
    res.end("My first server!");
}

const server = http.createServer(request);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
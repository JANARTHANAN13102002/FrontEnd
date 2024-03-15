const http = require('http');
const host = 'localhost';
const port = 8000;

const require1 = function(req,res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end("This is a  Json file");
}

const server = http.createServer(require1);
server.listen(port,host,() => {
    console.log(`Server is Running on http://${host}:${port}`);
})
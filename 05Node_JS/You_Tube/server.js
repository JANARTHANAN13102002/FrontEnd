const http = require('http')
const port = 3000;
const fs = require('fs');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    fs.readFile('index.html' , (err,data) => {
        if(err) {
            res.writeHead(404);
            res.write('Page Not Found');
        } else {
            res.write(data);
        }
        res.end();
    })
})

server.listen(port,(err) => {
    if(err) console.log(err);
    console.log(`Server is Running on http//localhost:${port}`);
})
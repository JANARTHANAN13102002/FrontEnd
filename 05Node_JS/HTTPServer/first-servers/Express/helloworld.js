const express = require('express');
const app = express();
const path = require('path')
const port = 3000;
const host = "localhost";

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname,'htmlFile.html'));
})

app.get('/index' , (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

app.get('/image', (req,res) => {
    res.sendFile(path.join(__dirname, './Image_list.jpeg'));
});



app.listen(port , host , () => {
    console.log(`Example app listening on port http://${host}:${port}`);
})
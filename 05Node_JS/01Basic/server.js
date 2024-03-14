/*

// console.log("Hello World");
// console.log(global);

const os = require('os');
const path = require('path');

console.log(os.type()); // Windows_NT
console.log(os.version());// Windows 11 Home Single Language
console.log(os.homedir());// C:\Users\JANARTHANAN B

console.log(__dirname);// C:\Users\JANARTHANAN B\Downloads\FrontEnd\05Node_JS\01Basic
console.log(__filename);// C:\Users\JANARTHANAN B\Downloads\FrontEnd\05Node_JS\01Basic\server.js 

console.log("Path"); // path
console.log(path.dirname(__filename)); // C:\Users\JANARTHANAN B\Downloads\FrontEnd\05Node_JS\01Basic
console.log(path.basename(__filename)); // server.js
console.log(path.extname(__filename)); // .js

console.log(path.parse(__dirname));
O/P --> {
            root: 'C:\\',
            dir: 'C:\\Users\\JANARTHANAN B\\Downloads\\FrontEnd\\05Node_JS',
            base: '01Basic',
            ext: '.js',
            name: '01Basic'
        }


Importing  the File

*/

// const math = require('./math')
// console.log(math.add(10,20));

const {add,sub,mul,div,mol} = require('./math')
console.log(add(10,20));
console.log(sub(100,20));
console.log(mul(10,20));
console.log(div(100,20));
console.log(mol(109,20));
const fs = require('fs');
const path = require('path')
const rs = fs.createReadStream(path.join(__dirname,'files','bigfile.txt') , {encoding : 'utf8'});
const ws = fs.createWriteStream(path.join(__dirname,'files','newbigfile.txt') );


// NO of Ways to Copy a File (rs to ws)

// Way 1 : 
    // rs.on('data' , (dataChunk) => {
    //     ws.write(dataChunk)
    // })

// Way 2 :
    // rs.pipe(ws);


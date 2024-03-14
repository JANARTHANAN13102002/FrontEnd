// const fs = require('fs');
// const path= require('path');

    // fs.readFile('./Server_and_HTTP_Response_Codes.txt',(err,data) => {
    //     if(err) throw err;
    //     console.log(data.toString());
    // })

    // fs.readFile('./Server_and_HTTP_Response_Codes.txt','utf8',(err,data) => {
    //     if(err) throw err;
    //     console.log(data);
    // })  // utf8 --> is to encode the files

    // O/p --> Content in the File


// Exit on Uncaught Errors

    // fs.readFile('./Server_and_HTP_Response_Codes.txt',(err,data) => {
    //     if(err) throw err;
    //     console.log(data.toString());
    // })
    // process.on('uncaughtException', err => {
    //     console.log(`There was an uncaught error : ${err}`);
    //     process.exit(1);
    // })

    // O/P --> There was an uncaught error : Error: ENOENT: no such file or directory, 
    //         open 'C:\Users\JANARTHANAN B\Downloads\FrontEnd\05Node_JS\01Basic\Server_and_HTP_Response_Codes.txt'



// Read File
    // fs.readFile(path.join(__dirname,'files','Server_and_HTTP_Response_Codes.txt'), 'utf8', (err,data) => {
    //     if(err) throw err;
    //     console.log(data);
    // })
    
// Write , Append, Rename the Files
    // fs.writeFile(path.join(__dirname,'files','reply.txt'), 'Good Night', (err) => {
    //     if(err) throw err;
    //     console.log('Write Complete');
        
    //     fs.appendFile(path.join(__dirname,'files','reply.txt'), '. Nice to See Use', (err) => {
    //         if(err) throw err;
    //         console.log('Updated Complete');

    //         fs.rename(path.join(__dirname,'files','reply.txt'), path.join(__dirname,'files','reply_write.txt'), (err) => {
    //             if(err) throw err;
    //             console.log('Rename Complete');
    //         })
    //     })
    // })




const fs = require('fs').promises;
const path = require('path');

const fun = async () => {
    try {
        const data = await fs.readFile(path.join(__dirname,'files','reply_write.txt'),'utf8');
        console.log(data);
    } catch(err){
        console.log(err);
    }
}

fun();
    
    
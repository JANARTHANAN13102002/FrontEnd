// console.log("Hello");
// console.log(global);

// const { log } = require('console');
// const os = require('os');
// const path = require('path');


// console.log(os.type());
// console.log(os.homedir());
// console.log(os.version());
// console.log(__dirname);
// console.log(__filename);
// console.log("----------------");
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));


// const {add,sub} = require('./math');
// console.log(add(10,20));
// console.log(sub(30,20));


// ReadFile:
// const path = require('path'); 
// const fs = require('fs');

    // Way 1 : 
        // fs.readFile('./files/start.txt' , (err,data) => {
        //     if(err) throw err;
        //     console.log(data.toString());
        // })

    // Way 2 : 
        // fs.readFile('./files/start.txt','utf8' , (err,data) => {
        //     if(err) throw err;
        //     console.log(data.toString());
        // })

    // Way 3 :
        // fs.readFile(path.join(__dirname,'files','start.txt') , 'utf8' , (err,data ) => {
        //     if(err) throw err;
        //     console.log(data);
        // } );


// WriteFile
    // fs.writeFile(path.join(__dirname,'files','end.txt') , 'This  is the End of File', (err) => {
    //     if(err) throw err;
    //     console.log("Writing Complete");
    //     fs.appendFile(path.join(__dirname,'files','end.txt') , '. Thank you', (err) => {
    //         if(err) throw err;
    //         console.log("Append Complete");
    //         fs.rename(path.join(__dirname,'files','start.txt') ,
    //         path.join(__dirname,'files','Start.txt'), (err) => {
    //             if(err) throw err;
    //             console.log("Rename Complete");
    //         });
    //     });
    // });



// Async-Await 
// -----------
    const { appendFile } = require('fs');
const path = require('path');
    const fspromise = require('fs').promises;


    const fileOps = async() => {
        try{
            
    // ReadFile
            const data = await fspromise.readFile(path.join(__dirname,'files','Start.txt') , 'utf8')
            console.log(data);

    // WriteFile
            await fspromise.writeFile(path.join(__dirname,"files",'End.txt') , 'I am Back From Server .js');
            console.log('Write Completed');

    // Append File
            await fspromise.appendFile(path.join(__dirname,'files','End.txt') , '.\n And that is it.');
            console.log("Append Completed");

    // Rename File
            await fspromise.rename(path.join(__dirname , "files" , "Start.txt") , path.join(__dirname,"files","start.txt"))
            console.log("Rename Completed");

    // Delete File
            await fspromise.unlink(path.join(__dirname,'files','End.txt'))
            console.log(`Delete Completed`);

        } catch (err) {
            console.error(err);
        }
    }

    fileOps();

// Exit on uncaught Errors
    process.on('uncaughtException' , err => {
        console.log(`There was an uncaught error : ${err}`);
        process.exit(1);
    });

const fs = require('fs');

// To Make a new Directory 
    if(!fs.existsSync('./new')) {  // existsSync --> Check the file is present or not
        fs.mkdir('./new' , (err) => {    // mkdir --> to create new Directory 
            if(err) throw err;
            console.log("Directory Created");
        })
    }

// To remove a Directory 
    if(fs.existsSync('./new')) {  // existsSync --> Check the file is present or not
        fs.rmdir('./new' , (err) => {     // rmdir --> to Remove Directory 
            if(err) throw err;
            console.log("Directory Removed");
        })
    }


// Exit on uncaught Errors
    process.on('uncaughtException' , err => {
        console.log(`There was an uncaught error : ${err}`);
        process.exit(1);
    });
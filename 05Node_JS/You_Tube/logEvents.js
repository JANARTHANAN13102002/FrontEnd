const {format} = require('date-fns');
const {v4} = require('uuid');

const fs = require('fs');
const path = require('path');
const fspromise = require('fs').promises;


const logEvents = async (message) => {
    const datetime = `${(format(new Date(),'dd-MM-yyyy\tHH:mm:ss'))}`
    const logItem = `${datetime}\t${v4()}\t${message}\n`
    console.log(logItem);

    try{
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fspromise.mkdir(path.join(__dirname, 'logs'))
        }
        await fspromise.appendFile(path.join(__dirname,'logs','eventFile.txt'), logItem);
    
    } catch (err) {
        console.log(err);
    }
}

module.exports = logEvents;



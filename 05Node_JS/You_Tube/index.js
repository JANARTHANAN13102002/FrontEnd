const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myemitter = new MyEmitter();

myemitter.on('log' , (msg) => {
    logEvents(msg);
})

myemitter.emit('log',"Log Event Emitted")
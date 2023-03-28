
require('winston-mongodb');
require('express-async-errors');

module.exports = function(){
    // process.on('uncaughtException', (ex) => {
//   console.log('Uncaught exception');
//   winston.error(ex.message,ex);
//   process.exit(1);

// })// Evenemitter when ever we didn't caught the exception we can use this to caught that .
//we need to terminate it was the best pratice;

    winston.handleExceptions(
        new winston.transport.File({
        filename: 'uncaughtExceptions.log'
        })
    );
    
    process.on('unhandledRejection', (ex) => {
        console.log('we Got an unhandled rejection');
        winston.error(ex.message,ex);
        process.exit(1);
    })
    
    winston.add(winston.transport.defaultMaxListeners, { filename: 'logfile.log'});
    winston.add(winston.transports.MongoDb, { db: 'mongodb://localhost/vidly' })
  
}
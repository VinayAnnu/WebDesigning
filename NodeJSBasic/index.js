//this is needed for importing expressJS in our application
const express = require('express')
const http = require('http')
const appConfig = require('./config/appConfig')
const fs = require('fs')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const globalErrorMiddleware = require('./middlewares/appErrorHandler')
const routeLoggerMiddleware = require('./middlewares/routeLogger')
var helmet = require('helmet')
const logger = require('./libs/loggerLib')
//declaring a instance or creating an application instance
const app = express()

//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser())

app.use(globalErrorMiddleware.globalErrorHandler)
app.use(routeLoggerMiddleware.logIp)
app.use(helmet())//for security

//bootstrap models
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function(file){
    if(~file.indexOf('.js')) require(modelsPath + '/' +file)
})
//end bootatrap model

// Bootstrap route
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function (file){
    if(~file.indexOf('.js')){
        console.log("including the following file")
        console.log(routesPath+ '/' +file)
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
});//end bootstarp route


 // calling global 404 handler after route

 app.use(globalErrorMiddleware.globalNotFoundHandler)

 // end global 404 handler


//listening the server  - creating a local server
/* app.listen(appConfig.port1, () => {
    console.log(`Example app listening on port ${appConfig.port1}!`);
    //cerating the mongoDb connection here
    let db = mongoose.connect(appConfig.db.uri,{ useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.set('useCreateIndex', true)
}) */

/**
 * Create HTTP server.
 */

const server = http.createServer(app)
// start listening to http server
console.log(appConfig)
server.listen(appConfig.port)
server.on('error', onError)
server.on('listening', onListening)

// end server listening code

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
        throw error
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10)
    let db = mongoose.connect(appConfig.db.uri, { useNewUrlParser: true, useUnifiedTopology: true  })
    mongoose.set('useCreateIndex', true)
}

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
    // application specific logging, throwing an error, or other logic here
})


//handling mongoose connection error
mongoose.connection.on('error', function (err){
    console.log('database connection error');
    console.log(err);
});//end mongoose connection error


//handling mongoose success event
mongoose.connection.on('open', function (err){
    if(err) {
        console.log('database error');
        console.log(err);
    } else {
        console.log('database connection open success');
    }
}); //end mongoose connection open handler
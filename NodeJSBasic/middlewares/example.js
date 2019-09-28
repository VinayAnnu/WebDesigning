//example middleware functioon
let exampleMiddleware = (req, res, next) => {
    req.user = {'firstName' : 'Aditya', 'lastName' : 'Raj'}
    next();
}

module.exports = {
    exampleMiddleware:exampleMiddleware
}
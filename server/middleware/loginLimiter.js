const rateLimit =  require('express-rate-limit')
const { logEvents } = require('./logger')

const loginLimiter = rateLimit({
    windowMs: 60 * 1000, // This is equal to 1 minute
    max: 5, // This will limit each IP to 5 login requests per window per minute
    message:
        { message: "Too many login attempts from this IP, please try again after 60 second wait." },
    handler: (req, res, next, options) => {
        logEvents(`Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
        res.status(options.statusCode).send(options.message)
    },

    standardHeaders: true, // To return rate limit info in the ratelimit headers
    legacyHeaders: false, // Disable the xratelimit headers
})

module.exports = loginLimiter
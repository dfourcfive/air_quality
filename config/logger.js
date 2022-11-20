const { createLogger, format, transports } = require("winston")


/**
 * a custom logger to log events/errors...
 */
const logger= createLogger({
  format: format.combine(
    format.prettyPrint(),
    format.colorize(),
    format.simple()
  ),
  transports: [new transports.Console()]
})

  
module.exports = logger;
const winston = require('winston');

const level = process.env.LOG_LEVEL || 'debug';

const _logger = new winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: level,
      timestamp: function () {
        return (new Date()).toISOString();
      }
    })
  ]
});

const logger = {
  log: (message)=> {
    _logger.log("debug", message)
  },
  info: (message)=> {
    _logger.info(message)
  },
  error:(message)=>{
    _logger.error(message)
  }
}
module.exports = logger;

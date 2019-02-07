const { createLogger, transports } = require('winston');

module.exports = buildLogger();

const logger = createLogger({
    transports: [new transports.Console()]
});

function buildLogger() {
    return {
        log(...args) {
            logger.log('log', ...args);
        },
        error(...args) {
            logger.error(...args);
        }
    };
}

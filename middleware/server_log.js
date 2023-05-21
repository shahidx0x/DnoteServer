const colors = require('colors');
const server_log = (req, res, next) => {
    console.log(`${req.method}`.gray + `${req.url}`.cyan);
    next()
}
module.exports = server_log;
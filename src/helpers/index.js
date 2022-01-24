const dbValidators = require('./dbValidators')
const fileValidators = require('./fileValidators')

module.exports = { ...dbValidators, ...fileValidators }

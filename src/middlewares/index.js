const validateFields = require('./validateFields')
const validateFiles = require('./validateFiles')

module.exports = { ...validateFields, ...validateFiles }

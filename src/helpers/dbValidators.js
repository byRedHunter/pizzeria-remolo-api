const ObjectId = require('mongoose').Types.ObjectId
const { Category } = require('../models')

const categoryExist = async (name = '') => {
	const existCategory = await Category.findOne({ name })

	if (existCategory) throw new Error(`La categoria ${name} ya ha existe`)
}

module.exports = { categoryExist }

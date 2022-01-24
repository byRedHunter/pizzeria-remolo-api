const express = require('express')
const { check } = require('express-validator')

const { createCategory } = require('../controllers/category')
const { categoryExist } = require('../helpers')
const { validateFileWhenUpload, validateFields } = require('../middlewares')

const router = express.Router()

router.post(
	'/',
	[
		// validar usuario autenticado
		check('name', 'Agregue un nombre a la categoria').not().isEmpty(),
		check('name').custom(categoryExist),
		validateFields,
		validateFileWhenUpload,
	],
	createCategory
)

module.exports = router

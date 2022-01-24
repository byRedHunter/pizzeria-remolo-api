const { response, request } = require('express')
const { cloudinary } = require('../config/cloudinary')

const { isAnImage } = require('../helpers')
const { Category } = require('../models')

const createCategory = async (req = request, res = response) => {
	const { name, description } = req.body
	const { image } = req.files

	try {
		// validate extension
		if (!isAnImage(image))
			res
				.status(400)
				.json({ msg: 'This file is not valid, only support .png .jpg .jpeg' })

		// upload to cloudinary
		const imageUploaded = await cloudinary.uploader.upload(image.tempFilePath)

		const category = new Category({
			name,
			description,
			image: imageUploaded.secure_url,
			cloudinaryId: imageUploaded.public_id,
		})

		await category.save()

		res.status(200).json(category)
	} catch (error) {
		console.log(error)
		res.status(500).json({ msg: 'Error en el servidor' })
	}
}

module.exports = { createCategory }

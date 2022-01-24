const { Schema, model } = require('mongoose')

const CategorySchema = Schema({
	name: {
		type: String,
		required: [true, 'El nombre de la categoria es obligatorio'],
		trim: true,
	},
	description: {
		type: String,
		trim: true,
	},
	image: {
		type: String,
		required: [true, 'La imágen es obligatoria'],
		trim: true,
	},
	cloudinaryId: {
		type: String,
		required: true,
		trim: true,
	},
	active: {
		type: Boolean,
		default: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		required: true,
	},
})

CategorySchema.methods.toJSON = function () {
	const { __v, _id, ...infoCategory } = this.toObject()

	infoCategory.uid = _id

	return infoCategory
}

module.exports = model('Category', CategorySchema)

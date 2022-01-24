const { response } = require('express')

const validateFileWhenUpload = (req, res = response, next) => {
	// .image ---> es el nombre del valor que viene del front
	if (!req.files || Object.keys(req.files).length === 0 || !req.files.image) {
		return res.status(400).json({
			msg: 'Asegúrese de cargar un archivo',
		})
	}

	next()
}

module.exports = {
	validateFileWhenUpload,
}

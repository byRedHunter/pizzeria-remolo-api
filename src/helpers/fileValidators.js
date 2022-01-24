const getExtensionFile = (image) => {
	const imageArray = image.name.split('.')

	return imageArray[imageArray.length - 1]
}

const isAnImage = (image) => {
	const extensionsValid = ['png', 'jpg', 'jpeg']

	const extension = getExtensionFile(image)

	if (!extensionsValid.includes(extension.toLowerCase())) return false

	return true
}

module.exports = { getExtensionFile, isAnImage }

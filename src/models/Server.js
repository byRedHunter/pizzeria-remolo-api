const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const { dbConnection } = require('../config/db')

class Server {
	constructor() {
		this.app = express()
		this.port = process.env.PORT
		this.paths = {
			category: '/api/category',
		}

		// conectar a la DB
		this.connectDB()

		// middlewares
		this.middlewares()

		// rutas de la app
		this.routes()
	}

	async connectDB() {
		await dbConnection()
	}

	middlewares() {
		this.app.use(cors())
		this.app.use(express.json())

		// file upload
		this.app.use(
			fileUpload({
				useTempFiles: true,
				tempFileDir: '/tmp/',
			})
		)
	}

	routes() {
		this.app.use(this.paths.category, require('../routes/category'))
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`SERVER RUN ON PORT ${this.port}`)
		})
	}
}

module.exports = Server

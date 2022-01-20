const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../config/db')

class Server {
	constructor() {
		this.app = express()
		this.port = process.env.PORT
		this.paths = {}

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
		// this.app.use(cors())
		this.app.use(express.json())
	}

	routes() {}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`SERVER RUN ON PORT ${this.port}`)
		})
	}
}

module.exports = Server

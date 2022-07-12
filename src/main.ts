import express from "express";
import https from "https"
import http from "http"
import path from "path";
import fs from "fs"

export const pagesFolderPath = __dirname + "/../pages"

import pages from "./pagesReader";

export const serverConfig = require('../config.json')
export const app = express()

app.set('view engine', 'pug')
app.use('/pages/',express.static(pagesFolderPath))

app.get('/',async (req,res)=>{
	res.render('root',{
		title: serverConfig.title,
		aboutPages: pages
	})
})

app.get('/*', async (req,res)=>{
	res.send('404')
})

if(serverConfig.secure){
	const config:https.ServerOptions = {
		cert: fs.readFileSync(path.normalize(`${__dirname}/../cert/cert.pem`) ) ,
		key: fs.readFileSync(path.normalize(`${__dirname}/../cert/private.pem`) ) 
	}

	try {
		const server = https.createServer(config,app)

		server.listen(serverConfig.serverPort,serverConfig.hostname,()=>{
			console.log("webpage-catalog, with HTTPS, webserver running on:",server.address())
		})

	} catch (error) {
		console.error(error)
	}
	
}
else{
	const server = http.createServer(app)

	server.listen(serverConfig.serverPort,serverConfig.hostname || "localhost",()=>{
		console.log("webpage-catalog webserver running on:",server.address())
	})
}

console.log(__dirname)
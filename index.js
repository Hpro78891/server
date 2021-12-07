const express = require("express")
const app = express()
require("dotenv").config()
var constants = require('./constant');

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.get('/get', (req, res) => {
	res.send("api working");
})

app.post("/send_mail", cors(), async (req, res) => {
	let { name,email,message,topic } = req.body
	const transport = nodemailer.createTransport({
		host: constants.MAIL_HOST,
		port: constants.MAIL_PORT,
		auth: {
			user: constants.MAIL_USER,
			pass: constants.MAIL_PASS
		}
	})
const Body=constants.MESSAGE.replace("[%name%]",name).replace("[%email%]",email).replace("[%topic%]",topic).replace("[%message%]",message);

	await transport.sendMail({
		from: constants.MAIL_FROM,
		to: constants.TO,
		subject: constants.SUBJECT,
		html: Body
	})
	res.send("email send successfully!");
})

const PORT = process.env.PORT || 4000;

app.listen(PORT,() => {console.log("Server is listening on port 4000")	});

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const PORT = 622
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({
	cookie:{
		path:'/',
		httpOnly:true,
		secure:false,
		maxAge:1*1000*60*2
	},
	name:'NODESESSIONID',
	resave:false,
	secret:'modlefairy',
	saveUninitialized:false
}))

const router = require('./node/router')
router.reflect(app)

app.listen(PORT)
console.log(`server runs at port ${PORT}`)



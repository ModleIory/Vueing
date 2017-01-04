const main = require('./main')

const router = new Object()

router.reflect = (app)=>{
	app.all('*',main.http_deal)
	app.post('/write_essay',main.write_essay)
	app.get('/get_list',main.get_list)
	app.get('/get_detail',main.get_detail)
	app.delete('/delete_essay',main.delete_essay)
}

module.exports = router
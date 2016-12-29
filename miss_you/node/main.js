const mongo = require('./mongo')
module.exports = {
	http_deal(req,res,next){
		res.set({
			"builder-msg":"modlefairy",
			"Access-Control-Allow-Methods":"POST,GET",
			"Access-Control-Max-Age":"3600",
			"Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, client_id, uuid, Authorization",
			"Access-Control-Allow-Origin":"*",
			"Access-Control-Allow-Credentials":true
		})
		next()
	},
	write_essay(req,res){
		const data = req.body
		console.log(data)
		mongo.insert({
			data:data,
			col:'essay'
		}).then((msg)=>{
			if(msg){
				res.send({code:'1',msg:'Save successfully!'})
			}
		}).catch((msg)=>{
			res.send({code:'0',msg:'Save Error!'})
		})
	},
	get_list(req,res){
		mongo.find({
			query:{},
			col:'essay',
			options:{
				
			},
			single:false
		}).then((msg)=>{
			console.log(msg)
			res.send({code:'1',data:msg})
		}).catch((msg)=>{
			res.send({code:'0',msg:'Get Error!'})
		})
	}
}
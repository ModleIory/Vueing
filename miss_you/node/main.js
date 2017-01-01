const mongo = require('./mongo')
const markdown = require('markdown')
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
		//先更改索引
		mongo.findAndModify({
			query:{essay_max_id:{$type:1}},
			col:'index',
			sort:[['essay_max_id',1]],
			change:{$inc:{essay_max_id:1}},
			options:{
				upsert:true
			}
		}).then((cur_max_index)=>{
			data.id = cur_max_index+1
			console.log('将要储存的数据是:')
			console.log(data)
			mongo.insert({
				data:data,
				col:'essay'
			}).then((msg)=>{
				if(msg){
					res.send({code:'1',msg:'Save successfully!',insert_id:msg})
				}
			}).catch((msg)=>{
				res.send({code:'0',msg:'Save Error!'})
			})
			
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
	},
	get_detail(req,res){
		const id = req.query.id
		console.log(`查询详情的id是 ${id}`)
		mongo.find({
			query:{id:parseInt(id)},
			col:'essay',
			options:{fields:{_id:0}},
			single:true
		}).then((docs)=>{
			console.log('已经查到信息,细节是:')
			const md = markdown.markdown
			docs.content = md.toHTML(docs.content)
			console.log(docs)
			res.send({code:1,msg:docs})
		}).
		catch((msg)=>{
			res.send({code:0,msg:"报错啦!"})
		})
	}
}
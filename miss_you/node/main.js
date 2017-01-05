const mongo = require('./mongo')
const markdown = require('markdown')
module.exports = {
	http_deal(req,res,next){
		res.set({
			"builder-msg":"modlefairy",
			"Access-Control-Allow-Methods":"POST,GET,DELETE,PUT",
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
			docs.origin_content = docs.content
			docs.content = md.toHTML(docs.content)
			console.log(docs)
			res.send({code:1,msg:docs})
		}).
		catch((msg)=>{
			res.send({code:0,msg:"报错啦!"})
		})
	},
	delete_essay(req,res){
		/*delete 方法发送的数据也是夹带在body里面的*/
		const data = req.body
		// console.log(`delete 传过来的数据是: `)
		// console.log(data)
		mongo.deleteOneById({
			filter:data,
			col:'essay'
		}).then((result)=>{
			console.log(result.result)
			if(result.result.ok==1){
				res.send({code:1,msg:'删除成功!'})
			}
		}).catch((err)=>{
			res.send({code:0,msg:'删除失败!'})
		})
		
	},
	update_essay(req,res){
		const data = req.body
		console.log(data)
		mongo.updateOne({
			filter:{
				id:parseInt(data.id)
			},
			col:'essay',
			change:{
				title:data.title,
				content:data.content,
				keyword:data.keyword,
				status:data.status,
				author:data.author,
				time:data.time
			},
			options:{
				upsert:true,
				w:1
			}
		}).then((docs)=>{
			res.send({code:1,msg:"更新成功哇!"})
		}).catch((err)=>{
			res.send({code:0,msg:"更新失败哇!"})
		})
	},
	get_setting(req,res){
		const position = req.query.position
		mongo.find({
			query:{},
			col:'setting',
			options:{},
			single:true
		}).then((msg)=>{
			console.log("**********************")
			console.log(msg)
			let back_data
			if(position=='header'){
				back_data = msg.logo
			}
			if(position=='foot'){
				back_data = msg.foot
			}
			res.send({code:1,msg:back_data})
		}).catch((err)=>{
			console.log(err)
			res.send({code:0,msg:"查询菜单失败!"})
		})
	}
}
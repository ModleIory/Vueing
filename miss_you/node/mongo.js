const mongodb = require('mongodb')
const mc = mongodb.MongoClient
const assert = require('assert')
const util = require('util')


const PORT = 27017
const HOST = 'localhost'
const DB = 'blog'
const url = `mongodb://${HOST}:${PORT}/${DB}`

/*insert One or insert Many  decide by obj.data is arrat or not
*@params:obj.data={}/[] Object/Array
*@params:obj.col='user' String
*/
const insert = (obj)=>{
	const p = new Promise((y,n)=>{
		mc.connect(url,(err,db)=>{
			const col = db.collection(obj.col)
			/*多个插入或者单个*/
			const flag = util.isArray(obj.data)
			/*多个,是数组*/
			if(flag){
				col.insertMany(obj.data,(err,result)=>{
					try{
						assert.ifError(err)
					}catch(e){
						console.log(`插入数据库时候报错!错误信息:\r`)
						console.log(e)
						n(false)
					}
					y(true)
					db.close()
				})
			}else{
				col.insertOne(obj.data,(err,result)=>{
					try{
						assert.ifError(err)
					}catch(e){
						console.log(`插入数据库时候报错!错误信息:\r`)
						console.log(e)
						n(false)
					}
					y(true)
					db.close()
				})
			}
		})
	})
	return p
}
// insert({data:[{name:'wuruijie',age:'22'},{name:'wuruijie',age:'22'}],col:'user'})
exports.insert = insert

/*select One or select Many as Array decide by obj.single is true or not
*@params:obj.query={} Object
*@params:obj.col=''  String
*@params:obj.options={fields:{name:1},sort:{id:1},limit:1} Object
*@params:obj.single=true||false default=false boolean
*/
const find = (obj)=>{
	const p = new Promise((y,n)=>{
		mc.connect(url,(err,db)=>{
			const col = db.collection(obj.col)
			//多查询还是单查询
			const flag = obj.single || false
			if(obj.single){
				col.findOne(obj.query,obj.options,(err,doc)=>{
					try{
						assert.ifError(err)
					}catch(e){
						console.log(`单个查询时候出错了,错误信息:\r`)
						console.log(e)
					}
					console.log(doc)
					y(doc)
				})
			}else{
				col.find(obj.query,obj.options).toArray((err,doc)=>{
					try{
						assert.ifError(err)
					}catch(e){
						console.log(`多条查询时候出错了,错误信息:\r`)
						console.log(e)
					}
					console.log(doc)
					y(doc)
				})
			}
			db.close()
		})
	})
	return p
}
//不可以
// find({query:{_id:"ObjectId('58676ec78b73331c605dc3b4')"},col:'essay',options:{fields:{}},single:true})
exports.find = find


/*for increcement of mongodb
*@params:obj.query=>which to be updated Object{}
*@params:obj.col =>the collection of mongodb String''
*@params:obj.sort =>if multiple is matched,choose these in Array[]
*@params:obj.change=>{$inc:{age:1}} or {$set:{age:1}} change happen
*@params:obj.options =>{new:true,upsert:true}
*/
const findAndModify = (obj)=>{
	const p =   new Promise((y,n)=>{
		mc.connect(url,(err,db)=>{
			const col = db.collection(obj.col)
			col.findAndModify(obj.query,obj.sort,obj.change,obj.options,(err,docs)=>{
				try{
					assert.ifError(err)
				}catch(e){
					console.log(`查询更新时候出错`)
					console.log(e)
					n(false)
				}
				console.log(docs)
				y(docs)
			})
			db.close()
		})
	})
	return p
}
/*
为了mongodb的自动递增的id,重新设立一个collection==index专门
记录mongodb其他表中自增id的最大值,每次插入时候需要查找和递增一,实现自动递增...
*/
// findAndModify({
// 	//每个其他collection的这个一定
// 	query:{'essay_max_id':{$type:1}},
// 	col:'index',
// 	//假若匹配多个,选取这个来update,在这里没有这个必要
// 	sort:[['essay_max_id',1]],
// 	//实现递增
// 	change:{$inc:{'essay_max_id':1}},
// 	//new了是重新创建一个记录,不需要,upsert就好
// 	options:{
// 		// new:true,
// 		upsert:true
// 	}
// })

exports.findAndModify = findAndModify


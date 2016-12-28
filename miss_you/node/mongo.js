const mongodb = require('mongodb')
const mc = mongodb.MongoClient
const assert = require('assert')
const util = require('util')


const PORT = 27017
const HOST = 'localhost'
const DB = 'test'
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
// find({query:{name:'wuruijie'},col:'user',options:{fields:{name:1,age:1,_id:0},limit:3},single:false})
exports.find = find


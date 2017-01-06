/*负责得到数据和处理数据*/
import * as action_type from './types-action'
import * as mutation_type from './types-mutation'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default{
	[action_type.get_list]({commit,dispatch,state},payload){
		return new Promise((resolve,reject)=>{
			Vue.http({
				url:payload.url,
				method:'get',
				emulateJSON:true,
				credientials:true,
				params:{

				},
				body:{},
				timeout:1*1000*60
			}).then((res)=>{
				// console.log(res.data.data)
				commit(mutation_type.INITIAL_LIST_CHANGE,{
					data:res.data.data
				})
				resolve(true)
			},(res)=>{
				console.error(res)
				reject(false)
			})
		})
	},
	[action_type.get_detail](context,payload){
		return new Promise((resolve,reject)=>{
			Vue.http({
				method:'get',
				params:{
					id:payload.essay_id
				},
				body:{},
				emulateJSON:true,
				credientials:true,
				// url:payload.url,
				url:"http://localhost:622/get_detail",
				timeout:1*1000*60
			}).then((res)=>{
				console.log(res.data)
				context.commit(mutation_type.DETAIL_DATA_CHANGE,{
					data:res.data.msg
				})
				resolve(true)
			},(err)=>{
				console.log(err)
				reject(false)
			})
		})
	},
	[action_type.write_essay]({commit},payload){
		return new Promise((resolve,reject)=>{
			Vue.http({
				method:'post',
				url:payload.url,
				emulateJSON:true,
				credientials:true,
				timeout:1000*1*60,
				params:{

				},
				body:payload.data
			}).then((res)=>{
				//console.log(res.data)
				resolve({
					msg:'书写成功哇!',
					insert_id:res.data.insert_id
				})
				commit(mutation_type.NEW_ESSAY_CHANGE,{
					data:res.data
				})
			},(res)=>{
				console.error(res)
				reject(false)
			})
		})
	},
	[action_type.update_essay]({commit},payload){
		return new Promise((resolve,reject)=>{
			Vue.http({
				url:payload.url,
				method:'put',
				params:{},
				body:payload.data,
				credientials:true,
				timeout:1000*60,
				emulateJSON:true
			}).then((res)=>{
				resolve(true)
			},(err)=>{
				reject(false)
				console.warn(err)
			})
		})
	},
	[action_type.delete_essay](context,payload){
		return new Promise((resolve,reject)=>{
			Vue.http({
				url:payload.url,
				method:'delete',
				params:{

				},
				body:{
					id:payload.id
				},
				credientials:true,
				timeout:1000*60,
				amulateJSON:true
			}).then((res)=>{
				//console.info(res.data)
				resolve(true)
			}).catch((err)=>{
				reject(false)
				console.log('document 69 in Detail')
			})
		})
	}
}
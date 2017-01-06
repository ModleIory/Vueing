/*仅仅负责改变数据*/
import * as mutation_type from './types-mutation'
export default{
	[mutation_type.INITIAL_LIST_CHANGE](state,payload){
		state.list = payload.data
	},
	[mutation_type.DETAIL_DATA_CHANGE](state,payload){
		state.detail_data = payload.data
	},
	[mutation_type.NEW_ESSAY_CHANGE](state,payload){
		state.new_essay = payload.data
	}
}
<style scoped>
	
</style>
<template>
	<div>
		<Logo></Logo>
		<Essay @write_essay="deal_write" :update-data="updateData" @update_essay="deal_update"></Essay>
		<Foot></Foot>
	</div>
</template>
<script>
	import Essay from "../components/Essay"
	import Logo from "../components/Logo"
	import Foot from "../components/Foot"
	import {mapState} from 'vuex'
	import * as actions from '../store/types-action'
	export default{
		data(){
			return {
				updateData:{},
				write_url:'http://localhost:622/write_essay',
				update_url:"http://localhost:622/update_essay"
			}
		},
		ready(){
			this.init_type()
		},
		components:{
			Essay:Essay,
			Logo:Logo,
			Foot:Foot
		},
		computed:{
			
		},
		methods:{
			//Judge update orsave
			init_type(){
				const id = this.$route.params.id
				if(id){
					this.updateData = this.$store.state.detail_data
				}
			},
			deal_write(data){
				console.info(data)
				this.$store.dispatch({
					type:actions.write_essay,
					url:this.write_url,
					data:data
				})
				.then((msg)=>{
					alert(msg.msg)
					this.$route.router.go({
						name:'detail',
						params:{
							id:msg.insert_id
						}
					})
				})
			},
			deal_update(data){
				console.info(data)
				this.$store.dispatch({
					type:actions.update_essay,
					data:data,
					url:this.update_url
				}).then((res)=>{
					this.$route.router.go({
						name:'detail',
						params:{
							id:data.id
						}
					})
				})
			}
		}
	}
</script>
<style scoped>
	
</style>
<template>
	<div>
		<Logo></Logo>
		<List :list-data="list"></List>
		<Foot></Foot>
	</div>
</template>
<script>
	import List from "../components/List"
	import Logo from "../components/Logo"
	import Foot from "../components/Foot"
	import * as actions from '../store/types-action'
	export default{
		data(){
			return {
				list:{},
				url:'http://localhost:622/get_list'
			}
		},
		ready(){
			this.get_list()
		},
		components:{
			List:List,
			Logo:Logo,
			Foot:Foot
		},
		methods:{
			get_list(){
				this.$store.dispatch({
					type:actions.get_list,
					url:this.url
				}).then(()=>{
					this.list = this.$store.state.list
				})
			}
		}
	}
</script>
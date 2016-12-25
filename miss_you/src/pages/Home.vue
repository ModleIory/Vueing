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
	export default{
		data(){
			return {
				list:{}
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
				this.$http.get('/src/config/list.json',{
					params:{

					},
					methods:'get',
					timeout:30
				}).then((res)=>{
					console.log(res.data)
					this.list = res.data
				})
			}
		}
	}
</script>
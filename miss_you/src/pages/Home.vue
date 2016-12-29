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
				this.$http({
					url:'http://localhost:622/get_list',
					method:'get',
					emulateJSON:true,
					credientials:true,
					params:{

					},
					body:{},
					timeout:1*1000*60
				}).then((res)=>{
					console.log(res.data.data)
					this.list = res.data.data
				},(res)=>{
					console.error(res)
				})
			}
		}
	}
</script>
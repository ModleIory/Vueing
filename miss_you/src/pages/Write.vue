<style scoped>
	
</style>
<template>
	<div>
		<Logo></Logo>
		<Essay @write_essay="deal_write"></Essay>
		<Foot></Foot>
	</div>
</template>
<script>
	import Essay from "../components/Essay"
	import Logo from "../components/Logo"
	import Foot from "../components/Foot"
	export default{
		data(){
			return {
				list:{}
			}
		},
		ready(){
		
		},
		components:{
			Essay:Essay,
			Logo:Logo,
			Foot:Foot
		},
		methods:{
			deal_write(data){
				console.info(data)
				this.$http({
					method:'post',
					url:'http://localhost:622/write_essay',
					emulateJSON:true,
					credientials:true,
					timeout:1000*1*60,
					params:{

					},
					body:data
				}).then((res)=>{
					console.log(res.data)
					alert(res.data.msg)
					// this.$route.router.go({name:''})
				},(res)=>{
					console.error(res)
				})
			}
		}
	}
</script>
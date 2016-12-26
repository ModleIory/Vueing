<style scoped>
	
</style>
<template>
	<div>
		<Logo></Logo>
		<Detail ></Detail>
		<Foot></Foot>
	</div>
</template>
<script>
	import Detail from "../components/Detail"
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
			Detail:Detail,
			Logo:Logo,
			Foot:Foot
		},
		methods:{

		}
	}
</script>
<style scoped>
	
</style>
<template>
	<div>
		<Logo></Logo>
		<Essay ></Essay>
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

		}
	}
</script>
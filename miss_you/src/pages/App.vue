<style>
	
</style>
<template>
	<div>
		<Logo></Logo>
		<router-view></router-view>
	</div>
</template>
<script>
	import Logo from '../components/Logo'
	export default{
		data(){
			return {

			}
		},
		components:{
			Logo:Logo
		}
	}
</script>
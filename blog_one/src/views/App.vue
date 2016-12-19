<style>
	
</style>
<template>
	<div>
		<Header-component></Header-component>
		<router-view></router-view>
	</div>
</template>
<script>
	import Header from '../components/Header'
	export default{
		data(){

		},
		components:{
			HeaderComponent:Header
		}
	}
</script>
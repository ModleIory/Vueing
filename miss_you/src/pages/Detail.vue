<style scoped>
	
</style>
<template>
	<div>
		<Logo></Logo>
		<Book></Book>
		<Foot></Foot>
	</div>
</template>
<script>
	import Foot from '../components/Foot'
	import Book from '../components/Book'
	import Logo from '../components/Logo'

	export default{
		data(){
			return {

			}
		},
		components:{
			Foot:Foot,
			Book:Book,
			Logo:Logo
		}
	}
</script>
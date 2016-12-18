<style>
	
</style>
<template>
	<div>
		<h2>若是有什么能够阻挡我,那就是死亡?!?! for {{love}}</h2>
		<button @click="show">wow</button>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				love:'中一家'
			}
		},
		methods:{
			show(){
				this.love = 'hahha'
			}
		}
	}
</script>
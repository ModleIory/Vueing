<style scoped>
	p{
		color:white;
		width:100%;height:100%;
		text-align:center;
		font-size:25px;font-weight:bolder;
	}
	p a{
		color:red;font-weight:red;
	}
</style>
<template>
	<div>
		<p>
			Welcome to the book store
		</p>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				status:true
			}
		}
	}
</script>
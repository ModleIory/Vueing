<style scoped>
	h1{
		width:100%;height: auto;
		font-size:30px;font-weight: bolder;
		text-align: center;
	}
</style>
<template>
	<div>
		<h1>欢迎来到小博客</h1>
		<ul>
			<li>
				<a v-link=""></a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				nav:[]	
			}
		},
		ready(){
			this.getNav()
		},
		methods:{
			getNav(){
				this.$http.get('/src/config/api.json',{
					method:'get',
					header:'x-www-modle:hahah',
					params:{
						time:Date.now()
					}
				}).then((res)=>{
					console.log(res)
				})
			}
		}
	}
</script>
<style scoped>
	footer{
		width:100%;
		height: 150px;
		background: ##b1b1b1;
		color:black;
		opacity: 0.4;
	}
	ul{
		list-style: none;
		width:100%;height: 100%;
		display: flex;
		flex-direction:column;
		justify-content:space-around;
	}
	ul li{
		text-align: center;
		font-weight: bold;
	}
</style>
<template>
	<footer>
		<ul>
			<li>Tel:{{foot.tel}}</li>
			<li>Addr:{{foot.addr}}</li>
			<li>Email:{{foot.email}}</li>
			<li>QQ:{{foot.qq}}</li>
			<li>auth:{{foot.auth}}</li>
		</ul>
	</footer>
</template>
<script>
	export default{
		data(){
			return {
				foot:{
					"tel":"",
					"addr":"",
					"email":"",
					"qq":"",
					"auth":""
				}
			}
		},
		ready(){
			this.get_footer()
		},
		methods:{
			get_footer(){
				this.$http.get('/src/config/foot.json',{
					params:{

					},
					timeout:20
				}).then((res)=>{
					//console.info(res.data)
					this.foot = res.data
				})
			}
		}
	}
</script>
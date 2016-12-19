<style scoped>
	h1{
		width:100%;height: auto;
		font-size:30px;font-weight: bolder;
		text-align: center;
		color:pink;
	}
	ul{
		list-style: none;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-around;
		align-content: center;
	}
	a{
		color: white;
		text-decoration: none;
		font-weight: bolder;
	}
	a:hover{
		color: yellow;
		font-size:18px;
	}
</style>
<template>
	<div>
		<h1>欢迎来到小博客</h1>
		<ul>
			<template v-for="x in nav">
				<li>
					<a v-link="{path:'operation/'+x.link}">{{x.title}}</a>
				</li>
			</template>
		</ul>
		<router-view ></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return{
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
					params:{
						time:Date.now()
					}
				}).then((res)=>{
					// console.info(res.data)
					const obj = res.data
					this.nav = this.nav.concat(res.data.menu)
				})
			}
		}
	}
</script>
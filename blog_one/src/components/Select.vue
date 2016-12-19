<style scoped>
	.main{
		width:100%;height: auto;
		color:white;
	}
	a{
		color:white;
		font-size:20px;
	}
</style>
<template>
	<div class="main">
		<h1>欢迎来到文章页面 <a v-link="{path:'/operation'}">返回</a></h1>
		<hr>
		<strong >{{article.title}}</strong>
		<h2>{{article.keywords}}--{{article.author}}--{{article.time}}</h2>
		<article>{{article.content}}</article>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				article:{}
			}
		},
		ready(){
			this.getArticle()
		},
		methods:{
			getArticle(){
				this.$http.get('/src/config/api.json',{
					methods:'get',
					params:{
						wanna:'backForHer'
					}
				}).then((res)=>{
					console.info(res.data.list[0])
					const obj = res.data.list[0]
					/*object 可以直接等于的嘞*/
					this.article = obj
				})
			}
		}
	}
</script>

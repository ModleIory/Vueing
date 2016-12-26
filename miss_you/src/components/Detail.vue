<style scoped>
	#preview{
		background: white;
	}
</style>
<template>	
    	<!--这里渲染不出来fuck why,,,>因为我html里面加载库的顺序不对,index.bundle.js最后加载-->
    	<textarea id="markdown"></textarea>
</template>
<script>
	import md from 'markdown'
	export default{
		data(){
			return {

			}
		},
		ready(){
			// console.warn('ready')
			this.init_editor()
		},
		compiled(){
			//这里总是比ready先要执行?!
			// console.log('compiled')
		},
		methods:{
			init_editor(){
				/*从index进来,资源加载好了,可以有,但是直接进这个,资源没有加载好,不可以有!*/
				//根本是空的,用这种start和map的router,放屁,看看老子字母都输入错误了
				//一秒跳转,it works
				// setTimeout(()=>{
				// 	this.$route.router.go({name:'home'})
				// },1000)
				console.info(this.$route)
				// console.log(SimpleMDE)
				const simplemde = new SimpleMDE({
					element:document.getElementById('markdown')
				})
				
			}
		}
	}
</script>
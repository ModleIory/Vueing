<style>
	
</style>
<!--template就相当于这个component属性的template了-->
<template>
	<div>
		<Top-show></Top-show>
		<h1>阿西吧,我是入口组件,也是首页</h1>
		<router-view></router-view>
		<!--这里的链接比较不一样-->
		<a v-link="{path:'test'}">test</a>
		<a v-link="{path:'begin'}">begin</a>

	</div>
</template>
<script>
	import Vue from 'vue'
	import Top from './top'
	/*这里还必须这么写!*/
	export default {
		/*这样就注册了组件了哈?!,每个vue文件实际上是一个组件*/
		components:{
			TopShow:Top
		}
	}
</script>
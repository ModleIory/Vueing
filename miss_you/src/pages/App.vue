<!--组件必须组合,成一个页面,路由是路由页面不是fucking的组件不需要交互的属性,不用提出来,需要组件之间交互的,需要特殊处理,页面处理,不在compoents处理-->
<style>
	
</style>
<template>
	<div>
		<router-view></router-view>
	</div>
</template>
<script>
	import Logo from '../components/Logo'
	export default{
		data(){
			return {

			}
		}
	}
</script>
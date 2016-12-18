<style scoped>
	#love{font-weight: bolder;color:red;}
</style>
<template>
	<div>
		<strong>this is the show of first</strong>
		<hr>
		<strong id='love'>我爱钟亚姬</strong>
		<ul>
			<li v-for="x in list">{{x.name}} 哈哈  {{x.sex}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				list:[
					{name:"modle",sex:'male'},
					{name:"fairy",sex:'female'}
				]
			}
		}
	}
	// export default test
</script>

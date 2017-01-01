<style scoped>
	.modle_container{
		min-height: 700px;
	}
	.statement{
		text-align: center;
	}
</style>
<template>
	<div class="container modle_container">
		<div class="page-header statement">
			<h2>{{detailData.title}}</h2>
		</div>
		<div class="page-header statement">
			<strong>{{detailData.time}}</strong>
			<strong style="margin-left:20px">{{detailData.author}}</strong>
			<br>
			<h5>{{detailData.keyword}}<span class="label label-success">{{detailData.status}}</span></h5>
		</div>
		<p>
		{{{detailData.content}}}
		</p>
	</div>
</template>
<script>
	export default{
		props:['detailData']
	}
</script>
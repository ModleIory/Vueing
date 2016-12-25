<style scoped>
	.panel_modle{

	}
	.panel_modle:hover{
		cursor:pointer;
	}
	.modle_container{
		min-height:600px;
	}
</style>
<template>
	<div class="container modle_container">
		<div 
			class="panel panel-default panel_modle" 
			:class="{'panel-success':panel_success}" 
			v-on:mouseenter="change_color(true,$event)"
			@mouseleave="change_color(false,$event)" 
			v-for="x in listData.list"
		>
			<div class="panel-heading" :data-id="x.id">
				<strong>{{x.title}}<strong>
				<strong style='float:right'>{{x.time}}</strong>
			</div>
			<div class="panel-body">
				<p>{{x.statement}}</ p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				panel_success:false
			}
		},
		props:['listData'],
		methods:{
			change_color(flag,e){
				console.info(e.target)
				this.panel_success = flag?true:false
			}
		}
	}

</script>
<style scoped>
	.panel_modle{

	}
	.panel_modle:hover{
		cursor:pointer;
	}
</style>
<template>
	<div class="container">
		<div 
			class="panel panel-default panel_modle" 
			:class="{'panel-success':panel_success}" 
			v-on:mouseenter="change_color(true)"
			@mouseleave="change_color(false)"
		>
			<div class="panel-heading">Panel heading</div>
			<div class="panel-body">
				<p>...</p>
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
		props:[],
		methods:{
			change_color(flag){
				this.panel_success = flag?true:false
			}
		}
	}

</script>
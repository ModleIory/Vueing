<style scoped>
	.panel_modle{

	}
	.panel_modle:hover{
		cursor:pointer;
	}
	[class="panel-heading"]{
		transition: font-size 0.4s ease;
	}
	.panel_modle:hover [class="panel-heading"]{
		font-size:18px;
	}
	.modle_container{
		min-height:730px;
	}
	.modle_label{
		float: right;
	}
</style>
<template>
	<div class="container modle_container">
		<div 
			class="panel panel-default panel_modle" 
			v-for="x in listData" 
			@click="toDetail(x._id)"
		>
			<div class="panel-heading" :data-id="x._id">
				<strong>{{x.title}}<strong>
				<strong style='float:right'>{{x.time}}</strong>
			</div>
			<div class="panel-body">
				{{x.statement}}
				<span 
					class="label modle_label" 
					:class="{'label-success':x.status=='special'?true:false,'label-warning':x.status=='special'?false:true}" >
					{{x.status}}
				</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		props:['listData'],
		methods:{
			toDetail(id){
				this.$route.router.go({
					name:'detail',
					params:{
						id:id
					}
				})
			}
		}
	}

</script>
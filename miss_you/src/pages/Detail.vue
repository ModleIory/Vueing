<style scoped>
	
</style>
<template>
	<div>
		<Logo></Logo>
		<Book 
			:detail-data="detail_data" 
			@do_delete="deal_delete" 
			@do_update='deal_update'
		>
		</Book>
		<Foot></Foot>
	</div>
</template>
<script>
	import Foot from '../components/Foot'
	import Book from '../components/Book'
	import Logo from '../components/Logo'
	import * as actions from '../store/types-action'

	export default{
		data(){
			return {
				detail_data:{},
				url:"http://localhost:622/get_detail",
				delete_url:'http://localhost:622/delete_essay'
			}
		},
		ready(){
			this.getDetailData()
		},
		methods:{
			getDetailData(){
				this.$store.dispatch({
					type:actions.get_detail,
					essay_id:this.$route.params.id,
					url:this.url
				})
				.then(()=>{
					this.detail_data = this.$store.state.detail_data
				})
			},
			deal_delete(id){
				// alert('haha'+id.id)
				this.$store.dispatch({
					type:actions.delete_essay,
					url:this.delete_url,
					id:id.id
				}).then((msg)=>{
					alert('已经删除了!')
					this.$route.router.go({
						name:"home",
						params:{

						}
					})
				})
			},
			deal_update(id){
				// alert('haha'+id.id)
				this.$route.router.go({
					name:'update',
					params:{
						id:id.id
					}
				})
			}
		},
		components:{
			Foot:Foot,
			Book:Book,
			Logo:Logo
		}
	}
</script>
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

	export default{
		data(){
			return {
				detail_data:{}
			}
		},
		ready(){
			this.getDetailData()
		},
		methods:{
			getDetailData(){
				const essay_id = this.$route.params.id
				// alert(essay_id)
				this.$http({
					method:'get',
					params:{
						id:essay_id
					},
					body:{},
					emulateJSON:true,
					credientials:true,
					url:"http://localhost:622/get_detail",
					timeout:1*1000*60
				}).then((res)=>{
					//console.log(res.data)
					this.detail_data=res.data.msg

				},(err)=>{
					console.log(err)
				})
			},
			deal_delete(id){
				// alert('haha'+id.id)
				this.$http({
					url:'http://localhost:622/delete_essay',
					method:'delete',
					params:{

					},
					body:{
						id:id.id
					},
					credientials:true,
					timeout:1000*60,
					amulateJSON:true
				}).then((res)=>{
					//console.info(res.data)
					if(res.data.code==1){
						alert(res.data.msg)
						this.$route.router.go({
							name:"home",
							params:{

							}
						})
					}
				}).catch((err)=>{
					console.log('document 69 in Detail')
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
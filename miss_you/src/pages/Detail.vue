<style scoped>
	
</style>
<template>
	<div>
		<Logo></Logo>
		<Book :detail-data="detail_data"></Book>
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
					console.log(res.data)
					this.detail_data=res.data.msg

				},(err)=>{
					console.log(err)
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
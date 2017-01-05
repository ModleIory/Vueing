<style scoped>
	
</style>
<template>
	<div>
		<Logo></Logo>
		<Essay @write_essay="deal_write" :update-data="updateData" @update_essay="deal_update"></Essay>
		<Foot></Foot>
	</div>
</template>
<script>
	import Essay from "../components/Essay"
	import Logo from "../components/Logo"
	import Foot from "../components/Foot"
	export default{
		data(){
			return {
				updateData:{}
			}
		},
		ready(){
			this.init_type()
		},
		components:{
			Essay:Essay,
			Logo:Logo,
			Foot:Foot
		},
		methods:{
			//Judge update orsave
			init_type(){
				const id = this.$route.params.id
				if(id){
					this.$http({
						url:'http://localhost:622/get_detail',
						method:'get',
						params:{
							id:id
						},
						body:{

						},
						emulateJSON:true,
						timeout:1000*60,
						credientials:true
					}).then((res)=>{	
						//console.log(res.data.msg)
						this.updateData = res.data.msg
					}).catch((err)=>{
						console.error(err)
					})
				}
			},
			deal_write(data){
				console.info(data)
				this.$http({
					method:'post',
					url:'http://localhost:622/write_essay',
					emulateJSON:true,
					credientials:true,
					timeout:1000*1*60,
					params:{

					},
					body:data
				}).then((res)=>{
					//console.log(res.data)
					alert(res.data.msg)
					this.$route.router.go({
						name:'detail',
						params:{
							id:res.data.insert_id
						}
					})
				},(res)=>{
					console.error(res)
				})
			},
			deal_update(data){
				console.info(data)
				this.$http({
					url:"http://localhost:622/update_essay",
					method:'put',
					params:{},
					body:data,
					credientials:true,
					timeout:1000*60,
					emulateJSON:true
				}).then((res)=>{
					//console.info(res.data)
					if(res.data.code==1){
						alert(res.data.msg)
						this.$route.router.go({
							name:'detail',
							params:{
								id:data.id
							}
						})
					}
				},(err)=>{
					console.warn(err)
				})
			}
		}
	}
</script>
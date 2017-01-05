<style scoped>
	#markdown{

	}
	.container{
		min-height:730px;
	}
	#checkbox{
		position: relative;
		top:2px;
	}
</style>
<template>	
		<!--这里渲染不出来fuck why,,,>因为我html里面加载库的顺序不对,index.bundle.js最后加载-->
	<div class="container">
		<h2>{{operation}} your Article</h2>
		<form role="form">
			<div class="form-group">
				<label for="essay_type">Special</label>
				<input type="checkbox" id="checkbox" v-model="type"  @click='setStatus'>
			</div>
			<div class="form-group">
				<label for="essay_title">Essay Title</label>
				<input type="text" 
					class="form-control" 
					id="essay_title" 
					placeholder="Please input you essay title" 
					v-model="title" 
					:value="updateData.title?updateData.title:''"
				>
			</div>
			<div class="form-group">
				<label for="essay_keywords">Essay Keywords</label>
				<input type="text" 
					class="form-control" 
					id="essay_keywords" 
					placeholder="Please input you essay Keywords" 
					v-model="keyword"
					:value="updateData.keyword?updateData.keyword:''"
				>
			</div>
		</form>
		<textarea id="markdown"></textarea>
		<p style="text-align: center;">
			<button class="btn btn-lg btn-success" type="button" @click="write(operation)">{{operation}}</button>
			<button class="btn btn-lg btn-danger" type="button" @click="abort">abort</button>
		</p>
	</div>
</template>
<script>
	import md from 'markdown'
	export default{
		data(){
			return {
				type:"",
				title:"",
				keyword:"",
				operation:"",
				simplemde:'',
				content:''
			}
		},
		props:['updateData'],
		ready(){
			// console.warn('ready')
			this.init_editor()
		},
		compiled(){
			//这里总是比ready先要执行?!
			// console.log('compiled')
		},
		computed:{
		/*里面可以用this.props*/
			operation(){
				return this.$route.name
			},
			/*data随着props改变==>不可,这样type这个值就不会变了,死都是this.props.type*/
			/*computed里面的东西仅仅只关联return的东西,要更新她,更新return而非type,无法*/
			type(){
				if(this.$route.name == 'update'){
					try{
						/*点击simplemde会一直输出这个但是并没有变化啊*/
						console.log(this.simplemde)
						/*这个回填之后有问题,不可编辑了,变成了span块儿*/
						this.simplemde.value(this.updateData.origin_content)
					}catch(e){
						console.log(e)
					}
					return this.updateData.status=='special'?true:false
				}
				return ""
			}
		},
		methods:{
			abort(){
				this.$route.router.go({
					name:'detail',
					params:{
						id:this.updateData.id
					}
				})
			},
			/*点击选择框时候触发下*/
			setStatus(){
				this.updateData.status = this.updateData.status=='special'?'normal':'special'
			},
		/*里面可以用this.props*/
			write(operation){
				if(operation=='write'){
					const write_data = {
						time:this.getTime(),
						author:"modle",
						title:this.title,
						keyword:this.keyword,
						status:this.type?'special':'normal',
						content:this.simplemde.value()
					}
					//console.warn(write_data)
					this.$emit('write_essay',write_data)
				}else{
					const update_data = {
						time:this.getTime(),
						author:'modle',
						title:this.title,
						keyword:this.keyword,
						status:this.type?'special':'normal',
						/*这个我暂时没有办法修改*/
						content:this.updateData.origin_content,
						id:this.updateData.id
					}
					//console.warn(update_data)
					this.$emit('update_essay',update_data)
				}
			},
			getTime(){
				const cur = new Date()
				const year = cur.getFullYear()
				const month = cur.getMonth()
				const day = cur.getDate()
				const hour = cur.getHours()
				const minute  = cur.getMinutes()
				return `${year}-${month+1}-${day} ${hour}:${minute}`
			},
			init_editor(){
				/*从index进来,资源加载好了,可以有,但是直接进这个,资源没有加载好,不可以有!*/
				//根本是空的,用这种start和map的router,放屁,看看老子字母都输入错误了
				//一秒跳转,it works
				// setTimeout(()=>{
				// 	this.$route.router.go({name:'home'})
				// },1000)
				// console.info(this.$route.name)
				// console.log(SimpleMDE)
				this.simplemde = new SimpleMDE({
					element:document.getElementById('markdown'),
					autofocus:false,
					autosave:true,
					placeholder:'You content here ......',
					toolbar:[
						'heading-bigger','italic','heading','heading-smaller','bold','|',
						'strikethrough','code','unordered-list','ordered-list','quote','|',
						'clean-block','link','image','table','horizontal-rule','preview','side-by-side','|',
						'fullscreen','guide'
					]

				})
				// console.warn(this.simplemde.value())
				const router = this.$route
				if(router.params.id){

				}
				
			}
		}
	}
</script>
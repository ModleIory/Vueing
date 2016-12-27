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
		<h2>Post your Article</h2>
		<form role="form">
			<div class="form-group">
				<label for="essay_type">Specail</label>
				<input type="checkbox" id="checkbox">
			</div>
			<div class="form-group">
				<label for="essay_title">Essay Title</label>
				<input type="text" class="form-control" id="essay_title" placeholder="Please input you essay title">
			</div>
			<div class="form-group">
				<label for="essay_keywords">Essay Keywords</label>
				<input type="text" class="form-control" id="essay_keywords" placeholder="Please input you essay Keywords">
			</div>
		</form>
		<textarea id="markdown"></textarea>
		<p style="text-align: center;">
			<button class="btn btn-lg btn-success">Save</button>
			<button class="btn btn-lg btn-danger">Clear</button>
		</p>
	</div>
</template>
<script>
	import md from 'markdown'
	export default{
		data(){
			return {

			}
		},
		ready(){
			// console.warn('ready')
			this.init_editor()
		},
		compiled(){
			//这里总是比ready先要执行?!
			// console.log('compiled')
		},
		methods:{
			init_editor(){
				/*从index进来,资源加载好了,可以有,但是直接进这个,资源没有加载好,不可以有!*/
				//根本是空的,用这种start和map的router,放屁,看看老子字母都输入错误了
				//一秒跳转,it works
				// setTimeout(()=>{
				// 	this.$route.router.go({name:'home'})
				// },1000)
				// console.info(this.$route)
				// console.log(SimpleMDE)
				const simplemde = new SimpleMDE({
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
				// console.warn(simplemde.value())
				const router = this.$route
				if(router.params.id){
					
				}else{
					
				}
				
			}
		}
	}
</script>
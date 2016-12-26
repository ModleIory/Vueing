<style scoped>
	#preview{
		background: white;
	}
</style>
<template>
	<textarea id="text-input" oninput="this.editor.update()" rows="6" cols="60">Type **Markdown** here.</textarea>
    	<div id="preview" > </div>
    	<!--这里渲染不出来fuck why?-->
    	<textarea id="markdown"></textarea>
</template>
<script>
	import md from 'markdown'
	export default{
		data(){
			return {

			}
		},
		ready(){
			console.warn('ready')
			this.editor()
		},
		compiled(){
			//这里总是比ready先要执行?!
			console.log('compiled')
			// this.init_editor()
		},
		methods:{
			editor(){
				 function Editor(input, preview) {
				        this.update = function () {
				          preview.innerHTML = md.markdown.toHTML(input.value);
				        };
				        input.editor = this;
				        this.update();
				      }
				      var $ = function (id) { return document.getElementById(id); };
				      new Editor($("text-input"), $("preview"));
			},
			init_editor(){
				/*从index进来,资源加载好了,可以有,但是直接进这个,资源没有加载好,不可以有!*/
				// console.log(SimpleMDE)
				
			}
		}
	}
</script>
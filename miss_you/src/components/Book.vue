<style scoped>
	@font-face{
		font-family: lishu;
		src:url(/assets/font/LISHU.TTF);
	}
	.modle_container{
		min-height: 700px;
	}
	.statement{
		text-align: center;
	}
	#show_area{
		box-sizing:border-box;
		padding: 15px;
		color:black;
	}
	[type="radio"]{
		position: relative;
		top:2px;
	}
	.font_size{
		width:15px;height: 15px;
		text-align: center;
		line-height: 10px;
		position: relative;
	}
</style>
<template>
	<div class="container modle_container">
		<div class="page-header statement">
			<h2>{{detailData.title}}</h2>
		</div>
		<div class="page-header statement">
			<strong>{{detailData.time}}</strong>
			<strong style="margin-left:20px">{{detailData.author}}</strong>
			<br>
			<h5>{{detailData.keyword}} &emsp;&emsp;<span class="label label-success">{{detailData.status}}</span></h5>
		</div>
		<p>
			<strong>font-style</strong>
			&nbsp;常规&nbsp;<input type="radio" v-model="font_style" name="style" value="微软雅黑">
			&nbsp;隶书&nbsp;<input type="radio" v-model="font_style" name="style" value="lishu">
			&emsp;&emsp;&emsp;
			<strong>background</strong>
			&nbsp;浅灰&nbsp;<input type="radio" v-model="font_color"  name="color" value="#efefef">
			&nbsp;浅绿&nbsp;<input type="radio" v-model="font_color"  name="color" value="#e8ffe8">
			&nbsp;浅红&nbsp;<input type="radio" v-model="font_color"  name="color" value="rgb(251,241,241)">
			&emsp;&emsp;&emsp;
			<strong>font-size</strong>
			&nbsp;<button class='font_size' @click="size('add')">+</button>
			&nbsp;<button class='font_size' @click="size('reduce')">-</button>
		</p>
		<hr>
		<p id='show_area' :style="text_style">
		{{{detailData.content}}}
		</p>
		<p style="text-align: center">
			<button type="button" class="btn btn-lg btn-success" @click="update_essay(detailData.id)">update</button>
			<button type="button" class="btn btn-lg btn-danger" @click="delete_essay(detailData.id)" >delete</button>
		</p>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				text_style:{
					background:"#efefef",
					fontFamily:'微软雅黑',
					fontSize:"16px",
					lineHeight:"32px"
				},
				font_style:'微软雅黑',
				font_color:'#efefef',
				font_size:16,
				line_height:32
			}
		},
		ready(){
		},
		computed:{
			text_style(){
				return {
					background:this.font_color,
					fontFamily:this.font_style,
					fontSize:this.font_size+'px',
					lineHeight:this.line_height+'px'
				}
			}
		},
		methods:{
			size(type){
				console.log(type)
				if(type=='add'){
					this.font_size++
					this.line_height+=2
				}else{
					this.font_size--
					this.line_height-=2
				}
			},
			delete_essay(id){
				//console.log(id)
				//$emit只能是个对象我擦,不然触发不了!
				//还有,取名字,我取名doDelete居然没办法触发fuck
				this.$emit('do_delete',{id:id})
			},
			update_essay(id){
				this.$emit('do_update',{id:id})
			}
		},
		props:['detailData']
	}
</script>
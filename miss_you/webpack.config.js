const webpack = require('webpack')
const path = require('path')

const ROOT = __dirname
const SRC = path.resolve(ROOT,'src')
const entry_file = 'index.js'
const build_path = 'dest'

module.exports = {
	entry:{
		index:path.resolve(SRC,entry_file)
	},
	output:{
		path:path.resolve(ROOT,build_path),
		// publicPath:'assets',
		filename:'[name].bundle.js'
	},
	devServer:{
		port:9090,
		contentBase:'./',
		color:true,
		quiet:false
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:"babel"
			},
			{
				test:/\.css$/,
				loader:"style!css!autoprefixer?{browsers:['last 100 versions']}"
			},
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test:/\.(png|jpg|jpeg|gif)$/,
				loader:`url?limit=${1024*100}`
			},
			/*寡人不是很清楚这个file的作用*/
			{
				test:/\.(png|jpg|jpeg|gif|mp4|mp3)$/,
				loader:"file"
				// loader:"file?name=[hash].[ext]"
			},
			/*这种设定的时候,需要时候也是重新在引入,不好,引入的方式还比较怪,和一般引入貌似没什么区别? import $ from "expose?$!jquery"*/
			{
				test:require.resolve('jquery'),
				loader:"expose?jQuery!expose?$j"
			}
		]
	},
	resolve:{
		extensions:['','.css','.js','.vue'],
		alias:{
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	plugins:[
		new webpack.ProvidePlugin({
			$j: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	],
	//这里在socket.io时候有效果,变个$j就不行沃日,或许io和window的一样,用的是window的,这里用$也可以呀,可以个屁,简直不能用,只能entry component用,搞不成!
	externals:{
		// 失败导出$j,index.html引入这个,里面根本不需要加这个子组件也能访问,只是网络慢,直接刷新子组件的话有时候可能出不来
		// SimpleMDE:'window.SimpleMDE'
	}
}
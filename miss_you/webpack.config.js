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
		filename:'[name].bundle.js',
		publicPath:'assets'
	},
	devServer:{
		port:9999,
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
				test:/\.(png|jpg|jpeg|gif)?/,
				loader:`url?limit=${1024*10}`
			},
			{
				test:/\.(png|jpg|jpeg|gif|mp4|mp3)?/,
				loader:"file?name=[hash].[ext]"
			}
		]
	},
	resolve:{
		extensions:['','.css','.js','.vue'],
		alias:{
			'vue$': 'vue/dist/vue.common.js'
		}
	}
}
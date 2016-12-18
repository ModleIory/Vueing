const webpack = require('webpack')
const path = require('path')

const root = __dirname
const source = path.resolve(root,'src')

module.exports = {
	entry:{
		index:path.resolve(source,'index.js')
	},
	output:{
		path:path.resolve(root,'dest'),
		filename:'[name].bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:"babel",
				exclude:path.resolve(root,'node_modules')
			},
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test:/.\css$/,
				loader:"style!css!autoprefixer?{browsers:['last 100 versions']}"
			}
		]
	},
	devServer:{
		port:8888,
		progress:true,
		contentBase:'./'

	},
	resolve:{
		extensions:['','.js','.css','.vue'],
		alias:{
			'vue$': 'vue/dist/vue.common.js'
		}
	}
}

const webpack = require('webpack')
const path = require('path')

const root = __dirname

module.exports = {
	entry:{
		index:path.resolve(root,'src/index.js')
	},
	output:{
		path:path.resolve(root,'dest'),
		filename:'[name].bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel'
			},
			{
				test:/\.vue$/,
				loader:'vue'
			}
		]
	},
	devServer:{
		contentBase:'./',
		color:true,
		port:8888
	},
	resolve:{
		extensions:['','.js','.css','.vue'],
		alias:{
			'vue$':'vue/dest/vue.common.js'
		}
	}
}

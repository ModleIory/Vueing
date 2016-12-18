import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from './components/test.vue'
import App from './components/App.vue'

Vue.config.debug = true

Vue.use(VueRouter)

const router = new VueRouter({
	history:true
})
const begin = {
	template:'<h1>hello world</h1>'
}
router.map({
	// url输入地址还不管用,惦记了才有用这么神奇
	'/test':{
		/*name还要小写才行,在a标签的  v-link='{path:'test'}'*/
		name:'test',
		component:Test
	},
	'/begin':{
		name:'begin',
		component:begin
	}
})

/*App入口组件中才有router-view,这里还必须这么搞我日,只能先记得这种,以前的都有些乱了*/
router.start(App,'#app')



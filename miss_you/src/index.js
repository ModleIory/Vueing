import Vue from 'vue'
import Router from 'vue-router'
import resource from 'vue-resource'
import App from './pages/App'
import Home from './pages/Home'
import Write from './pages/Write'
import Detail from './pages/Detail'

Vue.use(Router)
Vue.use(resource)

const router = new Router({
	mode:'hash'
})

const test = {
	template:"<h1>this is test</h1>"
}
//用这种方法,router文档里面的各种不管用?!===>管用的,是我傻逼
router.map({
	'/':{
		name:'home',
		component:Home
	},
	'/update/:id':{
		name:'update',
		component:Write
	},
	'/write':{
		name:'write',
		component:Write
	},
	'/detail/:id':{
		name:'detail',
		component:Detail
	}
})

router.redirect({
	'*':'/'
})

/*钩子,可以写在各个组件内部,作为属性*/
// router.beforeEach((to, from, next) => {
// 	console.warn(from)
// 	console.warn(to)
// 	to.next()
// })

router.start(App,'#app')



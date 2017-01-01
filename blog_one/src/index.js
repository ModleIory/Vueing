import Vue from 'vue'
import Router from 'vue-router'
import Source from 'vue-resource'
import App from './views/App'
import Header from './components/Header'
import Guide from './components/Guide'
import Select from './components/Select'


Vue.use(Router)
Vue.use(Source)

/*这里和ichat里面是两种不同的构造方式略奇怪*/
const router = new Router({
	/*这里设定这个使得刷新url也能找到*/
	mode:'hash'
})

router.map({
	'/operation':{
		name:'operation',
		component:Header
	},
	/*这种方式的子组件这么写,连路由命名都不用么,就是Header下面的那个<router-view>,直接这里这么搞?*/
	'/operation/select':{
		name:'select',
		component:Select
	},
	'/guide':{
		name:"guide",
		component:Guide
	}
})

/*'*'是除了上述规定的,我要专精这种状况*/
router.redirect({
	'*':'/guide'
})

router.start(App,'#app')
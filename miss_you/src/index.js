import Vue from 'vue'
import Router from 'vue-router'
import resource from 'vue-resource'
import App from './pages/App'
import $ from 'jquery'

Vue.use(Router)
Vue.use(resource)

const router = new Router({
	mode:'hash'
})

const test = {
	template:"<h1>this is test</h1>"
}
router.map({
	'/':{
		name:'index',
		component:test
	}
})

router.redirect({
	'*':'/'
})

router.start(App,'#app')



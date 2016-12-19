import Vue from 'vue'
import Router from 'vue-router'
import Source from 'vue-resource'
import App from './views/App'

Vue.use(Router)
Vue.use(Source)

const router = new Router({
	history:true
})

const test = {
	template:"<h1>I am test</h1>"
}

router.map({
	'/test':{
		name:'test',
		component:test
	}
})

router.start(App,'#app')
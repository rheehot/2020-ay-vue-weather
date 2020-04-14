import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Daily from '../views/Daily.vue'
import Weekly from '../views/Weekly.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/daily',
		name: 'Daily',
		component: Daily
	},
	{
		path: '/weekly',
		name: 'Weekly',
		component: Weekly
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

// 시작페이지 지정
router.beforeEach((to, from, next) => {
	console.log(to);
	console.log(from);
	to.name !== "Home" && !from.name ? next({path: "/"}) : next();
});

export default router

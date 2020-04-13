import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 전역으로 사용할 js module은 여기서 import 한다.
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// 전역으로 사용되는 css는 여기서 import 한다.
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

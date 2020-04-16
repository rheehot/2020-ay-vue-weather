import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 전역변수 선언
		city: [],
		daily: {},
		weekly: {},
	},
	getters, // 전역변수 가져오기
	mutations, // 전역변수 변화 감지
	actions, // 전역변수 변경
})

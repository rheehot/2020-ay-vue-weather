import { axCity, axDaily, axWeekly } from '../api'

export default {
	ACT_CITY({ commit }) {
		commit('MUT_CITY', axCity())
	},
	async ACT_DAILY({ commit }, city) {
		// 통신로직
		console.log(	await axDaily(city)	);
		commit('MUT_DAILY')
	}
}


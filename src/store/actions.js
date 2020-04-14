import { axCity, axDaily, axWeekly } from '../api'

export default {
	ACT_CITY({ commit }) {
		commit('MUT_CITY', axCity())
	},
	async ACT_DAILY({ commit }, city) {
		const { data } = await axDaily(city);
		console.log('----- Daily -----');
		console.log(data);
		console.log('----- Daily -----');
		commit('MUT_DAILY', data);
	}
}


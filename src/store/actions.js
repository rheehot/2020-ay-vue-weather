import { axCity, axWeather } from '../api'

export default {
	ACT_CITY({ commit }) {
		commit('MUT_CITY', axCity())
	},
	async ACT_WEATHER({ commit }, city) {
		const { daily, weekly } = await axWeather(city);
		
		/* Daily */
		console.log('----- Daily -----');
		console.log(daily);
		console.log('----- Daily -----');

		/* Weekly */
		console.log('----- Weekly -----');
		console.log(weekly);
		console.log('----- Weekly -----');

		commit('MUT_DAILY', daily);
		commit('MUT_WEEKLY', weekly);
	},
}


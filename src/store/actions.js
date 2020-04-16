import { axCity, axWeather, ICON_URL } from '../api'

export default {
	ACT_CITY({ commit }) {
		commit('MUT_CITY', axCity())
	},
	async ACT_WEATHER({ commit }, city) {
		const { daily, weekly } = await axWeather(city);
		
		/* Daily */
		daily.weather[0].icon = ICON_URL + daily.weather[0].icon + "@2x.png";
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


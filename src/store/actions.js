import { axCity, axDaily, axWeekly, geoCoords, ICON_URL } from '../api'

export default {
	ACT_CITY({ commit }) {
		commit('MUT_CITY', axCity())
	},
	async ACT_DAILY({ commit }, city) {
		const { data } = await axDaily(city);
		data.weather[0].icon = ICON_URL + data.weather[0].icon + "@2x.png";
		console.log('----- Daily -----');
		console.log(data);
		console.log('----- Daily -----');
		commit('MUT_DAILY', data);
	},
	async ACT_COORDS({ commit }) {
		const { data } = await geoCoords();
		data.weather[0].icon = ICON_URL + data.weather[0].icon + "@2x.png";
		commit('MUT_DAILY', data);
	}
}


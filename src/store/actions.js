import { axCity, axDaily, axWeekly } from '../api'

export default {
	ACT_CITY({ commit }) {
		commit('MUT_CITY', axCity())
	}
}
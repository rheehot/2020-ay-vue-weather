<template lang="pug">
	div
		h1.p-3.text-center 날씨예보
			small.ml-3 v.0.0.1
		city-list
		div.p-3.text-center
			button.btn.btn-primary(@click="onCoords") 현재위치의 날씨정보
</template>

<script>
import CityList from '../components/CityList.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'Home',
	components: {
		'city-list': CityList
	},
	computed: {
		...mapGetters(['GET_DAILY'])
	},
	watch: {
		GET_DAILY(val, old) {
			this.$router.push("/daily");
		}
	},
	methods: {
		onCoords(e) {
			this.$store.dispatch("ACT_COORDS");
		}
	}
}
</script>

<style scoped lang="less">

</style>
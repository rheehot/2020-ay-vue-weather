<template lang="pug">
	.select-wrap
		select(v-model="selCity" name="city" id="city" class="form-control" @change="onChangeCity")
			option(value="") 도시를 선택하세요.
			option(v-for="city in GET_CITY" :key="city.id" :value="city.id") {{city.name}}
</template>
<script>
// ... (spread operation(펼침연산자), rest operation(나머지 연산자))
// const [a, b, ...c] = ["A", "B", "C", "D", "E"]; // 비구조화 할당

import { mapGetters } from 'vuex'
export default {
	name: "CityList",
	data() {
		return {
			selCity: "",
		}
	},
	methods: {
		onChangeCity(e) {
			this.$store.dispatch('ACT_WEATHER', this.selCity);
		}
	},
	created() {
		// 본 Component가 처음 시작할 때 한번 실행된다.
		this.$store.dispatch('ACT_CITY');
	},
	computed: {
		// 지정된 state가 변경될 때 값을 적용한다.
		...mapGetters(['GET_CITY', 'GET_DAILY']),
	},
	watch: {
		// 지정된 state가 변경될 때 함수를 실행한다.
		GET_DAILY(val, old) {
			console.log("---- WATCH ----");
			console.log(val);
			console.log(old);
			console.log("---- WATCH ----");
			this.$router.push('/daily');
		}
	}
}
</script>

<style scoped lang="less">
	.select-wrap {width: 90%; max-width: 800px; margin: 1rem auto;}
</style>
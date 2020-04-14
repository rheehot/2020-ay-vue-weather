<template lang="pug">
	div
		h1.p-3.text-center 날씨예보
			small.ml-3 v.0.0.1
		city-list
</template>

<script>
import CityList from '../components/CityList.vue'

export default {
	name: 'Home',
	components: {
		'city-list': CityList
	}
}
</script>

<style scoped lang="less">

</style>
<template lang="pug">
	div.d-flex.flex-column.align-items-center.justify-content-center.border.text-center
		h1.city {{ GET_DAILY.name }}
		img.icon(:src="GET_DAILY.weather[0].icon")
		h3.temp {{ GET_DAILY.main.temp }} 도
		h3.main {{ GET_DAILY.weather[0].main }}
		h5.desc {{ GET_DAILY.weather[0].description }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Daily',
	computed: {
		...mapGetters(['GET_DAILY']),
	}
}
</script>

<style scoped lang="less">

</style>
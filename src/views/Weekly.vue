<template lang="pug">
	ul.list-wrap
		li.list.d-flex.justify-content-between.align-items-center(v-for="v in GET_WEEKLY.list" :key="v.dt")
			img(:src="v.weather[0].icon")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Weekly',
	computed: {
		...mapGetters(['GET_WEEKLY'])
	}
}
</script>

<style scoped lang="less">

</style>
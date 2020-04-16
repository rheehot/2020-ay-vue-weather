<template lang="pug">
	ul.list-wrap
		li.list.d-flex.justify-content-between.align-items-center.mb-1(v-for="v in GET_WEEKLY.list" :key="v.dt")
			div.icon.text-center
				img(:src="v.weather[0].icon")
			div.cont
				h5 {{ v.main.temp }} 도
				div
					span.mr-2 {{ v.weather[0].main }}
					span - {{ v.weather[0].description }}
				div
					span {{ v.dt }}
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
	.list-wrap {overflow-y: auto;}
	.list {border: 1px solid #eee;}
	.list > .icon {flex: 13% 0 1;}
	.list > .cont {flex: 85% 0 1;}
	.list img {max-width: 40px;}
</style>
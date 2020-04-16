<template lang="pug">
	ul.list-wrap
		li.list.d-flex.justify-content-start.align-items-center(v-for="v in GET_WEEKLY.list" :key="v.dt")
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
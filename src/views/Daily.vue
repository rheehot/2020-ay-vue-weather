<template lang="pug">
	div.d-flex.flex-column.align-items-center.justify-content-center.border.text-center
		div.city
			h1 {{ GET_DAILY.name }}
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
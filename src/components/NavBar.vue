<template lang="pug">
	div.header
		div.d-flex.align-items-center.bg-dark.text-light
			div.logo.mr-2.p-3
				i.fas.fa-sun
			router-link(to="/")
				div.p-2.mr-2 Home
			router-link(to="/daily")
				div.p-2.mr-2 Daily Weather
			router-link(to="/weekly")
				div.p-2.mr-2 Weekly Weather
</template>

<script>
export default {
	name: "NavBar"
}
</script>

<style scoped lang="less">
	a {color: #daf9fd; text-decoration: none;}
	a:link {color: #daf9fd; text-decoration: none;}
	a:hover {color: #ffffff; text-decoration: none;}
</style>
<template lang="pug">
	#app.container.d-flex.flex-column.justify-content-between
		nav-bar
		footer-bar
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
export default {
	name: 'App',
	components : {
		'nav-bar': NavBar,
		'footer-bar': FooterBar,
	}
}
</script>

<style lang="less">
#app {height: 100vh; border-left: 1px solid #eee; border-right: 1px solid #eee; position: relative; }
</style>
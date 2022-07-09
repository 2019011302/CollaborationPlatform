<template>
	<div>
		<showproject :showDelete="false" mylink = '/menberproject'></showproject>
	</div>
</template>

<script>
import showproject from './ShowProject.vue'
export default{
	components:{
		showproject
	}
}
</script>

<style>
</style>
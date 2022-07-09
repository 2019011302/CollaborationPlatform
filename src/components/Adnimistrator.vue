<template>
	<div>
		<showproject :showDelete="true" mylink = '/projectinfo' ></showproject>
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

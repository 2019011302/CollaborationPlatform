<template>
	<div>
		<span>{{name1}}</span>>
		<span>{{name2}}</span>
		<span v-show="isShow" style="color: #000000;"> ></span>
		<span v-show="isShow">{{name3}}</span>
	</div>
</template>

<script>
	export default{
		props:{
			name1 :{
				type:String,
				default:''
			},
			name2 :{
				type:String,
				default:''
			},
			name3 :{
				type:String,
				default:''
			},
			isShow:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped>
	span{
		color: #01A9DB;
	}
</style>

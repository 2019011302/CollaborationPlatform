<template>
	<div>
		<span class="font">{{title}}</span>
		<img src= "/修改.png"  style="float: right;" @click="clickE()" v-show="flag ===0"/>
		<img src="/取消.png"  style="float: right;" @click="clickD()" v-show="flag ===1"/>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type: String,
				name:''
			}
		},
		data(){
			return {
				flag : 0
			}
		},
		methods:{
			clickE(){
				this.flag = 1
				this.$emit("event" , this.flag)
			},
			clickD(){
				this.flag = 0
				this.$emit("event" , this.flag)
			}
		}
	}
</script>

<style scoped> 
	* {
		margin: 0;
		padding: 0;
	}
	img {
		width: 25px;
		height: 25px;
		float: right;
	}
	.font {
		font-size: 24px;
		font-weight: 700;
		color: #000000;
	}
	div{
		background-color:#E9E9E9 ;
		text-align: center;
	}
</style>

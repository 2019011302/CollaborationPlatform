<template>
	<div class= "backgroung">
		<div class = "dialog" >
			<center><h2 style="padding-top: 50px">确认删除{{myname}}？</h2></center>
			<br>
			<button style="background-color: red; margin-right: 60px; margin-left: 70px;" @click="clickButttonTrue()">确认</button>
			<button @click="clickButttonFalse()">取消</button>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			myname:{
				type:String,
				default:""
			}
		},
		methods:{
			clickButttonTrue(){
				this.$emit("isTrue")
			},
			clickButttonFalse(){
				this.$emit("isFalse")
			},
			
		}
	}
</script>

<style scoped>
		 .dialog{
			 width: 300px;
			 height: 180px;
			 background-color: #FFFFFF;
			 border-radius: 5px;
			 margin-top: 200px;
			 margin-left: 550px;
		 }
		 .backgroung{
			 background-color: rgba(0,0,0,0.2);
			 width: 100%;
			 margin: auto;
			 position: fixed;
			 top:0;
			 left: 0;
			 right: 0;
			 bottom:0;
		 }
		 button{
		 	width: 50px;
			border-radius: 5px;
		 }
</style>

<template>
	<div>
		<div><h1 style = "text-align: center; color: white; font-size: 50px;">协同工作平台</h1></div>
		<div id = "center">
			<h2 style = "text-align: center; padding-top: 10px; margin-top: 10px;">请登录</h2>
			<div>
				<img src="/用户名.png" />
				<input type="text"/>
			</div>
			<div>
				<img src="/密码.png"/>
				<input type="password"/>
			</div>
			<div>
				<a style="padding-left: 20px;" href="忘记密码.html">忘记密码？</a>
				<a style="padding-left: 120px;" href="注册.html">注册</a>
			</div>
			<div>
				<button><a href = "主页.html">登录</a></button>
			</div>
		</div>
	</div>
</template>
<script>
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	body{
		background: url(/denglu2.png);
	}
			
	#center{			
			background-color: rgba(255,255,255,0.5);
			width: 400px;
			height: 300px;
			position:fixed;
			margin: auto;
			left: 0;
			right: 0;
			top:0;
			bottom: 0;
			text-align: center;
	}
	img{
		width: 30px;
		height: 30px;
	}
	input{
		border-top: none;
		border-left: none;
		border-right: none;
		background-color: rgba(255,255,255,0);
		outline: none;
		width: 250px;
	}
	div{
		padding-top: 20px;
	}
	button{
		width: 100px;
		height: 40px;
		background-color: #84c1ff;
		border-radius: 5px;
		color: black;
		font-weight: 100px;
		font-size: 10px;
		font-weight: bold;
	}
	a{
		text-decoration: none;
	}
</style>

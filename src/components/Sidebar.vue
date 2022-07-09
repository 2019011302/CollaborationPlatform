<template>
	<div id="mydiv">
		<div>
			<img src="/菜单栏.png">
			<span>菜单栏</span>
		</div>

		<div>
			<ul>
				<li v-for=" (item, index) in list " :class="current === index ? 'active' : ''" @click="current=index">
					<router-link :to="item.link">
						<img :src="item.icon" />
						{{ item.name }}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				current: -1,
				list: [{
						id: 0,
						icon: "/我的项目管理.png",
						name: '我的项目管理',
						link: '/adm'
					},
					{
						id: 1,
						icon: "/我参与的项目.png",
						name: '我参与的项目',
						// link : "{path:'/ord' , query: {ordname:'韩丹美'}}"
						//link :"{path :'/ord', query: {projectName:'1315'}}"
						link: '/ord/韩丹美'
					},
					// {
					// 	id: 2,
					// 	icon: "/我的通知.png",
					// 	name: '我的留言',
					// 	link: '/message'
					// },
					{
						id: 2,
						icon: "/创建项目.png",
						name: '创建项目',
						link: '/addproject'
					},
					{
						id: 2,
						icon: "/个人中心.png",
						name: '个人中心',
						link: '/myinfo'
					}
				]
			}
		}
	}
</script>
<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	#mydiv {
		background-color: #B0C4DE;
		width: 200px;
		position: fixed;
		height: 100%;
	}

	h1 {
		color: white;
	}

	div {
		width: 100%;
		background-color: #FFFFFF;
		border: 1px solid #000;
	}

	img {
		width: 25px;
		height: 25px;
		padding-left: 20px;
	}

	span {
		color: #87CEFA;
		font-size: 25px;
		font-weight: bold;
		padding-left: 30px;
	}

	ul {
		list-style: none;
	}

	li {
		border-top: 1px solid #000;
		height: 35px;
		text-align: center;
		display: block;
	}

	.active {
		background-color: #84C1FF;
		color: white;
	}

	a {
		text-decoration: none;
		color: #000000;
	}

	li:hover:not(.active) {
		background-color: #84C1FF;
		color: white;
	}
</style>

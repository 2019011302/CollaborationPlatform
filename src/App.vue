<template>
	<div id="app">
		<!-- 标题栏 -->
		<div>
			<headline></headline>
		</div>
		<!-- 侧边栏 -->
		<div style="padding-top: 50px;">
			<sidebar @event="handleEvent"></sidebar>
		</div>
		<!-- 主体 -->
		<div class="mainDiv">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

	import sidebar from './components/Sidebar.vue'
	import headline from './components/HeadLine.vue'
	export default {
		components: {
			//denglu,
			sidebar,
			headline,
		},
		methods: {
			handleEvent(index) {
				// console.log("2222")
				this.myindex = index
			},
			handlesubEvent(index) {
				this.mysubindex = index
			},
			showProjectInfo() {
				this.myindex = 10
				console('11111')
			}
		}
		// },
		// mounted() {
		//         let script = document.createElement('script');
		//         script.type = 'text/javascript';
		//         script.src = "index.js;
		//         document.body.appendChild(script);
		//     }
	}
</script>

<style scoped>
.mainDiv{
	margin-top: 5px ;
	margin-left: 210px; 
	height:550px; 
	border: 1px solid #000;
	 border-radius: 5px; 
	 padding: 10px;
}
</style>

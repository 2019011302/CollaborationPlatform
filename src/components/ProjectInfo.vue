<template>
	<div>
		<div>
			<myway name1 = "我的项目管理"  name2 = "项目详情"  :isShow="false"></myway>
		</div>
		<div id="box" style="width: 95%; margin-left: 30px;">
			<div style="text-align: center;">
				<span id="font">项目名：{{project.projectname}}</span>
				<router-link :to="{path :'/editproject', query: {projectName:project.projectname}}" >
					<img src="/修改.png" style="float: right;" />
				</router-link>
			</div>
			<div id="info">
				<p>项目说明：{{project.detail}}</p>
				<p>起始时间：{{ project.sday }} {{project.stime }} 至  {{ project.eday }} {{project.etime }}</p>
				<p>项目成员：{{project.group}}</p>
				<p>项目状态：{{project.state}}</p>
			</div>
			<div style="text-align: center;">
				<br>
				<span>任务清单</span>
				<router-link :to="{path :'/addtask', query: {projectName:project.projectname}}" >
					<!-- 添加任务时传入项目名 -->
					<button
						style="float: right;background-color: #87CEFA;">添加任务</button>
				</router-link>

				<br>
			</div>
			<div>
				<!-- 表单列出项目-->
				<mytable ></mytable>
			</div>			
		</div>
	</div>
</template>

<script>
import mytable from './Mytable.vue'
import myway from './MyWay.vue'
	export default {
		components:{
			mytable,
			myway
		},
		data() {
			return {
				projectName :'this is a test',
				project :{}
			}
		},
		mounted(){
			this.projectName = this.$route.query.projectName;
			var list = JSON.parse(localStorage.getItem('project')) || []
			list = list.filter(item => item.projectname===this.projectName)
			this.project = list[0]
			console.log('1111')
			console.log(this.project)
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	img {
		width: 30px;
		height: 30px;
		text-align: right
	}

	#font {
		font-size: 24px;
		font-weight: 700;
	}

	#info {
		background-color: #E9E9E9;
	}

	p {
		margin-left: 30px;
		margin-bottom: 5px;
	}

</style>

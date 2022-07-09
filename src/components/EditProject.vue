<template>
	<div>
		<div>
			<myway name1 = "我的项目管理"  name2 = "项目详情" name3 = "修改项目" :isShow="true"></myway>
		</div>
		<br>

		<div id="box" style="width: 95%; margin-left: 30px; text-align: center;">
			<div style="background-color:#E9E9E9 ;">
				<span class="font">修改项目</span>
				<!-- <router-link to="/projectinfo"> -->
				<router-link :to="{path :'/projectinfo', query: {projectName:projectname}}" >
					<img src="/取消.png" />
				</router-link>
			</div>
			<br>
			<div style="background-color: #01A9DB">
				<span style="font-size: 22px; color: #1C1C1C;">项目信息</span>
			</div>
			<div>
				<table>
					<tr>
						<td>项目名</td>
						<td>{{project.projectname}}
						</td>
					</tr>
					<tr>
						<td>项目说明</td>
						<td><input type="text" v-model="project.detail"  /></td>
					</tr>
					<tr>
						<td>项目成员</td>
						<td><input type="text" v-model="project.group"  /></td>
					</tr>
					<tr>
						<td>项目状态</td>
						<td>
							<!-- <input type="text" :value="oldproject.state" /> -->
							<select v-model = "project.state" >
								<option>未完成</option>
								<option>已完成</option>
							</select>
						</td>
					</tr>
					<tr>
						<td style="width: 50%;">
							开始日期<input type="date" style="width: 200px;" v-model = "project.sday"/>
			
						</td>
						<td style="width: 50%;">
							开始时间<input type="time" style="width: 200px" v-model = "project.stime"/>
						</td>
					</tr>
					<tr>
						<td style="width: 50%;">
							结束日期<input type="date" style="width: 200px;" v-model = "project.eday" />
						</td>
						<td style="width: 50%;">
							结束时间<input type="time" style="width: 200px" v-model = "project.etime"/>
						</td>
					</tr>
				</table>
			</div>
			<button style="background-color: #2ECCFA; width: 70px; height: 30px; border-radius: 5px;"
				@click="edit()">保存</button>
		</div>
	</div>
</template>

<script>
import myway from './MyWay.vue'
	export default {
		components:{
			myway
		},
		data() {
			return {
				myname:'',
				projectname : '',
				project: {
					projectname: '',
					sday: '',
					stime: '',
					eday: '',
					etime: '',
					detail: '',
					group: ''
				},
				// project: {}
			}
		},
		mounted() {
			this.projectname = this.$route.query.projectName
			console.log(this.projectname)
			var list = JSON.parse(localStorage.getItem('project')) || []
			list = list.filter(item => item.projectname === this.projectname)
			this.project = list[0]
			// console.log('222')
			// console.log(this.project)
		},
		methods: {
			edit(){
				//获得全部项目
				if (this.project.projectname
				&& this.project.sday && this.project.stime
				&& this.project.eday && this.project.etime
				&& this.project.detail && this.project.group) {
					var list = JSON.parse(localStorage.getItem('project')) || []
					//获得项目名
					var projectname = this.$route.query.projectName
					//找项目的下标
					var i =0
					for( i = 0 ; i< list.length ; i++ ){
						// console(i);
						
						if(list[i].projectname ===projectname){
							//修改
							list[i] = this.project
							//保存修改
							localStorage.setItem('project',JSON.stringify(list))
							//提示修改成功
							alert("修改成功")
							break;
						}}}else{
					alert('信息未填写完全')
				}
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
		width: 30px;
		height: 30px;
		float: right;
	}

	.font {
		font-size: 24px;
		font-weight: 700;
	}

	p {
		margin-left: 30px;
		margin-bottom: 5px;
	}

	select,input {
		border: 1px solid #E6E6E6;
		border-radius: 5px;
		outline: #00FFFF;
		height: 30px;
		width: 100%;
	}

	input:focus {
		border-color: #58ACFA;
	}

	table {
		border: 1px solid #E9E9E9;
		width: 100%;
	}

	td {
		text-align: center;
		height: 40px;
		border-bottom: 1px solid #D8D8D8;
		color: #2E2E2E;
	}

	/* tr{
		border-bottom:1px solid #D8D8D8;
	} */
</style>

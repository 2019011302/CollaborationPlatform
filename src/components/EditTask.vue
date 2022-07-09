<template>
	<div>
		<div>
			<myway name1 = "我的项目管理"  name2 = "项目详情" name3 = "修改任务" :isShow="true"></myway>
		</div>
		<br>

		<div id="box" style="width: 95%; margin-left: 30px; text-align: center;">
			<div style="background-color:#E9E9E9 ;">
				<span class="font">修改任务</span>

				<!-- <router-link to="/projectinfo" > -->
				<router-link :to="{path: '/projectinfo', query: {projectName:myname}}" >
					<img src="/取消.png" />
				</router-link>
			</div>
			<br>
			<div style="background-color: #01A9DB">
				<span style="font-size: 22px; color: #1C1C1C;">任务信息</span>
			</div>
			<div>
				<table>
					<tr>
						<td>任务名称</td>
						<td>
							{{task.taskname}}
						</td>
					</tr>
					<tr>
						<td>重要度</td>
						<td>
							<select v-model = "task.level" >
								<option>普通</option>
								<option>重要</option>
								<option>紧急</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>任务状态</td>
						<td>
							<select v-model = "task.state" >
								<option>未完成</option>
								<option>已完成</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>任务备注</td>
						<td>
							<input type="text" v-model="task.other"  />
						</td>
					</tr>
					<tr>
						<td>任务成员</td>
						<td>
							<input type="text" v-model="task.group"  />
						</td>
					</tr>
					<tr>
						<td style="width: 50%;">
							开始日期<input type="date" style="width: 200px;" v-model = "task.sday"/>
			
						</td>
						<td style="width: 50%;">
							开始时间<input type="time" style="width: 200px" v-model = "task.stime"/>
						</td>
					</tr>
					<tr>
						<td style="width: 50%;">
							结束日期<input type="date" style="width: 200px;" v-model = "task.eday" />
						</td>
						<td style="width: 50%;">
							结束时间<input type="time" style="width: 200px" v-model = "task.etime"/>
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
				// projectindex,
				task: {
					projectname: '', //项目名 可由路由传入
					taskname: '', //任务名 不可修改
					sday: '',
					stime: '',
					eday: '',
					etime: '',
					time :'',//分配时间  
					level: '',
					state: '',
					group: '',
					other: ''
				}
			}
		},
		mounted() {
			//获得全部任务
			var list = JSON.parse(localStorage.getItem('task')) || []
			//获得任务名
			var taskname = this.$route.query.taskName
			this.myname = this.$route.query.projectName
			//找任务的下标
			console.log('list')
			console.log("任务名" + taskname)
			//根据任务名筛选任务
			list = list.filter(item => item.taskname === taskname)
			console.log(list)
			//根据下标赋值
			this.task = list[0]
			// console.log('222')
			// console.log(this.project)
		},
		methods: {
			edit(){
				if (
					this.task.taskname && this.task.sday && this.task.stime &&
					this.task.eday && this.task.etime && this.task.level &&
					this.task.group && this.task.state && this.task.other
				) {
					//获得全部任务
					var list = JSON.parse(localStorage.getItem('task')) || []
					//获得任务名
					var taskname = this.$route.query.taskName
					//找任务的下标
					var i =0
					for( i = 0 ; i< list.length ; i++ ){
						// console(i);
						if(list[i].taskname ===taskname){
							//修改
							list[i] = this.task
							//保存修改
							localStorage.setItem('task',JSON.stringify(list))
							//提示修改成功
							alert("修改成功")
							break;
						}
					}
				}
				else{
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

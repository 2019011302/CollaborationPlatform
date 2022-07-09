<template>
	<div>
		<div>
			<myway name1 = "我的项目管理"  name2 = "项目详情" name3 = "添加任务" :isShow="true"></myway>
		</div>
		<div id="box" style="width:95%; margin-left: 30px; text-align: center;">
			<div style="background-color:#E9E9E9 ;">
				<span class="font">添加任务</span>
				<!-- <router-link to="/projectinfo"> -->
				<router-link :to="{path :'/projectinfo', query: {projectName:projectName}}" >
					<img src="/取消.png" style="float: right;" />
				</router-link>
			</div>
			<br>
			<div style="background-color: #01A9DB">
				<span style="font-size: 22px; color: #1C1C1C;">任务信息</span>
			</div>
			<div>
				<el-form ref="form" :model="task" label-width="80px" size="mini">
					<el-form-item label="任务名称">
						<el-input v-model="task.taskname"></el-input>
					</el-form-item>
					<el-form-item label="开始日期">
							<input type="date" v-model="task.sday" style="width:400px;"/>
							开始时间<input type="time" v-model="task.stime" style="width:400px;"/>
					</el-form-item>
					<el-form-item label="结束日期">
							<input type="date" v-model="task.eday" style="width:400px;"/>
							结束时间<input type="time" v-model="task.etime" style="width:400px;"/>
					</el-form-item>
					<el-form-item label="重要度">
						<el-select v-model="task.level" placeholder="请选择任务重要程度" style="width: 100%;">
							<el-option value="普通"></el-option>
							<el-option value="重要"></el-option>
							<el-option value="紧急"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="任务状态">
						<el-select v-model="task.state" placeholder="请选择任务状态" style="width: 100%;">
							<el-option value="未完成"></el-option>
							<el-option value="已完成"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="任务备注">
						<el-input v-model="task.other"></el-input>
					</el-form-item>
					<el-form-item label="任务成员">
						<el-input v-model="task.group"></el-input>
					</el-form-item>
				
				</el-form>
			</div>
			<button style="background-color: #2ECCFA; width: 70px; height: 30px; border-radius: 5px;"
				@click="onSubmit()">保存</button>
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
				projectName: '',
				task: {
					projectname: '', //项目名
					taskname: '', //任务名
					sday: '',
					stime: '',
					eday: '',
					etime: '',
					level: '',
					state: '',
					group: '',
					other: ''
				}
			}
		},
		mounted() {
			this.projectName = this.$route.query.projectName;
			console.log("this.projectName" , this.projectName)
		},
		methods: {
			onSubmit() {
				if (
					this.task.taskname && this.task.sday && this.task.stime &&
					this.task.eday && this.task.etime && this.task.level &&
					this.task.group && this.task.state && this.task.other
				) {
					//获得当前时间 并过滤
					var date1=new Date()
					var year=date1.getFullYear()
					var month=date1.getMonth()+1
					var day=date1.getDate()
					var h = date1.getHours()
					var m = date1.getMinutes()
					var s = date1.getSeconds()			
					// padDate(date1.getMonth()+1)
					// var day=padDate(date1.getDate())
					// var h = padDate(date1.getHours())
					// var m = padDate(date1.getMinutes())
					// var s = padDate(date1.getSeconds())					
					var mydate = year+'-'+month+'-'+day + ' '+ h + ':' + m + ':'+ s
					
					//生成一条任务
					var obj = {
						projectname: this.projectName, //项目名 由路由传入
						taskname: this.task.taskname,
						sday: this.task.sday,
						stime: this.task.stime,
						eday: this.task.eday,
						etime: this.task.etime,
						time: mydate,
						level: this.task.level,
						group: this.task.group,
						state: this.task.state,
						other: this.task.other,
					}
					var taskInfo = JSON.parse(localStorage.getItem('task')) || []
					taskInfo.push(obj)
					localStorage.setItem('task', JSON.stringify(taskInfo))

					alert("任务添加成功")
					this.task.taskname = ''
					this.task.sday = ''
					this.task.stime = ''
					this.task.eday = ''
					this.task.etime = ''
					this.task.level = ''
					this.task.group = ''
					this.task.other = ''
					this.task.state = ''
				}
				else{
					alert('信息未填写完全')
				}
			},

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

	.font {
		font-size: 24px;
		font-weight: 700;
	}

	p {
		margin-left: 30px;
		margin-bottom: 5px;
	}


	input{
		border: 1px solid #E6E6E6;
		border-radius: 5px;
		outline: #00FFFF;
		height: 25px;
	}
	input:focus{
		border-color: #58ACFA;
	}

</style>

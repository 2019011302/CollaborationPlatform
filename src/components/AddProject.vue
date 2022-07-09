<template>
	<div class = "mydiv">
		<div style="background-color:#E9E9E9 ;">
			<span class="font">创建项目</span>
			<img src="/取消.png" style="float: right;" />
		</div>
		<br>
		<div style="background-color: #01A9DB">
			<span style="font-size: 22px; color: #1C1C1C;">项目信息</span>
		</div>
		<div>
			<el-form ref="form" :model="project" label-width="80px" size="mini">
				<el-form-item label="项目名称">
					<el-input  v-model="project.projectname"></el-input>
				</el-form-item>
				<el-form-item label="开始日期">
						<input type="date" v-model="project.sday"style="width:400px;"/>
						开始时间<input type="time" v-model="project.stime" style="width:400px;"/>
				</el-form-item>
				<el-form-item label="结束日期">
						<input type="date" v-model="project.eday" style="width:400px;"/>
						结束时间<input type="time" v-model="project.etime" style="width:400px;"/>
				</el-form-item>
				<el-form-item label="项目说明" >
					<input style="height: 150px; width: 100%;" v-model="project.detail"/>
				</el-form-item>
				<el-form-item label="项目成员">
					<el-input v-model="project.group"></el-input>
				</el-form-item>
			</el-form>
		</div>
		<button style = "background-color: #2ECCFA; width: 70px; height: 30px; border-radius: 5px;" @click="addPro()">创建</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				project:{
					projectname : '' ,
					sday : '',
					stime : '',
					eday : '',
					etime : '',
					detail : '',
					group :''
				}
			}
		},
		methods:{
			addPro(){
				if (this.project.projectname 
				&& this.project.sday && this.project.stime
				&& this.project.eday && this.project.etime
				&& this.project.detail && this.project.group) {
			
					var obj = {
						projectname: this.project.projectname ,
						sday: this.project.sday,
						stime: this.project.stime,
						eday: this.project.eday,
						etime:this.project.etime,
						detail : this.project.detail,
						group :this.project.group,
						state : '未完成'
					}
					var projectInfo = JSON.parse(localStorage.getItem('project')) || []
					projectInfo.push(obj)
					localStorage.setItem('project',JSON.stringify(projectInfo))
					alert("添加成功")
					this.project.projectname  = ''
					this.project.sday = ''
					this.project.stime = ''
					this.project.eday = ''
					this.project.etime= ''
					this.project.detail = ''
					this.project.group = ''
					
			}else{
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
	.mydiv{
		width:96%;
		margin-left: 30px; 
		text-align: center
	}
	
	a {
		text-decoration: none;
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

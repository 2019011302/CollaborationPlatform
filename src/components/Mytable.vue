<template>
	<div>
		<div style="background-color:#E9E9E9 ; height: 30px; padding-top: 10px;text-align: center;">
			<span style="float: left; margin-left: 30px;">查询:</span>
			重要度
			<select v-model="mylevel">
				<option ></option>
				<option >普通</option>
				<option >重要</option>
				<option >紧急</option>
			</select>
			完成情况
			<select v-model="mystate">
				<option ></option>
				<option >未完成</option>
				<option >已完成</option>
			</select>
			成员<input type="text" v-model="mygroup"/>
			分配时间<input type="date" v-model="mydate"/>
		</div>
		<div class="table-head">
			<table>
				<colgroup>
					<col style="width: 150px;">
					<col />
				</colgroup>
				<thead>
					<th>任务成员</th>
					<th>任务名</th>
					<th>开始时间</th>
					<th>结束时间</th>
					<th>分配时间</th>
					<th>重要度</th>
					<th>进度</th>
					<th>备注</th>
					<th>操作</th>
				</thead>
			</table>
		</div>
		<div v-if="tablelist.length" class="table-body">
			<table>
				<colgroup>
					<col style="width: 150px;">
					<col />
				</colgroup>
				<tbody>
					<tr v-for=" (item, index) in getTablelist">
						<td>{{item.group}}</td>
						<td>{{ item.taskname }}</td>
						<td>{{ item.sday }} {{ item.stime }}</td>
						<td>{{ item.eday }} {{ item.etime }}</td>
						<td>{{ item.time }}</td>
						<td>{{ item.level }}</td>
						<td>{{ item.state }}</td>
						<td>{{ item.other }}</td>
						<td>
							<!-- <button>留言</button> -->
							<!-- //携带参数 任务名 --> 
							<router-link :to="{path :'/edittask', query: {taskName:item.taskname , projectName:projectName}}" >
								<img src="/修改蓝.png" />
							</router-link>
							<img src="/删除红.png" @click.stop="todelete(item.taskname)"/>
				
						</td>
					</tr>
				</tbody>
			</table>
			<div style="text-align: center;">
				<br>
				共 {{mylength}} 个任务
				<br>
			</div>
		</div>
		<div v-else style="text-align: center;">暂无任务</div>
		<mydelete v-show = "isShow" @isTrue = "deleteTask(delName)" @isFalse = "cancleDelete()" :myname="delName"></mydelete>
	</div>
</template>

<script>
	import mydelete from './Delete.vue'
	export default {
		computed: {
			getTablelist(){
				
				var list = this.tablelist.filter(item => (item.level.includes(this.mylevel)
				&& item.state.includes(this.mystate) && item.group.includes(this.mygroup)
				&& item.time.includes(this.mydate)
				))
				this.mylength = list.length
		
				return list 
			},
						computedLength() {
				return this.tablelist.length 
			},
		},
		components:{
			mydelete
		},
		data() {
			return {
				isShow : false,
				mylevel :'',
				mystate : '',
				mygroup : '',
				mydate  : '',
				mylength : 0 ,
				projectName : '',
				delName:'',
				// value :this.projectName,
				tablelist:[]
			}
		},
		mounted(){
			//获得任务表数据  所有任务--根据项目名得到当前项目的任务
			//找到任务  先拿到所有任务
			this.tablelist  =JSON.parse(localStorage.getItem('task')) || []
			console.log('初值'+this.tablelist[0].projectname)
			//console.log( '项目名'+ this.project)
			this. projectName = this.$route.query.projectName;
			console.log('test' + name)
			//根据当前项目名筛选
			this.tablelist = this.tablelist.filter(item =>(item.projectname===this.projectName))
			 //this.tablelist = this.tablelist.filter(item =>item.projectname==='科研开发')
			console.log('筛选后'+this.tablelist)
							
		},
		methods:{
			deleteTask(name) {
				var i =0
				for( i = 0 ; i<this.tablelist.length ; i++ ){
					if(this.tablelist[i].taskname ===name){
						this.tablelist.splice(i ,1)
						localStorage.setItem('task',JSON.stringify(this.tablelist))
						//this.tablelist  =JSON.parse(localStorage.getItem('task')) || []
						break;
					}

				}
				this.isShow = false
			},
			// deleteProject(name) {
			// 	var i =0
			// 	for( i = 0 ; i<this.tablelist.length ; i++ ){
			// 		if(this.tablelist[i].projectname ===name){
			// 			this.tablelist.splice(i ,1)
			// 			localStorage.setItem('project',JSON.stringify(this.tablelist))
			// 			break;
			// 		}
			// 	}
			// 	},
			cancleDelete(){
				this.isShow = false
			},
			todelete(name){
				this.delName = name
				this.isShow = true
			}
		}
	}
</script>

<style scoped>
	.table-head {
		padding-right: 17px;
		background-color: #3A8EE6;
		color: #fff;
	}

	.table-body {
		width: 100%;
		height: 250px;
		overflow: scroll;
	}

	.table-head table,
	.table-body table {
		width: 100%;
	}

	th,
	td {
		text-align: center;

		width: 120px;
		height: 45px;
	}

	table {
		border-collapse: collapse;
	}

	td {
		border: 1px solid #e9e9e9;
	}
	img{
		width: 20px;
		height: 20px;
	}
	select ,input {
		width: 120px;
		margin-right: 30px;
	}
</style>

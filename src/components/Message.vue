<template>
	<div>
		<div style="background-color:#E9E9E9 ; height: 30px; padding-top: 10px;text-align: center;">
			{{name}}<input type="text"  v-model="myname" />
			项目<input type="text" v-model="myproject"/>
			接收时间<input type="date"  v-model="mydate"/>
			<button style="width: 50px;">搜索</button>
		</div>
		<!-- 表格 -->
		<div class="table-head">
			<table>
				<colgroup>
					<col style="width: 120px;">
					<col />
				</colgroup>
				<thead>
					<th>{{name}}</th>
					<th>项目</th>
					<th>内容</th>
					<th>接收时间</th>
					<th v-show="isShow">操作</th>
				</thead>
			</table>
		</div>
		<div v-if="tablelist.length" class="table-body">
			<!-- style="width: 900px;height:400px; overflow-y:scroll;"> -->
			<table>
				<colgroup>
					<col style="width: 120px;">
					<col />
				</colgroup>
				<tbody>
					<tr v-for=" (item, index) in getTableData">
						<td>{{ item.fromName }}</td>
						<td>{{ item.project }}</td>
						<td>{{ item.content }}</td>
						<td>{{ item.time }}</td>
						<td v-show="isShow">
							<button>回复</button>
<!-- 							<img src="/删除红.png" @click="deletetask(index)" />			 -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div v-else style="text-align: center;">暂无留言</div>
		<div style="text-align: center;">
			<br>
			共 {{dataLength}} 条留言
			<br>
		</div>
	</div>
</template>

<script>
	import horizontalbar from './Horizontalbar.vue'
	export default {
		components:{
			horizontalbar
		},
		props:{
			name:{
				type :String ,
				default:'发送人'
			},
			isShow:{
				type : Boolean,
				default:false
			}
		},
		data() {
			return {
				myname:'',
				myproject:'',
				mydate:'',
				dataLength :0,
				tablelist: [{
						fromName: '李四',
						project: '实验三',
						content: '尽快完成任务',
						time: '2021-12-03',
					},{
						fromName: '张三',
						project: '实验二',
						content: '尽快完成任务',
						time: '2021-01-03',
					},{
						fromName: '张一',
						project: '课程实践',
						content: '尽快完成任务',
						time: '2020-02-03',
					},{
						fromName: '张二',
						project: '科研开发',
						content: '尽快完成任务',
						time: '2019-01-03',
					},{
						fromName: '张三',
						project: '实验一',
						content: '尽快完成任务',
						time: '2018-01-03',
					},{
						fromName: '张三',
						project: '实五',
						content: '尽快完成任务',
						time: '2021-12-03',
					},{
						fromName: '李四',
						project: '课内实践',
						content: '尽快完成任务',
						time: '2021-12-03',
					},{
						fromName: '张三',
						project: '实五',
						content: '尽快完成任务',
						time: '2021-12-03',
					},{
						fromName: '李四',
						project: '课内实践',
						content: '尽快完成任务',
						time: '2021-12-03',
					},{
						fromName: '张三',
						project: '实五',
						content: '尽快完成任务',
						time: '2021-12-03',
					},{
						fromName: '李四',
						project: '课内实践',
						content: '尽快完成任务',
						time: '2021-12-03',
					}
					]
			}
		},
		computed:{
			getTableData(){
				var list = this.tablelist.filter(item => (item.fromName.includes(this.myname)
				&& item.project.includes(this.myproject)
				&& item.time.includes(this.mydate)
				))
				this.dataLength = list.length
				return list
			}
		}
	}
</script>

<style scoped>
	.table-head {
		padding-right: 17px;
		background-color: #01A9DB;
		color: #fff;
	}

	.table-body {
		width: 100%;
		height: 350px;
		overflow-y: scroll;
	}

	.table-head table,
	.table-body table {
		width: 100%;
	}

	/* .table-body table tr:nth-child(2n+1){background-color:#f2f2f2;} */
	th,
	td {
		text-align: center;

		width: 120px;
		height: 40px;
	}

	table {
		border-collapse: collapse;
	}

	td {
		border: 1px solid #e9e9e9;
	}
/* 	img{
		width: 20px;
		height: 20px;
	} */
	input {
		width: 120px;
		margin-right: 100px;
	}
	span{
		color: #87CEFA;
	}
</style>

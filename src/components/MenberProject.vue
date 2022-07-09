<template>
	<div>
		<br>
		<div v-if="task">
		<mytitle @event="toChang" title="任务详情"></mytitle><br>
		<p>任务清单</p>
		<table>
			<tr>
				<td style = "width: 10%;"> 任务名</td>
				<td  style = "width: 90%;">
					<span>{{task.taskname}}</span>
					<!-- <input v-show = "flag === 1" type="text" v-model="task.taskname"/> -->
				</td>
			</tr>
			<tr>
				<td style = "width: 10%;"> 任务进度</td>
				<td  style = "width: 90%;">
					<span v-show = "flag === 0">{{task.state}}</span>
					<select v-model = "task.state" v-show = "flag === 1">
						<option>未完成</option>
						<option>已完成</option>
					</select>
					<!-- <input v-show = "flag === 1" type="text" v-model="task.state"/> -->
				</td>
			</tr>
			<tr>
				<td style = "width: 10%;"> 任务备注</td>
				<td  style = "width: 90%;">
					<span v-show = "flag === 0">{{task.other}}</span>
					<input v-show = "flag === 1" type="text" v-model="task.other"/>
				</td>
			</tr>
			<tr>
				<td style = "width: 10%;"> 任务成员</td>
				<td  style = "width: 90%;">
					<span value="task.group">{{task.group}}</span>
					<!-- <input v-show = "flag === 1" type="text" v-model="task.group"/> -->
				</td>
			</tr>
		</table>
		
		<div style="text-align: center;">
			<br>
			<button @click="edit()" v-show = "flag === 1" style="background-color: #2ECCFA; width: 70px; height: 30px; border-radius: 5px;" >
			修改</button>
		</div>
	</div>
		<div style="text-align: center;" v-if="!task">
			该项目尚未给您分配任务
		</div>
	</div>
</template>

<script>
	import mytitle from './Title.vue'
	export default{
		data(){
			return{
				flag : 0 ,
				task :{},
				projectname : ''
			}
		},
		components:{
			mytitle
		},
		methods:{
			toChang(flag){
				this.flag = flag
			},
			edit(){
				//获得全部任务
				var list = JSON.parse(localStorage.getItem('task')) || []
				//获得任务名
				var taskname = this.task.taskname
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
			
		},
		mounted(){
			//先在任务表里找项目名 [{} , {} , {}]
			//再在找到的task过滤本人的名字[{}]
			//于是 task = list[0]
			
			//任务表里，一条就是一个任务
			//找特定任务：项目名 + 任务成员
			//因此路由传参应为：项目名
			this.projectname = this.$route.query.projectName
			console.log("this.projectname : " + this.projectname)
			
			
			var list = JSON.parse(localStorage.getItem('task')) || []
			list = list.filter(item => (item.projectname===this.projectname && item.group.includes('韩丹美')))
			if(list)
				this.task = list[0]
			console.log("this.task: " + this.task.group)
		}
	}
</script>

<style scoped>
	table{
		border: 1px solid #E9E9E9;
		width: 100%;
	}
	td{
		text-align: center;
		height: 40px;
		border-bottom:1px solid #D8D8D8;
		color: #2E2E2E;
	}
	*{
		margin: 0;
		padding: 0;
	}
	p{
		 background-color: #01A9DB ;
		 text-align: center ;
		 font-size: 22px; 
		 color: #1C1C1C
	}
	span{
		color: #000000;
	}
	select ,input{
		border: 1px solid #E6E6E6;
		border-radius: 5px;
		outline: #00FFFF;
		height: 30px;
		width: 100%;
	}
	select , input:focus{
		border-color: #58ACFA;
	}
</style>


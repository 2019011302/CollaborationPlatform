<template>
	<div>
		<br><mytitle @event="toChang"></mytitle><br>
		<p>个人信息</p>
		<table>
			<tr v-for="(data , index) in person">
				<td style = "width: 10%;"> {{data}} 
				</td>
				<td  style = "width: 90%;">
					<span v-show = "flag === 0">{{list[index]}}</span>
					<input v-show = "flag === 1" type="text" :value="list[index]"/>
				</td>
			</tr>
		</table>
		<div>
			<button @click="deletePro()">删除所有项目</button>
			<button @click="deleteTask()">删除所有任务</button>
		</div>	
	</div>
</template>

<script>
	import mytitle from './Title.vue'
	export default{
		data(){
			return{
				flag : 0 ,
				person:['工号' ,'姓名' , '密码' , '联系电话' ],
				list:["2019011302" , "韩丹美" , "123456" , "13977883048"]
			}
		},
		components:{
			mytitle
		},
		methods:{
			toChang(flag){
				this.flag = flag
			},
			deletePro(){
				localStorage.removeItem('userInformation')
			},
			deleteTask(){
				localStorage.removeItem('task')
			}
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
	input{
		border: 1px solid #E6E6E6;
		border-radius: 5px;
		outline: #00FFFF;
		height: 30px;
		width: 100%;
	}
	input:focus{
		border-color: #58ACFA;
	}
</style>

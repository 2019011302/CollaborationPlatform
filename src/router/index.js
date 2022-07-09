import Vue from "vue"
import VueRouter from 'vue-router'

import test from '../components/test.vue'

import Adm from '../components/Adnimistrator.vue'
import ord from '../components/Ordnary.vue'
import message from '../components/Message.vue'
import addproject from '../components/AddProject.vue'
import myinfo from '../components/DetailInfo.vue'

import projectinfo from '../components/ProjectInfo.vue'
import editproject from '../components/EditProject.vue'
import edittask from '../components/EditTask.vue'

import addtask from '../components/AddTask.vue'
import menberproject from '../components/MenberProject.vue'
Vue.use(VueRouter)

const routes = [
	{
		// 我的项目管理
		path :'/adm',
		component:Adm
	},{
		// 我参与的项目
		path :'/ord/:odrname',
		component:ord
	},{
		// 我的留言
		path :'/message',
		component:message
	},{
		// 创建项目
		path :'/addproject',
		component:addproject
	},{
		// 个人中心
		path :'/myinfo',
		component:myinfo
	},{
		path : '/test',
		component:test
	},{
		//项目详情
		path :'/projectinfo',
		component: projectinfo
		
	},{//项目修改
		path :'/editproject',
		component:editproject
		
	},
	{//任务修改
		path :'/edittask',
		component: edittask
		
	},{//添加任务
		path :'/addtask',
		component: addtask
		
	},{//查看自己参与的项目
		path :'/menberproject',
		component: menberproject
		
	},
	{
		path :'*',
		component:Adm
	}
	
]

const router = new VueRouter({
	routes
})
export default router
<template>
	<div class="box">
		<div v-show = "datalist.length">
			<ul>
				<li v-for=" (item,index) in datalist">
					<div>
							<p style="text-align:right;" v-show="showDelete">
								<img style="width: 30px; height: 30px;" src="/删除.png"
									@click.stop="todelete(item.projectname , index)" />
							</p>
							<img src="项目.png" />
						
					</div>
					<router-link :to="{path: mylink, query: {projectName:item.projectname, taskName:item.taskname}}" >
						<p style="background-color: white;">{{item.projectname}}</p>
					</router-link>
					
				</li>
			</ul>
		</div>
		<div v-show = "!datalist.length" style="text-align: center;">
			暂无项目
		</div>
		<!-- 删除 -->
		<mydelete v-show="isShow" @isTrue="handleDelete(index)" @isFalse="cancleDelete()" :myname="name"></mydelete>
		<!-- 删除完毕 -->
	</div>
</template>

<script>
	import mydelete from './Delete.vue'
	export default {
		props: {
			showDelete: {
				type: Boolean,
				default: false
			},
			mylink:{
				type : String,
				default: ''
			}
		},
		data() {
			return {
				current: 0,
				isShow: false,
				name: "",
				index: 0,
				odrname:'',
				datalist: []
			}
		},
		mounted(){
		
			this.odrname =this.$route.params.odrname
			console.log("odrname"+ this.odrname)

			//有值就获取参与的任务
			if(this.odrname){
				this.datalist = JSON.parse(localStorage.getItem('project')) || []
				this.datalist = this.datalist.filter(item=> (item.group.includes(this.odrname)))
				console.log(this.datalist)
			}else{//否则获取管理的任务
				//获得全部项目
				this.datalist = JSON.parse(localStorage.getItem('project')) || []
				console.log(this.datalist)
			}

		},
		methods: {
			todelete(item, index) {
				// console.log('delete')
				this.name = item
				this.index = index
				this.isShow = true

			},
			handleDelete(index) {
				var list = JSON.parse(localStorage.getItem('project')) || []
				list.splice(index, 1)
				localStorage.setItem('project', JSON.stringify(list))
				this.datalist = JSON.parse(localStorage.getItem('project'))
				this.isShow = false
			},
			cancleDelete() {
				this.isShow = false
			}
		},
		components: {
			mydelete
			}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.box {
		height: 580px;
		/* border-radius: 5px; */
		position: fixed;
	}

	ul {
		list-style: none;
		display: flex;
	}

	li {
		flex: 1;
		text-align: center;
		margin: 30px;
		padding: 0;
		background-color: #B0C4DE;
		border: 1px solid #000000;
		width: 200px;
	}

	img {
		width: 120px;
		height: 120px;

	}

	p {
		height: 25px;
	}

	a {
		text-decoration: none;
		color: #000000;
	}
</style>

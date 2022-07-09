<template>
	<div>
		<ul>
			<li v-for=" (item,index) in datalist" :class="current ===index ? 'active' : ''"
			@click="submitIndex(index)"
			>
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				current:0 ,
				datalist:['收件箱' , '发件箱']
			}
		},
		methods:{
			submitIndex(index){
				// console.log("111")
				this.current = index
				this.$emit("subevent" , index)
			}
		}
	}
</script>

<style scoped>
	li:hover:not(.active) {
	  background-color:#84C1FF;
	  
	}
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		list-style: none;
		display: flex;
	}
	li{
		flex:1 ;
		text-align: center;
	 }
	 .active{
		 background-color: #84C1FF;
	 }
</style>

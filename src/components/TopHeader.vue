<template>
    <div class="topHeader shadow">
        <span class="topBack" v-on:click="moveBack">
			<i class="fas fa-arrow-left"></i>
		</span>
		<label class="topTitle">{{propsdata}}</label>
		<label class="completeBtn shadow cursorPoint" v-if="hidden" v-on:click="moveMain">{{icondata}}</label>
    </div>
</template>

<script>
export default {
	props:['propsdata','icondata'],
	data:function(){
		return{
			hidden:true
		}
	},
	methods:{
		moveMain: function(){
			this.$emit('mainPage');
		},
		moveBack: function(){
			this.$emit('backPage');
		},
		iconData: function(){
			if(this.icondata == undefined){
				this.hidden = false;
			}
		}
	},
	//자동으로 메소드 실행시켜주는 함수 
	beforeMount(){
		this.iconData();
	}
}
</script>

<style scoped>
	.completeBtn {
		margin-top:-3px;
        float: right;
		border-radius: 5px;
		font-size:13px;
		/* background: linear-gradient(to right, #656b8f, #8a79c4); */
		/* background-image: linear-gradient(120deg, #cd9cf2 0%, #e6dffc 100%);
		*/
		/* background-image: linear-gradient(120deg, #fd5967 0%, rgb(255, 140, 140) 100%); */
		background: linear-gradient(120deg,rgb(245, 170, 71) 0%, #ff7920 100%);
		font-weight: bold;
		color:white;
		padding:5px;
    }
</style>
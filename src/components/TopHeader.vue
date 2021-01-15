<template>
    <div class="top_header">
        <span class="top_back cursorPoint" v-on:click="moveMain">
			<i class="fas fa-arrow-left"></i>
		</span>
		<label class="top_title">{{propsdata}}</label>
		<label class="complete_btn shadow cursorPoint" v-on:click="moveMain">{{icondata}}</label>
    </div>
</template>

<script>
export default {
	props:['propsdata','icondata'],
	methods:{
		moveMain: function(){
			this.$emit('mainPage');
		}
	}
}
</script>

<style scoped>
	#input_line{
		margin-top:10px;
	}
	.complete_btn {
        float: right;
		border-radius: 5px;;
		/* background: linear-gradient(to right, #656b8f, #8a79c4); */
		/* background-image: linear-gradient(120deg, #cd9cf2 0%, #e6dffc 100%);
		*/
		background-image: linear-gradient(120deg, #fd5967 0%, rgb(255, 140, 140) 100%);
		font-weight: bold;
		color:white;
		padding:2px 3px;
    }
</style>
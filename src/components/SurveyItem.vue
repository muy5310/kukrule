<template>
    <div class="box">
		<button class="survey_item cursorPoint" v-if="select" v-on:click= "clickItem">설문항목</button>
        <button class="choice_item cursorPoint" v-else v-on:click= "clickItem">설문항목</button>
	</div>
</template>

<script>

export default {
    data:function(){
        return{
            select:true
        }
    },
    methods:{
        clickItem: function(){
            this.select = !this.select;
        }
    }
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 30px;
    border:none;
    border-radius:4px;
    background-image: linear-gradient(to top, #c4d0d8 0%, #e2ebf0 100%);
    margin-bottom:10px;
    cursor: pointer;
}
.survey_item {
	width:100%;
	text-align:left;
	background:0;
    height: 30px;
    border:none;
    background-image: linear-gradient(to top, #c4d0d8 0%, #e2ebf0 100%);
    /* background: linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%); */
    border-radius:3px;
}
.choice_item {
	width:70%;
	text-align:left;
	background:0;
    height: 30px;
    margin-bottom:10px;
    border:none;
    background-image: linear-gradient(to top, #fdf3a8 0%, #fff081 1%, #fffb83 100%);
    /* 핑크색 */
    /* background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #f1e7f5 100%); */
    /* 노랑색  */
    /* background-image: linear-gradient(to top, #fae924 0%,  #fefa80 100%); */
    /* 파랑색 */
    /* background: linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%); */
    border-radius:3px;
	}
</style>
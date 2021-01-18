<template>
    <div>
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
.survey_item {
	width:100%;
	text-align:left;
	background:0;
    height: 30px;
    margin-bottom:10px;
    border:none;
    background-image: linear-gradient(to top, #c4d0d8 0%, #e2ebf0 100%);
    /* background: linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%); */
    border-radius:3px;
}
.choice_item {
	width:100%;
	text-align:left;
	background:0;
    height: 30px;
    margin-bottom:10px;
    border:none;
    background-image: linear-gradient(to top, #fefa80 0%, #fae924 100%);
    /* background: linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%); */
    border-radius:3px;
	}
</style>
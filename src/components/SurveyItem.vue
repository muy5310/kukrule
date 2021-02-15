<template>
    <div class="box">
		<button class="survey_item" v-if="!select">{{ itemList }}</button>
        <button class="choice_item" v-else>{{ itemList }}</button>
        <span class="choice_percent" v-if="select" >72%</span>
        <button class="itemStick" v-on:click= "clickItem"></button>
    </div>
</template>

<script>
export default {
    name:'item',
    props:{
        'itemList': String
    },
    data:function(){
        return{
            select:false
        }
    },
    methods:{
        clickItem: function(){
            this.select = !this.select;
        },
        clickTest:function(){
            console.log('hi');
        }
    }
}
</script>

<style scoped>
.box{
    position: relative;
    width: 95%;
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
.itemStick{
    width:100%;
    height: 30px;
    border:none;
    position: absolute;
    cursor:pointer;
    opacity: 0;
    top:0;
    left:0;
}
.itemStick:hover{
    /* background: rgb(233, 233, 233); */
	opacity: 0.3;
}
.choice_percent {
    float:right;
    margin:0.4% 1% 0 0;
}
</style>
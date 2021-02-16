<template>
    <div class="box" v-on:click= "clickItem">
		<button class="surveyItem" v-if="!select">{{ itemList }}</button>
        <button class="choiceItem" v-else>{{ itemList }}</button>
        <span class="percent" v-if="select" >72%</span>
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
    /* position: relative; */
    width: 95%;
    height: 30px;
    border:none;
    border-radius:4px;
    background-image: linear-gradient(to top, #c4d0d8 0%, #e2ebf0 100%);
    margin-bottom:10px;
    cursor: pointer;
}
.box:hover{
    /* background: rgb(233, 233, 233); */
	opacity: 0.8;
}
.surveyItem {
    cursor: pointer;
	width:100%;
	text-align:left;
	background:0;
    height: 30px;
    border:none;
    background-image: linear-gradient(to top, #c4d0d8 0%, #e2ebf0 100%);
    /* background: linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%); */
    border-radius:3px;
}
.choiceItem {
    cursor: pointer;
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
.percent {
    float:right;
    margin:0.4% 1% 0 0;
}
</style>
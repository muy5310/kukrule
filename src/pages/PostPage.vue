<template>
<div class="app">
    <TopHeader v-bind:propsdata="title" v-bind:icondata="icon"></TopHeader>
    <SurveyContent></SurveyContent>
    <ItemLine></ItemLine>
    <div class="add_line">
        <span class="plus_btn">
			<i class="fas fa-plus-circle"></i>
		</span>
        <button class="plus_txt">새 답변 추가</button>
    </div><br>
    <Option></Option>
</div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
import SurveyContent from '../components/SurveyContent.vue';
import Option from '../components/Option.vue';
import ItemLine from '../components/ItemLine.vue';

export default {
    data:function(){
        return{
            title:'새로운 국룰 만들기',
            icon:'완료' 
        }
    },
    components: {
        TopHeader,
        SurveyContent,
        ItemLine,
        Option
    }
}
</script>

<style>
.add_line{
  text-align: center;
}
.plus_btn {
        float:left;
        margin-left:10px;
        background: white;
        color:rgb(205, 41, 16);
        font-size: 20px;
}
.plus_txt {
        width: 81%;
        height: 30px;
        color: rgb(205, 41, 16);
        background: none;
        border: none;
        font-size: 15px;
        margin-left:5px;
        padding:0;
}
</style>
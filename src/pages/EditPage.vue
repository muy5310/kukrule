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
            title:'국룰 편집하기',
            icon:'저장' 
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
</style>
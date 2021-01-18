<template>
<div class="app">
    <TopHeader v-bind:propsdata="title" v-bind:icondata="icon" v-on:mainPage="mainMove"></TopHeader>
    <SurveyContent></SurveyContent>
    <ItemLine></ItemLine>
    <div class="add_line">
        <span class="plus_btn cursorPoint">
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
    },
    methods:{
        mainLink: function(){
            this.$router.push({path:'/'});
        },
        mainMove: function(){
            setTimeout(this.mainLink, 500);
        }
    }
}
</script>

<style>
</style>
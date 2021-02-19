<template>
<div class="app">
    <TopHeader v-bind:propsdata="title" v-bind:icondata="icon" v-on:backPage="backMove"></TopHeader>
    <SurveyContent></SurveyContent>
    <ItemLine></ItemLine>
    <div class="itemAdd">
        <span class="addBtn cursorPoint">
			<i class="fas fa-plus-circle"></i>
		</span>
        <button class="addText borderNone">새 답변 추가</button>
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
    },
    methods:{
        backLink: function(){
            this.$router.go(-1);
        },
        backMove: function(){
            setTimeout(this.backLink, 500);
        },
        scrollTop: function(){
            window.scrollTo(0,0);
        }
    },
    beforeMount(){
        this.scrollTop();
    }
}
</script>

<style>
</style>
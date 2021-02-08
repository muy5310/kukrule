<template>
<div class="app">
    <TopHeader v-bind:propsdata="title" v-on:backPage="backMove"></TopHeader>
    <div id="input_line">
		<span>댓글</span>
		<span class="comment_num">12</span>
		<span class="comment_setting btnPoint" @click="isModalViewed = true">
			<i class="fas fa-sliders-h"></i>
		</span>
        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
            <CommentModal></CommentModal>
        </ModalView>
        <CommentInput></CommentInput>
	</div>
    <CommentLine></CommentLine>
</div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
import CommentInput from '../components/CommentInput.vue';
import CommentLine from '../components/CommentLine.vue';
import ModalView from '../components/ModalView.vue';
import CommentModal from '../components/modals/CommentModal.vue';
import commentData from '../assets/commentData.js';

export default {
    data:function(){
        return{
            title:'(설문제목)',
            isModalViewed: false,
            commentData : commentData
        }
    },
    components: {
        TopHeader,
        CommentLine,
        CommentInput,
        ModalView,
        CommentModal
    },
    methods:{
        backLink: function(){
            this.$router.go(-1);
        },
        backMove: function(){
            setTimeout(this.backLink, 500);
        }
    }
}
</script>

<style scoped>
    .comment_num{
		color:gray;
	}
	.comment_setting {
		float:right;
        padding-right:4px;
	}
	.comment_input{
		margin-top:10px;
		border:solid 1px;
		height:40px;
		padding:2px;
	}
</style>

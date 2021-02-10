<template>
<div class="app">
    <TopHeader v-bind:propsdata="title" v-on:backPage="backMove"></TopHeader>
    <div class="input_line">
		<span>댓글</span>
		<span class="comment_num">{{commentNum}}</span>
		<span class="comment_setting btnPoint" @click="isModalViewed = true">
			<i class="fas fa-sliders-h"></i>
		</span>
        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
            <CommentModal></CommentModal>
        </ModalView>
        <CommentInput v-on:commentAdd="addNum"></CommentInput>
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
            commentData:commentData,
            commentNum : 2
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
        },
        addNum: function(){
            this.commentNum += 1;
        }
    },
    beforeMount(){
        this.commentNum = this.commentData.length;
    }
}
</script>

<style scoped>
    .input_line{
        margin: 0 1%;
    }
    .comment_num{
		color:gray;
        margin-left:1%;
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

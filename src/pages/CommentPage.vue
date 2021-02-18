<template>
<div class="app">
    <TopHeader v-bind:propsdata="title" v-on:backPage="backMove"></TopHeader>
    <div class="page-box">
    <div class="midLine">
		<span>댓글</span>
		<span class="commentNum">{{commentNum}}</span>
		<span class="setting btnPoint" @click="isModalViewed = true">
			<i class="fas fa-sliders-h"></i>
		</span>
        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
            <CommentModal></CommentModal>
        </ModalView>
        <CommentInput v-on:commentAdd="addNum"></CommentInput>
	</div>
    <CommentLine></CommentLine>
    </div>
</div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
import CommentInput from '../components/CommentInput.vue';
import CommentLine from '../components/CommentLine.vue';
import ModalView from '../components/ModalView.vue';
import CommentModal from '../components/modals/CommentModal.vue';
import commentData from '../assets/commentData.js';
import titleData from '../assets/titleData.js';

export default {
    data:function(){
        return{
            titleData : titleData,
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
            titleData.length = 0;
            this.$router.go(-1);
        },
        backMove: function(){
            setTimeout(this.backLink, 500);
        },
        addNum: function(){
            this.commentNum += 1;
        },
        scrollTop: function(){
            window.scrollTo(0,0);
        }
    },
    beforeMount(){
        this.commentNum = this.commentData.length;
        this.title = this.titleData[0];
        this.scrollTop();
    }
}
</script>

<style scoped>
    .page-box{
        padding:7px;
    }
    .midLine{
        margin: 0 1%;
    }
    .commentNum{
		color:gray;
        margin-left:1%;
	}
	.setting {
		float:right;
        padding-right:4px;
	}
	/* .comment_input{
		margin-top:10px;
		border:solid 1px;
		height:40px;
		padding:2px;
	} */
</style>

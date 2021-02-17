<template>
    <div class="app">
        <TopHeader v-bind:propsdata="title" v-on:backPage="backMove"></TopHeader>
        <ShareFeed v-for="(share, i) in shareData" v-bind:shareData="share" v-bind:key="i"></ShareFeed>
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
</template>

<script>
import TopHeader from '../components/TopHeader';
import ShareFeed from '../components/ShareFeed.vue';
import shareData from '../assets/shareData.js';
import ModalView from '../components/ModalView.vue';
import CommentModal from '../components/modals/CommentModal.vue';
import CommentLine from '../components/CommentLine.vue';
import CommentInput from '../components/CommentInput.vue';
import commentData from '../assets/commentData.js';


export default {
    data: function(){
        return{
            shareData : shareData,
            commentData : commentData,
            title: 'hi',
            isModalViewed:false,
            commentNum : 2
        }
    },
    components:{
        TopHeader,
        ShareFeed,
        CommentLine,
        ModalView,
        CommentModal,
        CommentInput
    },
    methods:{
        backLink: function(){
            shareData.length = 0;
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
        this.title = shareData[0].title;
        this.commentNum = this.commentData.length;
        this.scrollTop();
    }
}
</script>

<style scoped>
.commentNum{
		color:gray;
	}
	.setting {
		float:right;
        padding-right:4px;
	}
    .midLine{
        margin: 0 1%;
    }
</style>
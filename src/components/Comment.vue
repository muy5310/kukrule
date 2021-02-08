<template>
    <div class="comment_box">
        <span class="profile">
            <i class="fas fa-user-circle"></i>
        </span>
        <span class="owner">{{commentData.owner}}</span>
        <span class="comment_date">{{commentData.date}}</span><br>
        <div class="comment_des">{{commentData.des}}</div>
        <div class="comment_detail">	
            <span class="btn_margin likeBox">
                <i class="far fa-thumbs-up btnPoint " v-if="!commentData.like" v-on:click="clickUp"></i>
                <i class="fas fa-thumbs-up cursorPoint upPoint" v-else v-on:click="clickUp"></i>
                <label class="like_ctn">{{commentData.likeNum}}</label>
                </span>
            <span class="btn_margin">
                <i class="far fa-thumbs-down btnPoint"  v-if="!commentData.unlike" v-on:click="clickDown"></i>
                <i class="fas fa-thumbs-down cursorPoint downPoint" v-else v-on:click="clickDown"></i>
                <label class="like_ctn">{{commentData.unlikeNum}}</label>
                </span>
            <span class="btn_margin btnPoint" v-on:click="replyClick">
                <i class="far fa-comment-dots"></i>
            </span>
        </div>
        <ReplyBox v-if="commentData.replyShown"></ReplyBox>
    </div>
</template>

<script>
import ReplyBox from './ReplyBox.vue';

export default {
    name: 'comment',
    props:{
		'commentData': Object
	},
    components:{
        ReplyBox
    },
    methods:{
        replyClick: function(){
			this.commentData.replyShown = !this.commentData.replyShown;
        },
        clickUp: function(){
			this.commentData.like = !this.commentData.like;
			if(this.commentData.unlike==true){
				this.commentData.unlikeNum-=1;
			}
			this.commentData.unlike = false;
			if(this.commentData.like== true){
				this.commentData.likeNum+=1;
			}
			else{
				this.commentData.likeNum-=1;
			}
		},
		clickDown: function(){
			this.commentData.unlike = !this.commentData.unlike;
			if(this.commentData.like==true){
				this.commentData.likeNum -= 1;
			}
			this.like = false;
			if(this.commentData.unlike==true){
				this.commentData.unlikeNum+=1;
			}
			else{
				this.commentData.unlikeNum-=1;
			}
		},
    }
}
</script>

<style scoped>
    .comment_box {
        margin:10px;
        margin-top:15px;
        /* padding-top:10px; */
        /* padding-bottom: 10px; */
    }
    .comment_box:active{
        background: rgb(233, 233, 233);
    }
    .profile {
        margin:3px;
        padding-top:19px;
        margin-left:0;
        font-size: 25px;
    }
    .owner {
        font-weight: bold;
        margin-right:4px;
    }
    .comment_date {
        color: gray;
    }
    .comment_des {
        height: auto;
        overflow: auto;
        margin-bottom:3px;
    }
    .comment_detail {
        margin:10px 0;
		/* float:right; */
	}
	
    .btn_margin {
        margin:0 5%;
    }
	.like_ctn{
		margin-left:3px;
	}
	.upPoint {
		background-image: linear-gradient(to right, #71acc1 0%, #4a77d7  100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.downPoint {
		background-image: linear-gradient(to right, #9ca1b0 0%, #31343a  100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.likeBox{
		margin-left:0px;
	}
</style>
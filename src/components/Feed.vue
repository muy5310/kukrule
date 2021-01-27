<template>
    <div class="main_contents">
		<div class="content_head">
            <span class="head_title">{{postData.title}}</span>

			<button class="more_btn" @click="isModalViewed = true"><i class="fas fa-ellipsis-v"></i></button>
				<ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
					<PostModal ></PostModal>
				</ModalView>
			<span class="image_btn" v-if="imgShown">
				<i class="far fa-file-image"></i>
			</span> 
				<div class="middle_line">	
					<!-- <span>카테고리</span>  -->
					<span class="head_period">{{postData.date}}</span>
					<span class="head_name">{{postData.author}}</span>
				</div>
			</div><br>
			<div class="content_body">{{postData.caption}}
				<button class="body_detail cursorPoint" v-show="moreShown" v-if="viewmore" v-on:click="moreClick">...자세히 보기</button>
				<p class="imgBox" v-else><img class="imgSize" v-if="imgShown" v-bind:src="postData.img"></p>
				<!-- 닫기 버튼 <button class="body_detail cursorPoint" v-if="viewmore" v-on:click="moreClick">닫기</button> -->
				<br>
			</div>
			<SurveyLine></SurveyLine>
			<div class="contents_vote">
				<span class="vote_num">2.8</span>
				<span>명 투표</span>
				<span class="vote_detail">
					<span>
						<i class="far fa-heart btnPoint" v-if="liked" v-on:click="onClickBtn"></i>
						<i class="fas fa-heart cursorPoint heartPoint" v-else v-on:click="cancelClick"></i>
                        <label class="like_num">{{postlike}}</label>
					</span>					
                    <span class="share_btn btnPoint">
						<i class="fas fa-share-alt"></i>
					</span>
				</span></div><br>
				
			<div class="comment" v-on:click="moveComment"> 
				<span>
					<i class="far fa-comment-dots"></i>
				</span>
				<label class="comment_label">댓글</label>
				<span class="comment_num">608</span>
			</div>
            <Comment></Comment>
		</div>
</template>

<script>
import Comment from './Comment.vue';
import SurveyLine from './SurveyLine.vue';
import ModalView from './ModalView.vue';
import PostModal from './modals/PostModal.vue';

export default {
	name:'post',
	props:{
		'postData': Object
	},
    components:{
        Comment,
		SurveyLine,
		ModalView,
        PostModal
	},
	data:function(){
		return{
			liked:true,
			postlike:95,
			viewmore:true,
			isModalViewed: false,
			imageAttach: true,
			imgShown: false,
			moreShown: false
        }
    },
	methods:{
		moveComment: function(){
			this.$emit('commentPage')
		},
		onClickBtn: function() {
			this.liked = !this.liked;
			this.postlike += 1;
		},
		cancelClick: function(){
			this.liked = !this.liked;
			this.postlike -= 1;
		},
		moreClick: function(){
			this.viewmore = !this.viewmore;
		},
		imgRender: function() {
			if(this.postData.img != ''){
				this.imgShown = true;
			}
		},
		letterNum: function() {
			if(this.postData.caption.length > 150 || this.postData.img != '') {
				this.moreShown = true;
			}
		}
	},
	beforeMount(){
		this.imgRender();
		this.letterNum();
	}
}
</script>

<style scoped>
	/* .btn_none{
		border: none;
		background: none;
		padding:none;
	} */
    .main_contents{
		border:none;
		border-top:solid 2px gray;
		margin-top:5px;
	}
	.main_contents > div {
		margin:2%
	}
	.head_title{
		font-size:23px;
		font-weight: bold;
		margin-bottom:5px;
	}
	.image_btn{
		float:right;
		margin-top:2px;
		margin-right:3px;
	}
	.image_btn:hover{
		opacity: 0.6;
	}
	.more_btn{
		float:right;
		margin-top:5px;
		background:none;
		border:none;
		cursor: pointer;
		border-radius:5px;
	}
	.more_btn:hover{
		background: linear-gradient(to right, #fbcac9, #8ca6ce);
		color:white;
		/* background: linear-gradient(to right, #F86461, #669EF4);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent; */
	}
	.middle_line{
		margin-top:4px;
	} 
	.head_period{
		float:left;
		color:gray;
	}
	.head_name{
		float:right;
		color:gray;
	}
	.body_detail{
		background:0;
		border:0;
		color:gray;
		float: right;
	}
	.body_item {
		width:100%;
		text-align:left;
		background:0;
	}
		/* .contents_vote *{
			:0 0 0 1%;
		} */
	.heartPoint{
		background: linear-gradient(to top, #ff3557 0%, #ff7e7e 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
    .like_num{
        margin-left:3px;
        margin-right:5px;
    }
	.share_btn{
		margin-right:5px;
	}
	.vote_detail {
		float:right;
	}
		
	.comment_detail{
		float:right;
		background:0;
		border:0;
		color:gray;
	}
	.comment{
		margin-top:10px;
		margin-bottom:0px;
		text-align:center;
		cursor:pointer;
	}
	.comment:hover{
		background: rgb(233, 233, 233);
		opacity: 0.7;
	}
	.comment_label{
		margin:0 4px;
		cursor: pointer;
	}
	.imgBox{
		margin:0;
		/* text-align: center; */
	}
	.imgSize{
		margin: 20px 0 0 0;
		width:70%;
	}
</style>
<template>
    <div class="main_contents">
		<div class="content_head">
            <div class="head_title">설문제목</div>
				<div>	
					<!-- <span>카테고리</span>  -->
					<span class="head_period">설문기간</span>
					<span class="head_name">설문작성자</span>
				</div>
			</div><br>
			<div class="content_body">설문본문
				<button class="body_detail">...자세히 보기</button>
			</div>
			<SurveyLine></SurveyLine>
			<div class="contents_vote">
				<span class="vote_num">2.8</span>
				<span>명 투표</span>
				<span class="vote_detail">
					<span>
						<i class="far fa-heart"></i>
						<label class="like_num">95</label>
					</span>					
                    <span>
						<i class="fas fa-share-alt"></i>
					</span>
				</span></div><br>
				
			<div class="comment"> 
				<span>
					<i class="far fa-comment-dots"></i>
				</span>
				<label>댓글</label>
				<span class="comment_num">608</span>
			</div>
            <Comment></Comment>
		</div>
</template>

<script>
import Comment from './Comment.vue';
import SurveyLine from './SurveyLine.vue';

export default {
    components:{
        Comment,
		SurveyLine
    }
}
</script>

<style scoped>
    .main_contents{
		border-style:solid;
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
	}
	.body_item {
		width:100%;
		text-align:left;
		background:0;
	}
		/* .contents_vote *{
			:0 0 0 1%;
		} */
    .like_num{
        margin-left:3px;
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
	}
</style>
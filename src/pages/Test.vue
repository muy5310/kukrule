<template>
    <div class="main_contents">
		<div class="content_head">
            <span class="head_title">설문제목</span>
			<button class="more_btn"><i class="fas fa-ellipsis-v"></i></button>
				<div class="middle_line">	
					<!-- <span>카테고리</span>  -->
					<span class="head_period">설문기간</span>
					<span class="head_name">설문작성자</span>
				</div>
			</div><br>
			<div class="content_body">설문본문
				<button class="body_detail cursorPoint">...자세히 보기</button>
			</div>
			<div class="contents_vote">
				<span class="vote_num">2.8</span>
				<span>명 투표</span>
				<span class="vote_detail">
					<span>
						<i class="far fa-heart btnPoint" v-if="liked" @click="onClickBtn"></i>
						<i class="fas fa-heart cursorPoint heartPoint" v-else @click="onClickBtn"></i>
                        <label class="like_num">95</label>
					</span>					
                    <span class="share_btn btnPoint">
						<i class="fas fa-share-alt"></i>
					</span>
				</span></div><br>
				
		</div>
</template>

<script>

export default {
    components:{
	},
	data:function(){
		return{
            liked:true
        }
    },
	methods:{
		// moveComment: function(){
		// 	this.$emit('commentPage')
		// },
		onClickBtn: function() {
            this.liked = !this.liked;
		}
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
	}
	.body_item {
		width:100%;
		text-align:left;
		background:0;
	}
		/* .contents_vote *{
			:0 0 0 1%;
		} */
	.i.press{
		animation: size .4s;
		color:blueviolet;
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
</style>
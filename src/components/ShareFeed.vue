<template>
    <div class="main_contents">
		<div class="content_head">
            <span class="head_title">{{shareData.title}}</span>

			<button class="more_btn" @click="isModalViewed = true"><i class="fas fa-ellipsis-v"></i></button>
				<ModalView v-if="isModalViewed" @close-modal="isModalViewed = false" >
					<PostModal v-on:deleteSubmit="deleteRe"></PostModal>
				</ModalView>
			<span class="image_btn" v-if="shareData.imgShown">
				<i class="far fa-file-image"></i>
			</span> 
				<div class="middle_line">	
					<!-- <span>카테고리</span>  -->
					<span class="head_period">{{shareData.date}}</span>
					<span class="head_name">{{shareData.author}}</span>
				</div>
			</div><br>
			<div class="content_body">
				<p>{{shareData.caption}}
				<br>
				<img class="imgSize" v-if="shareData.imgShown" v-bind:src="shareData.img">
				</p>
				<!-- 자세히보기 버튼<button class="body_detail cursorPoint" v-show="shareData.moreShown" v-if="shareData.viewmore" v-on:click="[shareData.moreClick=true, viewControl()]">...자세히 보기</button> -->
				<!-- 닫기 버튼 <button class="body_detail cursorPoint" v-if="shareData.viewmore" v-on:click="shareData.moreClick">닫기</button> -->
			</div>
			<SurveyItem v-for="(item, i) in shareData.items" v-bind:itemList="item" v-bind:key="i"></SurveyItem>
			<div class="contents_vote">
				<span class="vote_num">2.8</span>
				<span>명 투표</span>
				<span class="vote_detail">
					<span>
						<i class="far fa-heart btnPoint" v-if="!shareData.liked" v-on:click="onClickBtn"></i>
						<i class="fas fa-heart cursorPoint heartPoint" v-else v-on:click="cancelClick"></i>
                        <label class="like_num">{{shareData.postlike}}</label>
					</span>					
                    <span class="post_btn btnPoint" v-on:click="shareClick">
						<i class="fas fa-share-alt"></i>
					</span>
				</span></div><br>
		</div>
</template>

<script>
import ModalView from './ModalView.vue';
import PostModal from './modals/PostModal.vue';
import SurveyItem from './SurveyItem.vue';

export default {
	name:'share',
	props:{
		'shareData': Object
    },
    components:{
		SurveyItem,
		ModalView,
        PostModal
	},
	data:function(){
		return{
			isModalViewed: false
        }
	},
	methods:{
		moveComment: function(){
			this.$emit('commentPage')
		},
		onClickBtn: function() {
			this.shareData.liked = !this.shareData.liked;
			this.shareData.postlike += 1;
		},
		cancelClick: function(){
			this.shareData.liked = !this.shareData.liked;
			this.shareData.postlike -= 1;
        },
		deleteRe: function() {
            confirm('삭제하시겠습니까?');
			// var answer = confirm('삭제하시겠습니까?');
			// if(answer == true){
			// 	this.$emit('deleteDo');
			// setTimeout(this.dataCheck, 300);
			// }
			// else{
			// 	this.isModalViewed = false;
			// }
		},
		dataCheck: function(){
			this.isModalViewed = false;		
        },
        shareClick: function() {
            alert('URL이 복사되었습니다.');
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
		/* border-bottom:solid 2px gray; */
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
	.desHidden{
		height: 21px;
		width: 70%;
		overflow: hidden;
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
		margin-top:-37px;
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
	.post_btn{
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
		/* 피드에서 이미지 가운데 정렬 */
		/* text-align: center; */
	}
	.imgSize{
		margin: 20px 2% 0 2%;
		width:94%;
	}
</style>
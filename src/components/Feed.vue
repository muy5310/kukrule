<template>
<div class="back-div" :class="{adver : postData.adver, public : postData.public}">
    <div class="main-contents">
		<div>
            <span class="title">{{postData.title}}</span>
			<button class="setBtn borderNone" @click="isModalViewed = true"><i class="fas fa-ellipsis-v"></i></button>
				<ModalView v-if="isModalViewed" @close-modal="isModalViewed = false" >
					<PostModal v-on:deleteSubmit="deleteRe" v-on:editSubmit="editClick"></PostModal>
				</ModalView>
			<span class="imageIcon" v-if="postData.imgShown">
				<i class="far fa-file-image"></i>
			</span> 
				<div class="middle-line">	
					<!-- <span>카테고리</span>  -->
					<span class="peroid">{{postData.date}}</span>
					<span class="poster">{{postData.author}}</span>
				</div>
			</div><br>
			<div>
				<p v-bind:class="desDetail">{{postData.caption}}
				<br>
				<img class="imgSize" v-if="postData.imgShown" v-bind:src="postData.img">
				</p>
				<button class="moreBtn borderNone cursorPoint nanumsquare" v-show="postData.moreShown" v-on:click="[postData.moreClick=true, viewControl()]">...더 보기</button>
				<!-- 닫기 버튼 <button class="moreBtn cursorPoint" v-if="postData.viewmore" v-on:click="postData.moreClick">닫기</button> -->
			</div>
			<SurveyItem v-for="(item, i) in postData.items" v-bind:itemList="item" v-bind:key="i"></SurveyItem>
			<div>
				<span class="voteNum">2.8천</span>
				<span>명 투표</span>
				<span class="voteDetail">
					<span>
						<i class="far fa-heart btnPoint heartIcon" v-if="!postData.liked" v-on:click="onClickBtn"></i>
						<i class="fas fa-heart cursorPoint heartPoint" v-else v-on:click="cancelClick"></i>
                        <label class="likeNum">{{postData.postlike}}</label>
					</span>					
                    <span class="shareBtn btnPoint" v-on:click="shareClick">
						<i class="fas fa-share-alt"></i>
					</span>
				</span></div><br>
			<div class = "feedComment" v-on:click="moveComment">	
			<div class="comment" v-on:click="moveComment"> 
				<span>
					<i class="far fa-comment-dots"></i>
				</span>
				<label class="commentLabel">댓글</label>
				<span>{{commentNum}}</span>
			</div>
            <Comment v-bind:commentData="comment"></Comment>
			</div>
		</div>
</div>
</template>

<script>
import Comment from './Comment.vue';
import ModalView from './ModalView.vue';
import PostModal from './modals/PostModal.vue';
import SurveyItem from './SurveyItem.vue';
import shareData from '../assets/shareData.js';
import titleData from '../assets/titleData.js';
import commentData from '../assets/commentData.js';
export default {
	name:'post',
	props:{
		'postData': Object
	},
    components:{
        Comment,
		SurveyItem,
		ModalView,
        PostModal
	},
	data:function(){
		return{
			isModalViewed: false,
			shareData: shareData,
			titleData: titleData,
			//항상 처음 입력된 댓글이 피드에 뜨도록
			comment : commentData.slice(-1)[0],
			commentNum: 2,
			commentData: commentData
        }
	},
	computed: {
		desDetail: function() {
			return this.postData.moreClick? null : 'desHidden';
		}
	},
	methods:{
		moveComment: function(){
			var newTitle = this.postData.title;
			titleData.unshift(newTitle);
			this.$emit('commentPage')
		},
		onClickBtn: function() {
			this.postData.liked = !this.postData.liked;
			this.postData.postlike += 1;
		},
		cancelClick: function(){
			this.postData.liked = !this.postData.liked;
			this.postData.postlike -= 1;
		},
		viewControl: function(){
			this.postData.moreShown = false;
		},
		// imgRender: function() {
		// 	if(this.postData.img != 'none'){
		// 		this.postData.imgShown = true;
		// 	}
		// 	else{
		// 		this.postData.imgShown = false;
		// 	}
		// },
		// letterNum: function() {
		// 	if(this.postData.caption.length > 150 || this.postData.img != 'none') {
		// 		this.postData.moreShown = true;
		// 	}
		// 	else{
		// 		this.postData.moreShown = false;
		// 	}
		// },
		deleteRe: function() {
			var answer = confirm('삭제하시겠습니까?');
			if(answer == true){
				this.$emit('deleteDo');
			setTimeout(this.dataCheck, 300);
			}
			else{
				this.isModalViewed = false;
			}
		},
		dataCheck: function(){
			this.isModalViewed = false;		
		},
		editClick: function(){
			this.$router.push({path:'/edit'});
		},
		shareClick : function() {
			var newShare = {
				title:this.postData.title,
                caption:this.postData.caption,
                date:this.postData.date,
                img : this.postData.img,
                items : this.postData.items,
                author:this.postData.author,
                liked : this.postData.liked,
                postlike : this.postData.postlike,
                moreClick : this.postData.moreClick,
                moreShown : this.postData.moreShown,
                imgShown : this.postData.imgShown
			}
			shareData.unshift(newShare);
			this.$copyText('http://localhost:8080/#/share'); //서버 주소에 따라 url 바꿔줘야함.
			alert('URL이 복사되었습니다.');
			this.$router.push({path:'/share'});
		}		
	},
    beforeMount(){
        this.commentNum = this.commentData.length;
    }
	
	// beforeMount(){
	// 	this.imgRender();
	// 	this.letterNum();
	// }
}
</script>

<style scoped>
	/* .btn_none{
		border: none;
		background: none;
		padding:none;
	} */
	.back-div{
		background: #EAEAEA;
		padding:13px;
		border:2px solid #5828C6;
		border-radius:25px;
		margin:15px 10px 0 10px;
	}
	.adver{
		background:  #ff8c20;
	}
	.public{
		background:  #C869E9;
	}
    .main-contents{
		/* border-top:solid 2px gray; */
		border-radius:25px;
		padding:20px;
		background: white;
	}
	.main-contents > div {
		margin:2%
	}
	.title{
		font-size:18px;
		font-weight: bold;
		margin-bottom:5px;
	}
	.imageIcon{
		float:right;
		margin-top:3px;
		margin-right:3px;
	}
	.imageIcon:hover{
		opacity: 0.6;
	}
	.desHidden{
		height: 19px;
		width: 70%;
		overflow: hidden;
	}
	.setBtn{
		float:right;
		margin-top:2.5px;
		background:none;
		border:none;
		cursor: pointer;
		border-radius:5px;
	}
	.setBtn:hover{
		/* background: linear-gradient(to right, #fbcac9, #8ca6ce);
		color:white; */
		opacity: 0.7;
		/* background: linear-gradient(to right, #F86461, #669EF4);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent; */
	}
	.middle-line{
		margin-top:4px;
	} 
	.peroid{
		font-size:14px;
		float:left;
		color:gray;
	}
	.poster{
		font-size:14px;
		margin-top:-2px;
		float:right;
		color:gray;
	}
	.moreBtn{
		background:0;
		border:0;
		color:gray;
		margin-top:-34px;
		float: right;
	}
		/* .contents_vote *{
			:0 0 0 1%;
		} */
	.heartIcon{
		color:#5828C6;
	}
	.heartPoint{
		/* 빨강 하트 */
		/* background: linear-gradient(to top, #ff3557 0%, #ff7e7e 100%); */
		background: linear-gradient(to top, #ff8c20 0%, rgb(245, 204, 71) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
    .likeNum{
        margin-left:3px;
        margin-right:5px;
    }
	.shareBtn{
		margin-right:5px;
	}
	.voteDetail {
		float:right;
	}
	.comment{
		margin-top:10px;
		margin-bottom:0px;
		text-align:center;
		/* cursor:pointer; */
	}
	/* .comment:hover{
		background: rgb(233, 233, 233);
		opacity: 0.7;
	} */
	.commentLabel{
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
	.feedComment{
		cursor: pointer;
	}
	.feedComment:hover{
		background: rgb(233, 233, 233);
		opacity: 0.7;
	}
</style>
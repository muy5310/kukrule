<template>
    <div class="main-contents">
		<div>
            <span class="title">{{shareData.title}}</span>

			<button class="setBtn borderNone" @click="isModalViewed = true"><i class="fas fa-ellipsis-v"></i></button>
				<ModalView v-if="isModalViewed" @close-modal="isModalViewed = false" >
					<PostModal v-on:deleteSubmit="deleteRe"></PostModal>
				</ModalView>
			<span class="imageIcon" v-if="shareData.imgShown">
				<i class="far fa-file-image"></i>
			</span> 
				<div class="middle-line">	
					<!-- <span>카테고리</span>  -->
					<span class="period">{{shareData.date}}</span>
					<span class="poster">{{shareData.author}}</span>
				</div>
			</div><br>
			<div>
				<p>{{shareData.caption}}
				<br>
				<img class="imgSize" v-if="shareData.imgShown" v-bind:src="shareData.img">
				</p>
				<!-- 더 보기 버튼<button class="moreBtn cursorPoint" v-show="shareData.moreShown" v-if="shareData.viewmore" v-on:click="[shareData.moreClick=true, viewControl()]">...자세히 보기</button> -->
				<!-- 닫기 버튼 <button class="moreBtn cursorPoint" v-if="shareData.viewmore" v-on:click="shareData.moreClick">닫기</button> -->
			</div>
			<SurveyItem v-for="(item, i) in shareData.items" v-bind:itemList="item" v-bind:key="i"></SurveyItem>
			<div>
				<span class="voteNum">2.8</span>
				<span>명 투표</span>
				<span class="voteDetail">
					<span>
						<i class="far fa-heart btnPoint" v-if="!shareData.liked" v-on:click="onClickBtn"></i>
						<i class="fas fa-heart cursorPoint heartPoint" v-else v-on:click="cancelClick"></i>
                        <label class="likeNum">{{shareData.postlike}}</label>
					</span>					
                    <span class="shareBtn btnPoint" v-on:click="shareClick">
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
            alert('이 페이지에선 삭제할 수 없습니다.');
			this.isModalViewed = false;	
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
    .main-contents{
		border:none;
		/* border-bottom:solid 2px gray; */
		margin-top:5px;
	}
	.main-contents > div {
		margin:2%
	}
	.title{
		font-size:19px;
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
		height: 21px;
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
		opacity:0.7;
		/* background: linear-gradient(to right, #F86461, #669EF4);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent; */
	}
	.middle-line{
		margin-top:4px;
	} 
	.period{
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
	/* .moreBtn{
		background:0;
		border:0;
		color:gray;
		margin-top:-37px;
		float: right;
	} */
	.body_item {
		width:100%;
		text-align:left;
		background:0;
	}
	.heartPoint{
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
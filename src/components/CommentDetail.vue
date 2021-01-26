<template>
    <div class="comment_detail">	
        <span class="btn_margin likeBox">
		<i class="far fa-thumbs-up btnPoint " v-if="like" v-on:click="clickUp"></i>
		<i class="fas fa-thumbs-up cursorPoint upPoint" v-else v-on:click="clickUp"></i>
		<label class="like_ctn">{{likeNum}}</label>
		</span>

		<span class="btn_margin">
			<i class="far fa-thumbs-down btnPoint"  v-if="unlike" v-on:click="clickDown"></i>
			<i class="fas fa-thumbs-down cursorPoint downPoint" v-else v-on:click="clickDown"></i>
			<label class="like_ctn">{{unlikeNum}}</label>
		</span>
		<span class="btn_margin btnPoint">
			<i class="far fa-comment-dots"></i>
		</span>
	</div>
</template>

<script>
export default {
	data:function(){
		return{
			like:true,
			unlike:true,
			likeNum:34,
			unlikeNum: 8
		}
	},
	methods:{
		clickUp: function(){
			this.like = !this.like;
			if(this.unlike==false){
				this.unlikeNum-=1;
			}
			this.unlike = true;
			if(this.like==false){
				this.likeNum+=1;
			}
			else{
				this.likeNum-=1;
			}
		},
		clickDown: function(){
			this.unlike = !this.unlike;
			if(this.like==false){
				this.likeNum -= 1;
			}
			this.like = true;
			if(this.unlike==false){
				this.unlikeNum+=1;
			}
			else{
				this.unlikeNum-=1;
			}
		}
	}
}
</script>

<style scoped>
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
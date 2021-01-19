<template>
    <div class="comment_detail">	
        <span class="btn_margin">
		<i class="far fa-thumbs-up btnPoint" v-if="like" v-on:click="clickUp"></i>
		<i class="fas fa-thumbs-up cursorPoint upPoint" v-else v-on:click="clickUp"></i>
		<label class="like_num">{{likenum}}</label>
		</span>

		<span class="btn_margin">
			<i class="far fa-thumbs-down btnPoint"  v-if="unlike" v-on:click="clickDown"></i>
			<i class="fas fa-thumbs-down cursorPoint downPoint"  v-else v-on:click="clickDown"></i>
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
			likenum:34
		}
	},
	methods:{
		clickUp: function(){
			this.like = !this.like;
			this.unlike = true;
			if(this.like==false){
				this.likenum+=1;
			}
			else{
				this.likenum-=1;
			}
		},
		clickDown: function(){
			this.unlike = !this.unlike;
			if(this.like==false){
				this.likenum -= 1;
			}
			this.like = true;
			
		}
	}
}
</script>

<style scoped>
    .comment_detail {
        margin-bottom:10px;
		float:right;
	}
    .btn_margin {
        margin:0 5px;
    }
	.like_num{
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
</style>
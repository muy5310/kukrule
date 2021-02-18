<template>
<div class="commentInput">
    <span class="profile">
        <i class="fas fa-user-circle"></i>
    </span>
    <input class="nanumsquare" type="text" placeholder="댓글을 입력하세요." v-model="newDes">
        <span class="commentBtn btnPoint" v-on:click="submitComment">
            <i class="far fa-paper-plane"></i>
        </span>
</div>
</template>

<script>
import commentData from '../assets/commentData.js';

export default {
    data:function(){
        return{
            newDes:'',
            commentData : commentData
        }
    },
    methods:{
        submitComment: function(){
            if(this.newDes==''){
                alert('내용을 입력해주세요')
            }
            else{
            var date = new Date();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hour = date.getHours();
            var minute = date.getMinutes();
            if (month<10){
                month = '0' + month
            }
            if (day<10){
                day = '0' + day
            }
            if (hour<10){
                hour = '0' + hour
            }
            if (minute<10){
                minute = '0' + minute
            }
            var newComment = {
                owner: '감자',
                date: month + '/' + day + ' ' + hour + ':' + minute,
                des: this.newDes,
                likeNum:0,
                unlikeNum:0,
                like:false,
                unlike:false,
                replyShown:false
            }
            commentData.unshift(newComment);
            this.$emit('commentAdd');
            this.newDes='';
            }
        }
    }
}
</script>

<style scoped>
.commentInput{
		margin-top:10px;
		border:solid 1px;
		height:40px;
		padding:2px;
	}
.commentInput > input{
		background:none;
		border:none;
        font-size:14px;
		height:40px;
		width:77%;
	}
    .commentBtn{
        float:right;
        margin-top:8px;
        margin-right:7px;
    }
    .profile{
        font-size:20px;
        margin:3px;
    }

</style>
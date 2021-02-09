<template>
<div class="comment_input">
    <span class="comment_profile">
        <i class="fas fa-user-circle"></i>
    </span>
    <input type="text" placeholder="댓글을 입력하세요." v-model="newDes">
        <span class="comment_btn btnPoint" v-on:click="submitComment">
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
.comment_input > input{
		background:none;
		border:none;
		height:40px;
		width:77%;
	}
    .comment_btn{
        float:right;
        margin-top:8px;
        margin-right:7px;
    }
    .comment_profile{
        font-size:20px;
        margin:3px;
    }

</style>
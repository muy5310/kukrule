<template>
<div class="app">
    <TopHeader v-bind:propsdata="title" v-on:mainPage="mainMove"></TopHeader>
    <div id="input_line">
		<span>댓글</span>
		<span class="comment_num">12</span>
		<span class="comment_setting btnPoint">
			<i class="fas fa-sliders-h"></i>
		</span>
		<div class="comment_input">
			<span class="comment_profile">
                <i class="fas fa-user-circle"></i>
            </span>
            <input type="text" placeholder="댓글을 입력하세요.">
            <span class="comment_btn btnPoint">
                <i class="far fa-paper-plane"></i>
            </span>
        </div>
	</div>
    <CommentLine></CommentLine>
</div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
import CommentLine from '../components/CommentLine.vue';

export default {
    data:function(){
        return{
            title:'(설문제목)'
        }
    },
    components: {
        TopHeader,
        CommentLine
    },
    methods:{
        mainLink: function(){
            this.$router.go(-1);
        },
        mainMove: function(){
            setTimeout(this.mainLink, 500);
        }
    }
}
</script>

<style scoped>
    .comment_num{
		color:gray;
	}
	.comment_setting {
		float:right;
        padding-right:4px;
	}
	.comment_input{
		margin-top:10px;
		border:solid 1px;
		height:40px;
		padding:2px;
	}
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

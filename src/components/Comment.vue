<template>
    <div class="comment_box">
        <span class="profile">
            <i class="fas fa-user-circle"></i>
        </span>
        <span class="owner">계란찜</span>
        <span class="comment_date">01/06 18:21</span><br>
        <div class="comment_des">Shoes on, get up in the morn' Cup of milk, let's rock and roll King Kong, kick the drum</div>
        <CommentDetail></CommentDetail>
    </div>
</template>
<script>
import CommentDetail from './CommentDetail.vue';

export default {
    components:{
        CommentDetail
    }
}
</script>

<style scoped>
    .comment_box {
        margin:10px;
        margin-top:15px;
        /* padding-top:10px; */
        /* padding-bottom: 10px; */
    }
    .comment_box:active{
        background: rgb(233, 233, 233);
    }
    .profile {
        margin:3px;
        padding-top:19px;
        margin-left:0;
        font-size: 25px;
    }
    .owner {
        font-weight: bold;
        margin-right:4px;
    }
    .comment_date {
        color: gray;
    }
    .comment_des {
        height: auto;
        overflow: auto;
        margin-bottom:3px;
    }
</style>
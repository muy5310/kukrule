<template>
    <div class="Rebox">
        ㄴ
		<span class="profile">
            <i class="fas fa-user-circle"></i>
        </span>
        <span class="owner">오선당</span>
        <span class="comment_date">01/06 20:21</span><br>
        <div class="comment_des">안녕하세요</div>
	</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .Rebox{
    margin-left:30%;
    color:gray;
    }
    .comment_box:active{
        background: rgb(233, 233, 233);
    }
    .profile {
        margin:3px;
        padding-top:19px;
        margin-left:0;
        font-size: 20px;
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
        margin:0 0 3px 5%;
    }
</style>
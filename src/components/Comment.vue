<template>
    <div class="comment_box">
            <span class="profile">
                <i class="fas fa-user-circle"></i>
            </span>
            <span class="owner">계란찜</span>
            <span class="comment_date">01/06 18:21</span><br>
            <div class="comment_des">Shoes on, get up in the morn'
Cup of milk, let's rock and roll
King Kong, kick the drum, rolling on like a Rolling Stone
			</div>
            <div class="comment_detail">	
            <span class="btn_margin">
			<i class="far fa-thumbs-up"></i>
			<label class="like_num">95</label>
			</span>

			<span class="btn_margin">
				<i class="far fa-thumbs-down"></i>
			</span>
			<span class="btn_margin">
				<i class="far fa-comment-dots"></i>
			</span>

		</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .comment_box {
        margin:10px;
        padding-top:10px;
        /* padding-bottom: 10px; */
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
	.comment_detail {
        margin-bottom:10px;
		float:right;
	}
    .btn_margin {
        margin:0 5px;
    }
</style>
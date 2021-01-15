<template>
    <div class="comment_detail">	
        <span class="btn_margin">
		<i class="far fa-thumbs-up cursorPoint"></i>
		<label class="like_num">95</label>
		</span>

		<span class="btn_margin cursorPoint">
			<i class="far fa-thumbs-down"></i>
		</span>
		<span class="btn_margin cursorPoint">
			<i class="far fa-comment-dots"></i>
		</span>
	</div>
</template>

<script>
export default {

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
</style>
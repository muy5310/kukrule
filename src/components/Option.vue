<template>
    <div id = "post_opt">
		<p id="opt_title">옵션</p>
		<div class="optPoint">
		<label class="opt_detail">비회원 참여</label>
		<input type="checkbox" class="opt_func" name="post_nonmember" checked="checked"><br>
		</div>	
		<div class="optPoint">
		<label class="opt_detail">댓글 허용</label>
		<input type="checkbox" class="opt_func" name="post_comment" checked="checked"><br>
		</div>	
		<div class="optPoint">	
		<label class="opt_detail">설문조사 공개</label>
		<input type="checkbox" class="opt_func" name="post_private" checked="checked"><br>
		</div>	
		<div class="optPoint">
		<label class="opt_detail">중복 답변 허용</label>
		<input type="checkbox" class="opt_func" name="post_overlap"><br>
		</div>	
		<div class="optPoint">
		<label class="opt_detail">투표 종료 시간</label>
		<input type="datetime-local" class="opt_func"  name="post_time"><br>
		</div>	
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #post_opt{
		margin: 0 2%;
		color: rgb(39, 39, 46);
	}
	#opt_title {
		font-weight: bold;
	}
	.opt_func{
		cursor:pointer;
		float:right;
	}
	.optPoint{
		cursor: pointer;
	}
	.optPoint:hover{
		background: rgb(233, 233, 233);
		opacity: 0.7;
	}
</style>
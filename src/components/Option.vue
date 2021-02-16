<template>
    <div class="option-box">
		<p class="option">옵션</p>
		<div class="optLine">
		<label class="optText">비회원 참여</label>
		<input type="checkbox" class="optCheck" name="nonmember" checked="checked"><br>
		</div>	
		<div class="optLine">
		<label class="optText">댓글 허용</label>
		<input type="checkbox" class="optCheck" name="comment" checked="checked"><br>
		</div>	
		<div class="optLine">	
		<label class="optText">설문조사 공개</label>
		<input type="checkbox" class="optCheck" name="private" checked="checked"><br>
		</div>	
		<div class="optLine">
		<label class="optText">중복 답변 허용</label>
		<input type="checkbox" class="optCheck" name="overlap"><br>
		</div>	
		<div class="optLine">
		<label class="optText">투표 종료 시간</label>
		<input type="datetime-local" class="optCheck"  name="endtime"><br>
		</div>	
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .option-box{
		margin: 0 2%;
		color: rgb(39, 39, 46);
	}
	.option {
		font-weight: bold;
	}
	.optCheck{
		cursor:pointer;
		float:right;
	}
	.optLine{
		cursor: pointer;
	}
	.optLine:hover{
		background: rgb(233, 233, 233);
		opacity: 0.7;
	}
</style>
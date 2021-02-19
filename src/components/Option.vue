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
		<input type="datetime-local" class="voteDate optCheck nanumsquare"  name="endtime"><br>
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
		padding:0 10px;
	}
	.option {
		font-weight: bold;
	}
	.optText{
		margin-right: 10px;
	}
	.optCheck{
		cursor:pointer;
		float:right;
	}
	.optLine{
		cursor: pointer;
		margin-top:3px;
	}
	.optLine:hover{
		background: rgb(233, 233, 233);
		opacity: 0.7;
	}
	.voteDate{
		width: 120px;
	}
</style>
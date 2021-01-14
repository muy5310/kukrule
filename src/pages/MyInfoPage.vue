<template>
    <div class="app">
        <div class="top_header">
        <span class="top_back">
			<i class="fas fa-times"></i>
		</span>
		<label class="top_title">내 정보</label>
        <span id="my_complete">
			<i class="fas fa-check"></i>
		</span>
		<!-- <label class="complete_btn shadow">내 정보</label> -->
        </div>
        <AutoLogin></AutoLogin><br>
        <div id="mybtn_box">
            <button class="my_btn my_survey shadow" type="button">나의 설문</button>
            <button class="my_btn my_choice shadow" type="button">나의 선택</button>
        </div>
        <TimeLine></TimeLine>
    </div>
</template>

<script>
import AutoLogin from '../components/AutoLogin.vue';
import TimeLine from '../components/TimeLine.vue';
export default {
    components:{
        AutoLogin,
        TimeLine
    }
}
</script>

<style scoped>
	#my_complete {
		font-weight: bold;
		color:white;
        float: right;
    }
    .my_btn{
        width: 48%;
        margin:1%;
        height:53px;
        font-weight: bold;
        font-size:16px;
        border:none;
        border-radius:2px;
    }
    .my_survey{
        background: linear-gradient(120deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
    }
    .my_choice{
        background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    }
</style>
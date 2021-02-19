<template>
    <div class="app">
        <div class="topHeader shadow">
        <span class="topBack" v-on:click="backMove">
			<i class="fas fa-times"></i>
		</span>
		<label class="topTitle">내 정보</label>
        <span class="complete" v-on:click="backMove">
			<i class="fas fa-check"></i>
		</span></div>
        <div class="infoBox">
            <div class="myProfile cursorPoint">
                <img class="profileImg" src="../image/profile.jpg">
                <div>Nickname</div>
            </div>
            <div class="numBox cursorPoint">
                <span class="mynum">5</span>
                <label class="numLabel cursorPoint">나의 설문</label>
            </div>
                
            <div class="numBox cursorPoint">
                <span class="mynum">32</span>
                <label class="numLabel cursorPoint">나의 선택</label>
            </div>
        </div>
        <div class="centerSet inputBox">
            <label>ID</label>
            <input class="userInput" type="text">
            <label class="pwLabel">PW</label>
            <input class="userInput" type="password">
        </div>
		<!-- <label class="complete_btn shadow">내 정보</label> -->
        
        <AutoLogin></AutoLogin><br>
        <div class="mybtnBox">
            <button class="mybtn mySurvey shadow cursorPoint borderNone" type="button">나의 설문</button>
            <button class="mybtn myChoice shadow cursorPoint borderNone" type="button">나의 선택</button>
        </div>
        <TimeLine v-on:receiveEvent="commentMove"></TimeLine>
    </div>
</template>

<script>
import AutoLogin from '../components/AutoLogin.vue';
import TimeLine from '../components/TimeLine.vue';

export default {
    components:{
        AutoLogin,
        TimeLine
    },
    methods:{
        backLink: function(){
            this.$router.go(-1);
        },
        backMove: function(){
            setTimeout(this.backLink, 500);
        },
        commentLink:function(){
        this.$router.push({path:'/comment'});
        },
        commentMove: function(){
        setTimeout(this.commentLink, 500);
        },
        scrollTop: function(){
            window.scrollTo(0,0);
        }
    },
    beforeMount(){
        this.scrollTop();
    }
}
</script>

<style scoped>
	.complete {
		font-weight: bold;
		color:white;
        float: right;
        cursor: pointer;
    }
    .complete:hover{
        background: linear-gradient(120deg,rgb(255, 202, 128) 0%, #ff7920 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .infoBox{
        padding-top:20px;
        text-align: center;
        justify-content: center;
        display:flex;
        flex-direction: row;
    }
    .myProfile{
        display:flex;
        flex-direction: column;
        width:30%;
        margin-right: 5%;
    }
    .profileImg{
        width:100%;
        border-radius:50%;
        margin-bottom: 10px;
    }
    .numBox{
        display:flex;
        flex-direction: column;
        margin:0 3%;
        justify-content: center;
        padding-bottom:35px;
    }
    .mynum{
        font-size:30px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .inputBox{
        margin:20px 0;
    }
    .userInput{
        border:none;
        border-bottom: solid 1px gray;
        margin:0 5px;
        width:33%;
    }
    .pwLabel{
        margin-left:5%;
    }
    .mybtnBox{
        margin:20px 0;
        margin-bottom: 0px;
    }
    .mybtn{
        width: 48%;
        margin:1%;
        height:53px;
        font-weight: bold;
        font-size:16px;
        border:none;
        border-radius:2px;
    }
    .mySurvey{
        font-family: 'NanumSquare', sans-serif !important;
        /* background: linear-gradient(120deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%); */
        /* background: linear-gradient(120deg, #ffda36 0%, #ffef5a 99%, #ffde85 100%);*/
        background: linear-gradient(120deg, #f7bb3a 0%, #fcd27a 99%, #fdd68e 100%); 
    }
    .myChoice{
        font-family: 'NanumSquare', sans-serif !important;
        /* background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); */
        background: linear-gradient(120deg, #d8a1fd 0%, #eec2fb 100%);
    }
</style>
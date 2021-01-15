<template>
    <div class="app">
        <div class="top_header">
        <span class="top_back cursorPoint" v-on:click="backMove">
			<i class="fas fa-times"></i>
		</span>
		<label class="top_title">내 정보</label>
        <span class="my_complete cursorPoint">
			<i class="fas fa-check"></i>
		</span></div>
        <div class="myinfo_box">
            <div class="myinfo_profile cursorPoint">
                <img id="profile_icon" src="../image/profile.jpg">
                <div>Nickname</div>
            </div>
            <div class="mynum_box cursorPoint">
                <span class="mynum">5</span>
                <label class="mynum_label cursorPoint">나의 설문</label>
            </div>
                
            <div class="mynum_box cursorPoint">
                <span class="mynum">32</span>
                <label class="mynum_label cursorPoint">나의 선택</label>
            </div>
        </div>
        <div class="center_set input_box">
            <label>ID</label>
            <input class="myinfo_input" type="text">
            <label id="pw_text">PW</label>
            <input class="myinfo_input" type="text">
        </div>
		<!-- <label class="complete_btn shadow">내 정보</label> -->
        
        <AutoLogin></AutoLogin><br>
        <div id="mybtn_box">
            <button class="my_btn my_survey shadow cursorPoint" type="button">나의 설문</button>
            <button class="my_btn my_choice shadow cursorPoint" type="button">나의 선택</button>
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
        }
    }
}
</script>

<style scoped>
	.my_complete {
		font-weight: bold;
		color:white;
        float: right;
    }
    .myinfo_box{
        text-align: center;
        justify-content: center;
        display:flex;
        flex-direction: row;
    }
    .myinfo_profile{
        display:flex;
        flex-direction: column;
        width:30%;
        margin-right: 5%;
    }
    #profile_icon{
        width:100%;
        border-radius:50%;
        margin-bottom: 10px;
    }
    .mynum_box{
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
    .input_box{
        margin:20px 0;
    }
    .myinfo_input{
        border:none;
        border-bottom: solid 1px gray;
        margin:0 5px;
        width:33%;
    }
    #pw_text{
        margin-left:5%;
    }
    #mybtn_box{
        margin:20px 0;
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
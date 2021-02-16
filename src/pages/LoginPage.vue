<template>
<div class="container">
        <p class="title">국룰(國rule)</p>
        <div>
            <input class="userInput" type="text" placeholder="이메일주소 입력" id="userid"><br>
            <input class="userInput" type="password" placeholder="비밀번호 입력" id="userpw"><br>
            <button class="loginBtn cursorPoint" type="submit" v-on:click="mainMove">로그인</button>
        </div>
        <div>
            <AutoLogin></AutoLogin>
            <span>
				<a class="findInfo" href="">비밀번호 찾기</a>
				<a class="findInfo" href="">아이디 찾기</a>
			</span>
        </div><br>
	
		<p class="divLine">
			SNS로그인
		</p>
        <div id="sns_box"> 
            <button type="button" class="snsbtn naverBtn cursorPoint"><img src="../image/naverlogo.png"/> </button>
            <button type="button" class="snsbtn facebookBtn cursorPoint"><i class="fab fa-facebook-f"></i></button> 
            <button type="button" class="snsbtn kakaoBtn cursorPoint"><i class="fas fa-comment"></i></button> 
            <button type="button" class="snsbtn googleBtn cursorPoint"><img src="../image/googlelogo.png"/></button> 
        </div>
        <div>
            <a class="bottomBtn" href="./#/signup">회원가입</a>
            <a class="bottomBtn" href="">고객센터</a>
        </div>
    </div>

</template>

<script>
import AutoLogin from '../components/AutoLogin.vue';

export default {
    components:{
        AutoLogin
    },
    methods:{
        mainLink: function(){
            this.$router.push({path:'/'});
        },
        mainMove: function(){
            setTimeout(this.mainLink, 500);
        }
    }
}
</script>

<style scoped>
    .container {
        text-align: center;
        width: 100%;
        height: 100%;
        background-color: #E7F0FF;
        padding-bottom: 5%;
    }
    .title {
        padding: 10%;
        font-size: 30px;
		font-weight:bold;
        margin-top:0;
        padding-top: 17%;
    }
    .userInput {
        background: #FFFFFF;
        border: 1px solid #DBD8D8;
        border-radius: 5px;
        width: 90%;
        height: 40px;
        padding-left: 2%;
        margin: 1%;
    }
        
    .loginBtn {
		margin:1%;
        background: linear-gradient(to right, #6478FB, #8763FB);
        color: white;
        border: none;
        border-radius: 5px;
        width: 92%;
        height: 40px;
        font-weight: bold;
    }
    .findInfo {
        float: right;
        font-size: 12px;
        text-decoration: none;
        color: #464646;
        margin: 0 2% 0 0;
    }
    .findInfo:hover{
        text-decoration: underline;
    }
    /* .login_sns{
		width:100%;
		margin-top:100px;
		padding:0;
		text-align:center;
		font-size:12px;
		color: #999;
	}
	.login_sns:after{
		display:inline-block;
		margin:0 0 3px 20px;
		height:1px;
		content:" ";
		text-shadow:none;
		background-color: #999;
		width:20%;
	}
	.login_sns:before{
		display:inline-block;
		margin:0 20px 3px 0;
		height:1px;
		content:" ";
		text-shadow:none;
		background-color: #999;
		width:20%;
	} */
    #sns_box{
        padding-top:0px;
        margin:20px 0;
    }
    .snsbtn {
        vertical-align: middle;
        display: inline;
        border-radius: 50%;
        width: 44px;
        height:44px;
        margin: 0 10px;
        border:none;
        font-size:17px;
        padding-top:3px;
    }
    .snsbtn>img {
        width: 17px;
    }
    .googleBtn{
        background: white;
        border-color: white;
        color:white;
    }
    .bottomBtn {
        /* text-align: right; */
        font-size: 12px;
        text-decoration: none;
        color: #464646;
        margin: 0 0 0 4%;
    }
    .bottomBtn:hover{
        text-decoration: underline;
    }
</style>
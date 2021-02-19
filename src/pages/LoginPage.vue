<template>
<div class="container">
        <p class="title">당신의 결정이 곧 '룰'이 된다</p>
        <img class="kukruleLogo" src='../image/kukrulelogo.png'/>
        <div>
            <input class="userInput nanumsquare" type="text" placeholder="이메일주소 입력" id="userid"><br>
            <input class="userInput nanumsquare" type="password" placeholder="비밀번호 입력" id="userpw"><br>
            <button class="loginBtn borderNone cursorPoint nanumsquare" type="submit" v-on:click="mainMove">로그인</button>
        </div>
        <div>
            <AutoLogin></AutoLogin>
            <span>
				<a class="findInfo nanumsquare" href="">비밀번호 찾기</a>
				<a class="findInfo nanumsquare" href="">아이디 찾기</a>
			</span>
        </div><br>
	
		<p class="divLine">
			SNS 로그인
		</p>
        <div class="sns-box"> 
            <button type="button" class="snsBtn borderNone naverBtn cursorPoint"><img src="../image/naverlogo.png"/> </button>
            <button type="button" class="snsBtn borderNone facebookBtn cursorPoint"><i class="fab fa-facebook-f"></i></button> 
            <button type="button" class="snsBtn borderNone kakaoBtn cursorPoint"><i class="fas fa-comment"></i></button> 
            <button type="button" class="snsBtn borderNone googleBtn cursorPoint"><img src="../image/googlelogo.png"/></button> 
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
    .container {
        text-align: center;
        width: 100%;
        height: 100%;
        /* background-color: #E7F0FF; */
        /* padding-bottom: 5%; */
    }
    .title {
        /* padding: 10%; */
        font-size: 23px;
		font-weight:bold;
        margin-top:0;
        padding-top: 17%;
        padding-bottom: 0;
        background: linear-gradient(to right, rgb(195, 99, 251), #5828C6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /* color: #5828C6; */
    }
    .kukruleLogo{
        margin-top:7px;
        margin-bottom: 50px;
        width:170px;
    }
    .userInput {
        background: #FFFFFF;
        border: 1.5px solid #b1afaf;
        border-radius: 2px;
        width: 90%;
        height: 40px;
        padding-left: 2%;
        margin: 1%;
    }
        
    .loginBtn {
		margin:1%;
        /* background: linear-gradient(to right, #6478FB, #8763FB); */
        background: linear-gradient(to right, rgb(152, 99, 251), #5828C6);
        color: white;
        border: none;
        border-radius: 5px;
        width: 93%;
        height: 40px;
        font-weight: bold;
        font-size:15px;
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
    .sns-box{
        padding-top:0px;
        margin:20px 0;
    }
    .snsBtn {
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
    .snsBtn>img {
        width: 17px;
    }
    .googleBtn{
        background: white;
        border-color: white;
        border:1.5px solid rgb(71, 71, 71);
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
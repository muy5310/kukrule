<template>
<div id="login_container">
        <p id="title">국룰(國rule)</p>
        <div id="login_box">
            <input class="login_input" type="text" placeholder="이메일주소 입력" id="userid"><br>
            <input class="login_input" type="password" placeholder="비밀번호 입력" id="userpw"><br>
            <button id="login_btn" type="submit">로그인</button>
	
        </div>
        <div id="box_bottom">
            <span class="bottom_btn">
				<p id="auto_login">자동로그인</p>
				<input id="auto_check" type="checkbox"/>
			</span>
            <span class="bottom_btn">
				<a class="login_achtext" href="">비밀번호 찾기</a>
				<a class="login_achtext" href="">아이디 찾기</a>
			</span>
        </div><br>
	
		<p class="login_sns">
			SNS로그인
		</p>
		<!-- 다 비공식 로고 -->
        <div id="sns_box"> 
            <button type="button" class="snsbtn naver_btn"><img class="logo_size" src="../image/naverlogo.png"/> </button>
            <button type="button" class="snsbtn facebook_btn"><i class="fab fa-facebook-f"></i></button> 
            <button type="button" class="snsbtn kakao_btn"><i class="fas fa-comment"></i></button> 
            <button type="button" class="snsbtn google_btn"><img class="logo_size" src="../image/googlelogo.png"/></button> 
        </div>
        <div id="login_bottom">
            <a class="bottom_text" href="">회원가입</a>
            <a class="bottom_text" href="">고객센터</a>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    #login_container {
        text-align: center;
        width: 100%;
        background-color: #E7F0FF;
        padding-bottom: 5%;
    }
    #title {
        padding: 10%;
        font-size: 30px;
		font-weight:bold;
    }
    .login_input {
        background: #FFFFFF;
        border: 1px solid #DBD8D8;
        border-radius: 5px;
        width: 90%;
        height: 40px;
        padding-left: 2%;
        margin: 1%;
    }
        
    #login_btn {
		margin:1%;
        background: linear-gradient(to right, #6478FB, #8763FB);
        color: white;
        border: none;
        border-radius: 5px;
        width: 90%;
        height: 40px;
        font-weight: bold;
    }
        
    #auto_login {
        display: inline-block;
        float: left;
        margin: 0 0 0 4%;
    }
    #auto_check {
        float: left;
    }
    .login_achtext {
        float: right;
        font-size: 12px;
        text-decoration: none;
        color: #464646;
        margin: 0 4% 0 0;
    }
    .login_sns{
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
	}
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
    /* .naver_btn{
        background: #21C603;
        border-color: #21C603;
        color:white;
    }
    .facebook_btn {
        background: #3A589E;
        border-color: #3A589E;
        color: white;
    }
    .kakao_btn {
        background: #F9E000;
        border-color: #F9E000;
    }
    .kakao_btn>i {
        color: #3B1C1C
    } */
    .google_btn{
        background: white;
        border-color: white;
        color:white;
    }
    .bottom_text {
        /* text-align: right; */
        font-size: 12px;
        text-decoration: none;
        color: #464646;
        margin: 0 0 0 4%;
    }
</style>
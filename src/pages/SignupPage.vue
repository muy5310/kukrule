<template>
    <div class="app">
        <div class="top">
            <span class="back btnPoint" v-on:click="backMove">
				<i class="fas fa-arrow-left"></i>
			</span>
        </div>
        <div class="textLine">
            <h2>신규 회원가입</h2>
            <h4>국룰에 가입할 방법을 선택해 주세요</h4>
        </div>
        <div class="signBtn cursorPoint">
            <i class="far fa-envelope"></i>
            <label>이메일로 회원가입</label>
        </div>
        <p class="divLine">SNS 회원가입</p>
        <div class="signBtn naverBtn borderNone cursorPoint">
            <img src="../image/naverlogo.png" />
            <label>네이버로 쉬운 가입</label>
        </div>
        <div class="signBtn facebookBtn borderNone cursorPoint">
            <i class="fab fa-facebook-square"></i>
            <label>페이스북으로 쉬운 가입</label>
        </div>
        <div class="signBtn kakaoBtn borderNone cursorPoint">
            <i class="fas fa-comment"></i>
            <label>카카오로 쉬운 가입</label>
        </div>
        <div class="signBtn googleBtn cursorPoint">
            <img src="../image/googlelogo.png" />
            <label>구글로 쉬운 가입</label>
        </div>
    </div>  
</template>

<script>

export default {
    methods:{
        backLink:function(){
            this.$router.go(-1);
        },
        backMove: function(){
            setTimeout(this.backLink, 500);
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
    .top {
        width: 99%;
        display: inline-block;
        /* background: .968d8d; */
        padding: 20px 1%;
        text-align: center;
    }
        
    .back {
        float: left;
        margin: 1px 2% 0 2%;
    }
        
    .textLine {
        margin: auto 10px;
    }
        
    .textLine>h2 {
        margin-top: 0;
    }
        
    .signBtn {
        border: solid 2px #C4C4C4;
        height: 35px;
        text-align: center;
        vertical-align: middle;
        border-radius: 5px;
        padding-top: 15px;
        margin: 15px 10px;
    }
        
    .signBtn>i {
        font-size: 20px;
        margin-left: 10px;
        float: left;
    }
        
    .signBtn>img {
        width: 20px;
        height: 20px;
        float: left;
        margin-left: 10px;
    }
        
    .signBtn>label {
        font-weight: bold;
        margin-left: -30px;
        cursor:pointer;
    }
    .borderNone{
        border:none;
    }   
    /* .naverBtn {
        background: #21C603;
        border-color: #21C603;
        color: white;
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
		
    /* .snsText{
		width:100%;
		margin-top:70px;
        margin-bottom: 30px;
		padding:0;
		text-align:center;
		font-size:12px;
		color: #999;
	}
	.snsText:after{
		display:inline-block;
		margin:0 0 3px 20px;
		height:1px;
		content:" ";
		text-shadow:none;
		background-color: #999;
		width:20%;
	}
	.snsText:before{
		display:inline-block;
		margin:0 20px 3px 0;
		height:1px;
		content:" ";
		text-shadow:none;
		background-color: #999;
		width:20%;
	} */
</style>
<template>
  <div class="app nanumsquare">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
/* 처음 큰 div */
.app {
  width:100%;
  max-width:480px;
  min-width:250px;
  margin: 0 auto 0px auto;
  padding-bottom: 10px;
  background: white;
  height:100%;
  min-height: 100vh;
}
.borderNone:focus{ 	
    border: none;
    outline:none;
    }
/* 글꼴 설정 */
.nanumsquare {
  font-family: 'NanumSquare', sans-serif !important;
}
.input-font ::placeholder {
  font-family: 'NanumSquare', sans-serif !important;
  color:red;
}
/* 박스 그림자 */
.shadow {
  box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.1);
}
.centerSet{
  text-align: center;
}
/* 커서 모양 포인터로 변경  & 투명도 설정*/
.cursorPoint{
  cursor: pointer;
}
.cursorPoint:hover{
  opacity: 0.7;
}
/* 버튼 색상 변경 */
.btnPoint{
  cursor: pointer;
}
.btnPoint:hover{
  /* background: linear-gradient(to right, #F86461, #669EF4); */
  background: linear-gradient(to right, #ff8c20, #5828C6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* .btnPoint i {
  background: linear-gradient(to right, #fbcac9, #8ca6ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btnPoint:hover {
  background: linear-gradient(to right, #fbcac9, #8ca6ce);
}

.btnPoint:hover i {
  background: none;
  color: #fff;
  -webkit-text-fill-color: #fff;
} */

/* 상단바 */
.topHeader{
	text-align: center;
  color:white;
	padding:13px;
	/* background: linear-gradient(to right, #fbcac9, #8ca6ce); */
  background: linear-gradient(to right, rgb(152, 99, 251), #5828C6);
  margin-bottom: 10px;
}
.topBack{
	float:left;
  cursor: pointer;
}
.topBack:hover{
	background: linear-gradient(120deg,rgb(255, 202, 128) 0%, #ff7920 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
.topTitle{
  text-align: center;
  font-weight: bold;
}
/* 항목 추가 버튼 */
.itemAdd{
  text-align: center;
  padding:0 11px;
}
.addBtn {
  float:left;
  margin-left:10px;
  background: white;
  color:rgb(205, 41, 16);
  font-size: 20px;
  cursor:pointer;
  margin-top:5px;
}
.addText {
  width: 81%;
  height: 30px;
  color: rgb(205, 41, 16);
  background: none;
  border: none;
  font-size: 15px;
  font-weight: bold;
  margin-left:5px;
  cursor: pointer;
}
.addText:hover {
  background: rgb(233, 233, 233);
	opacity: 0.7;
}
/* 구분 선  */
.divLine{
	width:100%;
	margin-top:70px;
  margin-bottom: 40px;
	padding:0;
	text-align:center;
	font-size:15px;
	color: #999;
}
.divLine:after{
	display:inline-block;
	margin:0 0 3px 20px;
	height:1px;
	content:" ";
	text-shadow:none;
	background-color: #999;
	width:20%;
}
.divLine:before{
	display:inline-block;
	margin:0 20px 3px 0;
	height:1px;
	content:" ";
	text-shadow:none;
	background-color: #999;
	width:20%;
}
/* SNS 아이콘  */
.naverBtn {
  background: #21C603;
  border:none;
  color: white;
}
.facebookBtn {
  background: #3A589E;
  border-color: #3A589E;
  color: white;
}
.kakaoBtn {
  background: #F9E000;
  border-color: #F9E000;
}
.kakaoBtn>i {
  color: #3B1C1C
}
</style>

<template>
  <div class="app">
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
}
/* 박스 그림자 */
.shadow {
  box-shadow: 5px 10px 10px rgb(0, 0, 0, 0.1);
}
.center_set{
  text-align: center;
}
/* 커서 모양 포인터로 변경 */
.cursorPoint{
  cursor: pointer;
}
.cursorPoint:hover{
  opacity: 0.7;
}
.btnPoint{
  cursor: pointer;
}
.btnPoint:hover{
  background: linear-gradient(to right, #F86461, #669EF4);
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
.top_header{
	text-align: center;
  color:white;
	padding:13px;
	background: linear-gradient(to right, #fbcac9, #8ca6ce);
  margin-bottom: 10px;
}
.top_back{
	float:left;
}
.top_title{
  text-align: center;
  font-weight: bold;
}
/* 항목 추가 버튼 */
.add_line{
  text-align: center;
}
.plus_btn {
  float:left;
  margin-left:10px;
  background: white;
  color:rgb(205, 41, 16);
  font-size: 20px;
}
.plus_txt {
  width: 81%;
  height: 30px;
  color: rgb(205, 41, 16);
  background: none;
  border: none;
  font-size: 15px;
  margin-left:5px;
  cursor:pointer;
}
.plus_txt:hover {
  background: rgb(233, 233, 233);
	opacity: 0.7;
}
/* SNS 아이콘  */
.naver_btn {
  background: #21C603;
  border:none;
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
}
</style>

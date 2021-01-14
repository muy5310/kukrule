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
}
</style>

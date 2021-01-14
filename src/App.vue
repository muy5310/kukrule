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
/* 처음 큰 dif\v */
.app {
  width:100%;
}
/* 박스 그림자 */
.shadow {
  box-shadow: 5px 10px 10px rgb(0, 0, 0, 0.1);
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
</style>

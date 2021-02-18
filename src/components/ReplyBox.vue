<template>
  <div>
    <div class="Rebox">
      ㄴ
		<span class="profile">
      <i class="fas fa-user-circle"></i>
    </span>
    <span class="owner">레몬</span>
    <span class="commentDate">01/07 09:21</span><br>
    <div class="commentDes">ㅇㅈㅇㅈ</div>
	</div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .Rebox{
    color:rgb(70, 69, 69);
    }
    .profile {
        margin:3px;
        padding-top:19px;
        margin-left:0;
        font-size: 20px;
    }
    .owner {
        font-weight: bold;
        margin-right:4px;
    }
    .commentDate {
        color: gray;
    }
    .commentDes {
        height: auto;
        overflow: auto;
        margin:0 0 3px 5%;
    }
</style>


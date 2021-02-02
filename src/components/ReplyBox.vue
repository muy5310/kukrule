<template>
  <div>
    <Reply></Reply>
    <div class="Rebox">
      ㄴ
		<span class="profile">
      <i class="fas fa-user-circle"></i>
    </span>
    <span class="owner">떡볶이</span>
    <span class="comment_date">01/07 09:21</span><br>
    <div class="comment_des">누구세요</div>
	</div>
  </div>
</template>

<script>
import Reply from './Reply.vue';

export default {
  components: {
    Reply
  }
}
</script>

<style scoped>
    .Rebox{
    margin-left:35%;
    color:gray;
    }
    .comment_box:active{
        background: rgb(233, 233, 233);
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
    .comment_date {
        color: gray;
    }
    .comment_des {
        height: auto;
        overflow: auto;
        margin:0 0 3px 5%;
    }
</style>


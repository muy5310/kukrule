<template>
  <div>
      <Comment></Comment>
      <CommentDetail></CommentDetail>
      <Comment></Comment>
      <CommentDetail></CommentDetail>
  </div>
</template>

<script>
import Comment from './Comment.vue';
import CommentDetail from './CommentDetail.vue'
export default {
  components: {
    Comment,
    CommentDetail
  }
}
</script>

<style>

</style>
<template>
  <div>
      <Comment v-for="(comment, i) in commentData" v-bind:commentData="comment" v-bind:key="i"></Comment>
  </div>
</template>

<script>
import Comment from './Comment.vue';
import commentData from '../assets/commentData.js';

export default {
  data:function(){
    return{
      commentData : commentData
    }
  },
  components: {
    Comment
  }
}
</script>

<style>

</style>
<template>
<div class=timeLine>
  <Feed v-for="(post, i) in postData" v-bind:postData="post" v-bind:key="i"
  v-on:commentPage="submitEvent" v-on:deleteDo="deleteItem(i)"></Feed>
  
  <!-- <Feed v-on:commentPage="submitEvent"></Feed> -->
</div>
</template>

<script>
import Feed from './Feed.vue';
import postData from '../assets/postData.js';

export default {
  name: 'TimeLine',
  data: function(){
    return{
      postData : postData
    }
  },
  components: {
    Feed
  },
  methods:{
    submitEvent: function(){
      this.$emit('receiveEvent');
    },
    deleteItem(i){
      this.postData.splice(i,1);
    }
  }
}
</script>

<style>
.timeLine{
  background: white;
  padding-top: 13px;
}
</style>
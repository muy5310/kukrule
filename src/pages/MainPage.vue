<template>
  <div class="app">
    <TopMenu v-on:postPage="postMove"></TopMenu><br><br>
    <TimeLine v-on:receiveEvent="commentMove" ></TimeLine>
  </div>
</template>

<script>
import TopMenu from '../components/TopMenu.vue';
import TimeLine from '../components/TimeLine.vue';

export default {
  components: {
    TopMenu,
    TimeLine
  },
  methods:{
    postLink:function(){
      this.$router.push({path:'/post'});
    },
    postMove:function(){
      setTimeout(this.postLink, 500);
    },
    commentLink:function(){
      this.$router.push({path:'/comment'});
    },
    commentMove: function(){
      setTimeout(this.commentLink, 500);
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

<style>
</style>

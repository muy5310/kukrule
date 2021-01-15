<template>
<div class=timeline>
  <Feed v-on:commentPage="submitEvent"></Feed>
  <Feed v-on:commentPage="submitEvent"></Feed>
</div>
</template>

<script>
import Feed from './Feed.vue'

export default {
  name: 'TimeLine',
  components: {
    Feed
  },
  methods:{
    submitEvent: function(){
      this.$emit('receiveEvent');
    }
  }
}
</script>

<style>

</style>
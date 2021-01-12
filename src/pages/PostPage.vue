<template>
  <TopHeader v-bind:propsdata="title"></TopHeader>
</template>

<script>
import TopHeader from '../components/TopHeader';

export default {
    data:function(){
        return{
            title:'새로운 국룰 만들기'
        }
    },
    components: {
        TopHeader
    }
}
</script>

<style>

</style>
<template>
    <div class="modal-card shadow">
    <button class="popBtn cursorPoint nanumsquare borderNone" v-on:click="Edit">수정</button>
    <button class="popBtn cursorPoint nanumsquare borderNone" v-on:click="Delete">삭제</button>
    </div>
</template>

<script>

export default {
    methods:{
        Edit: function(){
            this.$emit('editSubmit');
        },
        Delete:function() {
            this.$emit('deleteSubmit');
        }
    }
}
</script>

<style scoped>
.modal-card {
    margin:0;
    position: relative;
    right: 0px;
    top:0px;
    background-color: black;
    width: 100px;
    float:right;
    height: 100px;
    opacity: 0.8; 
}
.popBtn{
    width: 100%;
    height: 50%;
    margin:0;
    color:white;
    font-size:15px;
    background: none;
    border:none;
    text-align: left;
    padding-left:10px;
}
</style>
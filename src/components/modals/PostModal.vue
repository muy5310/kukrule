<template>
    <div class="modal-card shadow">
    <button class="popBtn cursorPoint" v-on:click="editMove">수정</button>
    <button class="popBtn cursorPoint" v-on:click="Delete">삭제</button>
    </div>
</template>

<script>

export default {
    methods:{
        editLink: function(){
            this.$router.push({path:'/edit'})
        },
        editMove:function(){
            setTimeout(this.editLink, 500);
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
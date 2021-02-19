<template>
    <div class="modal-card shadow ">
    <button class="popBtn cursorPoint nanumsquare borderNone">인기 댓글순</button>
    <button class="popBtn cursorPoint nanumsquare borderNone">최근 날짜순</button>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.modal-card {
    margin:0;
    position: relative;
    right: 0px;
    top:0px;
    background-color: black;
    width: 120px;
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
<template>
    <div>
    <div class="itemLine">
        <span class="deleteBtn cursorPoint">
			<i class="fas fa-minus-circle"></i>
		</span>
        <input class="itemForm input-font nanumsquare" type="text" placeholder="항목" />
    </div><br></div>
</template>

<script>
export default {
}
</script>

<style scoped>
.itemLine{
    margin-bottom: 10px;
    text-align: center;
    padding:0 10px;
}
    .deleteBtn {
        font-size: 20px;
        float:left;
        margin-left:11px;
        margin-top:7px;
    }
    .itemForm {
        width: 80%;
        height: 30px;
        margin-left:5px;
    }
</style>
<template>
    <div>
    <div class="add_line">
        <span class="minus_btn cursorPoint">
			<i class="fas fa-minus-circle"></i>
		</span>
        <input class="input_form" type="text" placeholder="항목" />
    </div><br></div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .minus_btn {
        font-size: 20px;
        float:left;
        margin-left:11px;
    }
    .input_form {
        width: 80%;
        height: 30px;
        margin-left:5px;
    }
    
</style>
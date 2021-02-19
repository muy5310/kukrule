<template>
    <div class="post-box">
        <input class="titleForm nanumsquare" type="text" placeholder="제목" />
		<textarea class="mainForm nanumsquare" type="text" placeholder="본문" ></textarea>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .post-box{
        padding:5px 20px;
    }
    .titleForm {
        margin-top: 5px;
        width: 98%;
        height: 30px;
    }
    .mainForm {
        margin: 17px 0;
        width: 99%;
        height: 90px;
    }
</style>
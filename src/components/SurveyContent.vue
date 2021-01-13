<template>
    <div id="post_box">
        <input class="input_form" type="text" placeholder="제목" />
		<textarea id="explain_form" type="text" placeholder="본문" ></textarea>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #post_box{
        padding:5px;
    }
    .input_form {
        margin-top: 5px;
        width: 98%;
        height: 30px;
    }
    #explain_form {
        margin: 17px 0;
        width: 99%;
        height: 90px;
    }
</style>
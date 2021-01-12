<template>
    <div id="top_header">
        <span id="top_back">
			<i class="fas fa-arrow-left"></i>
		</span>
		<label id="top_title">{{propsdata}}</label>
    </div>
</template>

<script>
export default {
    props:['propsdata']
}
</script>

<style scoped>
    #top_header{
		text-align: center;
        color:white;
		padding:13px;
		background: linear-gradient(to right, #fbcac9, #8ca6ce);
        margin-bottom: 10px;
	}
	#top_back{
		float:left;
	}
	#input_line{
		margin-top:10px;
	}
    #top_title{
        font-weight: bold;
    }
</style>
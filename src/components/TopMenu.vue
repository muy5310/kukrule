<template>
    <div class="top_box">
        <img class="kukrule_logo" src='../image/kukrulelogo.png' />
		<span class="top_search">
			<input class="search_input" type="text" placeholder="검색">
			<span class="search_btn cursorPoint">
                <i class="fas fa-search"></i>
            </span>
		</span>
		<span class="top_func cursorPoint">
            <i class="fas fa-ellipsis-h"></i> 
        </span>
		<span class="top_func cursorPoint" v-on:click="movePost">
            <i class="fas fa-plus"></i>
        </span>
    </div>
</template>

<script>
export default {
    methods:{
        movePost: function(){
            this.$emit("postPage");
        }
    }
}
</script>

<style scoped>
    .top_box {
        width: 100%;
		height: 40px;
		text-align:center;
    }
        
    .top_box .kukrule_logo {
		float:left;
        width:73px;
    }
		
    .top_box .top_search {
        background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
        border-radius: 7px;
        padding: 1%;
    }
        
	.top_search .search_input{
        background: none;
        border: none;
		width:40%;
        margin-top:10px;
    }
        
	.top_func{
		float:right;
		margin:7px 1% 0 1%;
	}
</style>
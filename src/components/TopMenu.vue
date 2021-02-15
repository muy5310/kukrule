<template>
    <div class="top_box">
        <img class="kukrule_logo cursorPoint" src='../image/kukrulelogo.png' v-on:click="scrollTop"/>
		<span class="top_search">
			<input class="search_input" type="text" placeholder="검색">
			<span class="search_btn btnPoint">
                <i class="fas fa-search"></i>
            </span>
		</span>
		<span class="top_func btnPoint postBtn" @click="isModalViewed = true">
            <i class="fas fa-ellipsis-h"></i> 
        </span>
		<span class="top_func btnPoint " v-on:click="movePost">
            <i class="fas fa-plus"></i>
        </span>
        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
            <HomeModal></HomeModal>
        </ModalView> 
    </div>
</template>

<script>
import ModalView from './ModalView.vue';
import HomeModal from './modals/HomeModal.vue';

export default {
    components: {
        ModalView,
        HomeModal
	},
	data() {
		return{
            isModalViewed: false
		};
	},
    methods:{
        movePost: function(){
            this.$emit("postPage");
        },
        scrollTop: function(){
            window.scrollTo(0,0);
        }
    },
    
}

</script>

<style scoped>
    .top_box {
        position: fixed;
        top:0;
        padding:7px 3px;
        width:100%;
        max-width:474px;
        min-width:250px;
        margin: 0 auto 0 auto;
		height: 40px;
		text-align:center;
        background: white;
        box-shadow: 0 10px 10px -5px rgb(0, 0, 0, 0.1);
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
        height: 20px;
    }
    
	.top_func{
		float:right;
		margin:7px 1% 0 1%;
	}
    .postBtn{
        margin-right:18px;
    }
</style>
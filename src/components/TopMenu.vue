<template>
    <div class="top-box">
        <img class="kukruleLogo cursorPoint" src='../image/kukrulelogo.png' v-on:click="scrollTop"/>
		<span class="search-box">
			<input class="searchInput borderNone" type="text" placeholder="검색">
			<span class="btnPoint searchIcon">
                <i class="fas fa-search"></i>
            </span>
		</span>
		<span class="rightSet btnPoint menuBtn" @click="isModalViewed = true">
            <i class="fas fa-bars"></i> 
        </span>
		<span class="plusIcon rightSet cursorPoint" v-on:click="movePost">
            <i class="fas fa-plus"></i>
            <!-- <img class="postIcon" src='../image/posticon.png'/> -->
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
    .top-box {
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
    .kukruleLogo {
		float:left;
        width:38px;
        margin-left:10px;
    }
		
    .search-box {
        background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
        border-radius: 3px;
        padding: 1%;
    }
        
	.searchInput{
        background: none;
        border: none;
		width:47%;
        margin-top:10px;
        height: 20px;
    }
    .searchIcon{
        color:#5828C6;
    }
    .plusIcon{
        background: linear-gradient(to top, rgb(152, 99, 251), #5828C6);
        color:white;
        border-radius: 3px;
        padding-top:2px;
        width:22px;
        height: 19px;
    }
    .postIcon{
        width:27px;
    }
	.rightSet{
		float:right;
		margin:10px 1% 0 1%;
	}
    .menuBtn{
        font-size:18px;
        margin-top:12px;
        margin-right:18px;
    }
</style>
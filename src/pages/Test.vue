<template>
<div id="app"> 
	<h1>모달 컴포넌트 만들기 :)</h1> 
	<ModalView v-if="isModalViewed" @close-modal="isModalViewed = false"> 
		hihi
	</ModalView> 
	<button @click="isModalViewed = true">Open Modal</button> 
</div>

</template>

<script>
// import ModalView from './modal.vue';

// export default {
// 	name:"App",
// 	components: {
// 		ModalView
// 	},
// 	data() {
// 		return{
// 			isModalViewed: false
// 		};
// 	}
// }
</script>

<style scoped>

</style>
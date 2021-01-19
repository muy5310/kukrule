<template>
<div class="modal"> 
    <div class="overlay" @click="$emit('close-modal')"></div> 
    <!-- <div class="modal-card">  -->
    <slot/>
</div> 

</template>

<script>
export default {
}
</script>

<style scoped>
.overlay {
    width: 100%; 
    height: 100%; 
    position: fixed; 
    left: 0; 
    top: 0; 
} 
.overlay {
    opacity: 0.5; 
    background-color: black;
}

</style>
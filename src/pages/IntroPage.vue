<template>
    <div class="container">
        <p>당신의 결정이<br>곧 '룰'이 된다</p>
        <img src="../image/kukrulelogo.png" alt="kukrule_logo"><br>
    </div>

</template>

<script>
export default {
    methods:{
        scrollTop: function(){
            window.scrollTo(0,0);
        }
    },
    beforeMount(){
        this.scrollTop();
    }
}
</script>

<style scoped>
    .container {
        text-align: center;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
	
	/* 밑에 요소들의 크기가 100%로 주었지만 작동이 의아하다 */
    .container>p {
		margin:0 auto;
        font-size: 25px;
		font-weight:bold;
		/* color:white;
		background: linear-gradient(to right, #6478FB, #8763FB);
		border-radius:10%; */
		background: linear-gradient(to right, #F86461, #669EF4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
	}
        
    .container>img {
         margin-top: 3%;
    }
</style>
<template>
<div class="app">
    <TopHeader v-bind:propsdata="title" v-bind:icondata="icon" v-on:mainPage="mainMove"></TopHeader>
    <div id="post_box">
        <input v-model="newTitle" class="input_form" type="text" placeholder="제목" />
		<textarea v-model="newCaption" id="explain_form" type="text" placeholder="본문" ></textarea>
        <p class="imgAdd"><input type="file" id="file" class="inputfile" v-on:change="upload">
            <label for="file" class="btnPoint">
                <i class="far fa-images"></i> 이미지 추가하기 
            </label><br>
            <img class="imgSize" v-bind:src="newImgSrc">
        </p>
        
    </div>

    <ItemLine></ItemLine>
    <div class="add_line">
        <span class="plus_btn cursorPoint">
			<i class="fas fa-plus-circle"></i>
		</span>
        <button class="plus_txt">새 답변 추가</button>
    </div><br>
    <Option></Option>
</div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
// import SurveyContent from '../components/SurveyContent.vue';
import Option from '../components/Option.vue';
import ItemLine from '../components/ItemLine.vue';
import data from '../assets/postData.js';

export default {
    data:function(){
        return{
            title:'새로운 국룰 만들기',
            icon:'완료',
            postData :data,
            newTitle: '',
            newCaption: '', 
            newImgSrc:''
        }
    },
    components: {
        TopHeader,
        // SurveyContent,
        ItemLine,
        Option
    },
    methods:{
        upload(e) {
            let file = e.target.files;
            let reader = new FileReader();

            reader.readAsDataURL(file[0]);
            reader.onload = e => {
                this.newImgSrc = e.target.result;
            }
        },
        mainLink: function(){
            this.$router.push({path:'/'});
        },
        mainMove: function(){
            if(this.newTitle=='' || this.newCaption==''){
                alert("모든 내용을 입력해주세요.");
            }
            else{
            var newData = {
                title:this.newTitle,
                caption:this.newCaption,
                date:'2021.05.31',
                img : this.newImgSrc,
                author:'비타오백'
            }
            data.unshift(newData);
            this.newTitle = '';
            this.newCaption = '';
            this.newImgSrc = '';
            setTimeout(this.mainLink, 1000);}
        }
    }
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
.imgAdd{
    text-align: center;
}
.inputfile{
    width:0px; 
    height: 0px; 
    overflow: hidden;
}
.imgSize {
    max-width:300px;
    margin-top:20px;
    width:60%;
}
</style>
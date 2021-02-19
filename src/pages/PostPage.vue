<template>
<div class="app">
    <TopHeader v-bind:propsdata="title" v-bind:icondata="icon" v-on:mainPage="mainMove" v-on:backPage="backMove"></TopHeader>
    <div class="postBox">
        <input v-model="newTitle" class="titleForm nanumsquare" type="text" placeholder="제목" />
		<textarea v-model="newCaption" class="mainForm nanumsquare" type="text" placeholder="본문" ></textarea>
        <p class="imgAdd cursorPoint shadow" v-on:change="upload" >
            <input type="file" id="file" class="inputFile">
            <label for="file">
                <i class="far fa-images imgIcon"></i> 
                <span v-if="!imgExist">이미지 추가하기 </span>
                <span v-else>이미지 변경하기 </span>
            </label><br>
            <img v-if="imgExist" class="imgSize" v-bind:src="newImgSrc">
            <span class="cursorPoint" v-if="imgExist" v-on:click="imgDelete">
                <i class="fas fa-times-circle"></i>
            </span>
        </p>
        
    </div>
    <div class="itemLine" v-for="(newItem, index) in newItems" v-bind:key="index">
        <span class="deleteBtn cursorPoint" v-on:click="removeAnswer(index)">
			<i class="fas fa-minus-circle"></i>
		</span>
        <input v-model="newItems[index]" class="itemForm nanumsquare" type="text" placeholder="항목" />
    </div>
    <div class="itemAdd">
        <span class="addBtn" v-on:click="addAnswer">
			<i class="fas fa-plus-circle cursorPoint"></i>
		</span>
        <button class="addText borderNone nanumsquare" v-on:click="addAnswer">새 답변 추가</button>
    </div><br>
    <Option></Option>
</div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
// import SurveyContent from '../components/SurveyContent.vue';
import Option from '../components/Option.vue';
import postData from '../assets/postData.js';

export default {
    data:function(){
        return{
            title:'새로운 국룰 만들기',
            icon:'완료',
            postData : postData,
            newTitle: '',
            newCaption: '', 
            newImgSrc:'none',
            newItems:["",""],
            imgExist:false,
            postlike:0,
            moreShown:false,
            moreClick :true,
            imgShown:false
        }
    },
    components: {
        TopHeader,
        // SurveyContent,
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
            this.imgExist = true;
            this.imgShown = true;
        },
        addAnswer: function() {
            if(this.newItems.length >= 12){
                alert('항목은 최대 12개까지만 입력 가능합니다.');
            }
            else{
                this.newItems.push("")
            }
        },
        removeAnswer:function(index){
            if(this.newItems.length < 3){
                alert('항목은 두 가지 이상 입력해야 합니다.');
            }
            else{
                this.newItems.splice(index, 1);
            }
            
        },
        imgDelete: function(){
            this.imgExist = false;
            this.newImgSrc = 'none';
            this.imgShown = false;
        },
        backLink: function(){
            this.$router.go(-1);
        },
        backMove: function(){
            setTimeout(this.backLink, 1000);
        },
        mainLink: function(){
            this.$router.push({path:'/'});
        },
        mainMove: function(){
            if (this.newCaption.length > 50 || this.newImgSrc != 'none') {
                this.moreClick = false;
                this.moreShown = true;
            }
            if(this.newTitle=='' || this.newCaption==''){
                alert("모든 내용을 입력해주세요.");
                // if (this.newItems.length < 2) {
                //     alert("모든 내용을 입력해주세요.");
                // }
            }
            else if (this.newItems.includes("")){
                alert("모든 내용을 입력해주세요.");
            }
            else{
            var newData = {
                title:this.newTitle,
                caption:this.newCaption,
                date:'2021.05.31',
                img : this.newImgSrc,
                items : this.newItems,
                author:'국룰코인',
                liked : false,
                postlike : this.postlike,
                moreClick : this.moreClick,
                moreShown : this.moreShown,
                imgShown : this.imgShown
            }
            postData.unshift(newData);
            // this.newTitle = '';
            // this.newCaption = '';
            // this.newImgSrc = 'none';
            setTimeout(this.mainLink, 1000);}
        },
        scrollTop: function(){
            window.scrollTo(0,0);
        }
    },
    beforeMount(){this.scrollTop();}
}
</script>

<style scoped>
.postBox{
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
.itemLine{
    margin-bottom: 10px;
    text-align: center;
    padding:0 10px;
}
.imgIcon{
    margin-right:5px;
}
.imgAdd{
    background: #C869E9;
    color:white;
    height: 30px;
    margin-top:0;
    text-align: center;
    padding-top: 5px;
}
.imgAdd>label{
    cursor: pointer;
}
.inputFile{
    width:0px; 
    height: 0px; 
    overflow: hidden;
}
.imgSize {
    max-width:300px;
    margin-top:20px;
    width:60%;
}
.deleteBtn {
    font-size: 20px;
    float:left;
    margin-left:11px;
    margin-top:7px;
}
.itemForm {
    width: 80%;
    height: 30px;
    margin-left:5px;
}
</style>
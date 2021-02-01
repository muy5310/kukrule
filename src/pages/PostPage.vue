<template>
<div class="app">
    <TopHeader v-bind:propsdata="title" v-bind:icondata="icon" v-on:mainPage="mainMove" v-on:backPage="backMove"></TopHeader>
    <div id="post_box">
        <input v-model="newTitle" class="title_form" type="text" placeholder="제목" />
		<textarea v-model="newCaption" id="explain_form" type="text" placeholder="본문" ></textarea>
        <p class="imgAdd"><input type="file" id="file" class="inputfile" v-on:change="upload">
            <label for="file" class="btnPoint">
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
     <div class="add_line">
        <span class="minus_btn cursorPoint">
			<i class="fas fa-minus-circle"></i>
		</span>
        <input v-model="newItems[0]" class="input_form" type="text" placeholder="항목" />
    </div><br>
    <div class="add_line">
        <span class="minus_btn cursorPoint">
			<i class="fas fa-minus-circle"></i>
		</span>
        <input v-model="newItems[1]" class="input_form" type="text" placeholder="항목" />
    </div><br>
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
import data from '../assets/postData.js';

export default {
    data:function(){
        return{
            title:'새로운 국룰 만들기',
            icon:'완료',
            postData :data,
            newTitle: '',
            newCaption: '', 
            newImgSrc:'none',
            newItems:[],
            imgExist:false,
            postlike:0,
            viewmore:false
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
            this.viewmore = true;
        },
        imgDelete: function(){
            this.imgExist = false;
            this.newImgSrc = 'none';
            this.viewmore = false;
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
            if(this.newTitle=='' || this.newCaption==''){
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
                moreClick : false,
                viewmore: this.viewmore
            }
            data.unshift(newData);
            this.newTitle = '';
            this.newCaption = '';
            this.newImgSrc = 'none';
            setTimeout(this.mainLink, 1000);}
        }
    }
}
</script>

<style scoped>
#post_box{
    padding:5px;
}
.title_form {
    margin-top: 5px;
    width: 98%;
    height: 30px;
}
#explain_form {
    margin: 17px 0;
    width: 99%;
    height: 90px;
}
.imgIcon{
    margin-right:5px;
}
.imgAdd{
    margin-top:0;
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
.minus_btn {
    font-size: 20px;
    float:left;
    margin-left:11px;
}
.input_form {
    width: 80%;
    height: 30px;
    margin-left:5px;
}
</style>
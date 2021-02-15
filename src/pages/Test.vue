<template>
<div id="app">
  <div class="work-experiences">
      <div class="form-row" v-for="(minordatabase, index) in minorsDetail" :key="index">
        <div class="col">
          <br>
          <label id="minorHeading">FULL NAME</label>
          <input v-model="name[index]" type="text" class="form-control" placeholder="FULL NAME" size="lg"/>
        <button type="button" class="btn btn-outline-info" v-on:click="name.splice(index, 1)" @click="minorsDetail.splice(index, 1)">Remove this row</button>
        </div>
      </div>
    </div>
      <br>
      <div class="form-group">
        <button @click="addExperience" type="button" class="btn btn-info" style="margin-right:1.5%;">Add</button>
        <button @click="removeExperience" type="button" class="btn btn-outline-info">Remove Last Field</button>
        <button @click="checkBtn">check</button>
      </div>
</div>
</template>

<script>

export default {
   data:function() {
     return{
    minorsDetail: [
     {
       full_name: "",
       date_of_birth: "",
     }
    ],
    name:[]}
  },
  methods: {
    toggle: function(todo){
        todo.done = !todo.done
    },
    addExperience(){
          this.minorsDetail.push({
            full_name: ''
          })
    },
    removeExperience: function(todo){
          var index = this.minorsDetail.indexOf(todo)
          this.minorsDetail.splice(index, 1)
          this.removeMinorFieldFunction();
    },
    checkBtn: function(){
      console.log(this.name);
    }
  }
}
</script>

<style scoped>
</style>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name:'Hello' }">Home</router-link><br/><br/>
    <form>
      <label>Title</label>
      <input placeholder="title" v-model="title" @input="title = $event.target.value" type="text"/>
      <div class="clear"></div>
      <label>User Id</label>
      <input placeholder="userId" v-model="userId" @input="userId = $event.target.value" type="text"/>
      <div class="clear"></div>
      <label>Description</label>
      <textarea v-model="desc" @input="desc = $event.target.value"></textarea>      
    </form>
    <div class="clear"></div>
    <button @click="submit">Add</button>
    <br/><br/><br/><br/>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {
  name: 'add',
  data() {
    return {
      msg: 'Add Data',
      title: '',
      userId: '',
      desc: '',
    };
  },
  computed: {
    ...mapState([
      'articles',
    ]),
    formData() {
      return {
        id: this.articles.length + 1,
        title: this.title,
        body: this.desc,
        userId: this.userId,
      };
    },
  },
  methods: {
    ...mapActions([
      'addData',
    ]),
    submit: function () {
      this.addData(this.formData);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form{
  width: 40%;
  margin:auto;
}
label{
  width: 20%;
  display: inline-block;
  float:left;
}
input{
  padding: 10px;
  width:70%;
  float: right;
}
textarea{
  padding: 10px;
  width: 70%;
  height: 200px;
  float: right;
  border:1px solid #CCC;
}
.clear{
  clear:both;
  margin-bottom: 20px;
}
button{
  margin-right: 206px;
  background-color: #42b983;
  color:#FFF;
  border:none;
  padding:5px 20px;
}
</style>

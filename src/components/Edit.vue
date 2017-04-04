<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name:'Hello' }">Home</router-link><br/><br/>
    <form>
      <label>Title</label>
      <input placeholder="title" v-model="filteredData.title" type="text"/>
      <div class="clear"></div>
      <label>User Id</label>
      <input placeholder="userId" v-model="filteredData.userId" @input="userId = $event.target.value" type="text"/>
      <div class="clear"></div>
      <label>Description</label>
      <textarea v-model="filteredData.body" @input="desc = $event.target.value"></textarea>
    </form>
    <div class="clear"></div>
    <button @click="updateDataById">Update</button>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  name: 'edit',
  data() {
    return {
      msg: 'Edit Vue.js test Project',
      paramsId: this.$route.params.id,
    };
  },
  created() {
    this.getDataById(this.paramsId);
  },
  computed: {
    ...mapState([
      'filteredData',
    ]),
  },
  methods: {
    ...mapActions([
      'getDataById',
      'updateData',
    ]),
    updateDataById: function () {
      console.log(this.filteredData.title);
      this.updateData(this.paramsId, {
        title: this.filteredData.title,
        body: this.filteredData.body,
        userId: this.filteredData.userId,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
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
</style>

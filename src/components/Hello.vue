<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name:'Add' }">Add</router-link>
    <table>
      <thead>
        <tr>
          <th>User Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(article, index) in articles">
          <td><strong>{{ article.userId }}</strong></td>
          <td>{{ article.title }}</td>
          <td>{{ article.body }}</td>
          <td><router-link :to="{ name: 'Edit', params: { id: index }}">Edit</router-link></td>
          <td><a href="javascript:void(0)" @click="deleteItemById(index)">Delete</a></td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Vue.js test Project',
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapState([
      'articles',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchData',
      'deleteData',
    ]),
    deleteItemById: function (id) {
      this.deleteData(id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='../assets/main.css'></style>

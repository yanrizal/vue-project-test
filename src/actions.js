import axios from 'axios';

export default {
  fetchData({ commit }) {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      commit('fetchDataSuccess', response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },
  addData({ commit }, data) {
    axios.post('http://jsonplaceholder.typicode.com/posts', data)
    .then((response) => {
      console.log(response.data);
      commit('addDataSuccess', data);
    });
  },
  getDataById({ commit }, id) {
    axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      commit('getDataByIdSuccess', response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },
  updateData({ commit }, data) {
    axios.put(`http://jsonplaceholder.typicode.com/posts/${data.id}`, data)
    .then((response) => {
      console.log(response.data);
      commit('updateDataSuccess', data);
    });
  },
  deleteData({ commit }, id) {
    setTimeout(() => {
      commit('deleteData', id);
    }, 300);
  },
  filterData({ commit }, id) {
    commit('filterData', id);
  },
};

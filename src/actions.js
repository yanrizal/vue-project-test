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
    console.log(data);
    axios.post('http://jsonplaceholder.typicode.com/posts', data)
    .then((response) => {
      console.log(response.data);
      commit('addDataSuccess', data);
    });
  },
  getDataById({ commit }, id) {
    console.log(id);
    axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      commit('getDataByIdSuccess', response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },
  updateData({ commit }, id, data) {
    console.log(data);
    axios.post(`http://jsonplaceholder.typicode.com/posts/${id}`, data)
    .then((response) => {
      console.log(response.data);
      commit('addDataSuccess', data);
    });
  },
  filterData({ commit }, id) {
    console.log(id);
    commit('filterData', id);
  },
};

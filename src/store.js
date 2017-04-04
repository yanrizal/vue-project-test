import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    articles: [],
    fetchLoaded: false,
    filteredData: {},
  },
  mutations: {
    fetchDataSuccess(state, data) {
      console.log('fetch');
      if (!state.fetchLoaded) {
        state.articles = data;
        state.fetchLoaded = true;
      }
    },
    addDataSuccess(state, data) {
      console.log('addData');
      state.articles = state.articles.concat(data);
    },
    getDataByIdSuccess(state, data) {
      console.log('editData');
      state.filteredData = data;
    },
    filterData: (state, id) => {
      console.log('filterData', id);
      const data = state.articles.filter((item) => {
        return item.id === 2;
      });
      console.log(data[0]);
      state.filteredData = data[0];
    },
  },
  actions,
});

export default store;

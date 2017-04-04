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
      if (!state.fetchLoaded) {
        Vue.delete(data, data.length - 1); // remove timestamp
        state.articles = data;
        state.fetchLoaded = true;
      }
    },
    addDataSuccess(state, data) {
      state.articles = state.articles.concat(data);
      state.fetchLoaded = true;
      window.history.go(-1);
    },
    updateDataSuccess(state, data) {
      Vue.set(state.articles, data.index, data);
      window.history.go(-1);
    },
    getDataByIdSuccess(state, data) {
      state.filteredData = data;
    },
    deleteData(state, id) {
      Vue.delete(state.articles, id);
    },
    filterData: (state, id) => {
      const data = state.articles[id];
      state.filteredData = data;
    },
  },
  actions,
});

export default store;

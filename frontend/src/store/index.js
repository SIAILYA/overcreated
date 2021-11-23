import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedTopics: [
      'Фронтенд',
      'Бэкенд',
      'Python',
      'UX/UI',
      'VK Mini App',
      'JavaScript',
      'Хакатон',
      'Учебный',
      'Прочее',
    ]
  },
  mutations: {
    addTopic(state, topicName) {
      state.selectedTopics.push(topicName);
    },
    removeTopic(state, topicName) {
      state.selectedTopics.splice(state.selectedTopics.indexOf(topicName), 1);
    }
  },
  actions: {
    selectTopic(context, topicName) {
      context.commit('addTopic', topicName);
    },
    deselectTopic(context, topicName) {
      context.commit('removeTopic', topicName);
    }
  },
  getters: {
    getSelectedTopics(state) {
      return state.selectedTopics;
    }
  },
  modules: {},
});

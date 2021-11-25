import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from '../router'

const BACKEND = "http://localhost:5088"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedTopics: [],
    availableTopics: [],
    topicsLoading: true,
    projects: [],
    projectsLoading: true
  },
  actions: {
    selectTopic(context, topicSlug) {
      context.commit("setSelectedTopics", [...context.state.selectedTopics, topicSlug])
      context.dispatch("loadProjects")
    },
    deselectTopic(context, topicSlug) {
      const tempSelected = context.state.selectedTopics.slice()      // Array copy
      tempSelected.splice(tempSelected.indexOf(topicSlug), 1)

      context.commit("setSelectedTopics", tempSelected)
      context.dispatch("loadProjects")
    },
    async loadTopics(context) {
      context.state.topicsLoading = true

      return axios.get(BACKEND + "/api/v1/topics/get",)
        .then(r => {
          const loaded = r.data

          context.commit("setAvailableTopics", loaded)
          context.commit("setTopicsLoading", false)
        })
    },
    async loadProjects(context) {
      context.commit("setProjectsLoading", true)

      return axios.post(BACKEND + "/api/v1/projects/get", {topics: context.state.selectedTopics}).then(r => {
        const loaded = r.data
        context.commit("setProjects", loaded)
        context.commit("setProjectsLoading", false)
      })
    }
  },
  mutations: {
    setAvailableTopics(state, topics) {
      state.availableTopics = topics
    },
    setTopicsLoading(state, loadingState) {
      state.topicsLoading = loadingState
    },
    setSelectedTopics(state, topics) {
      state.selectedTopics = topics

      router.replace({query: topics.reduce((a, v) => ({...a, [v]: true}), {})})
    },
    setProjects(state, projects) {
      state.projects = projects
    },
    setProjectsLoading(state, loadingState) {
      state.projectsLoading = loadingState
    }
  },
  getters: {
    getSelectedTopics(state) {
      return state.selectedTopics;
    },
    getAvailableTopics(state) {
      return state.availableTopics
    },
    getTopicsLoading(state) {
      return state.topicsLoading
    },
    getProjectsLoading(state) {
      return state.projectsLoading
    },
    getProjects(state) {
      return state.projects
    }
  },
  modules: {},
});

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Le custom title',
    links: [
      'https://www.youtube.com/watch?v=cq1er8IWz1U',
      'https://www.youtube.com/watch?v=qmjXim0lAto',
      'https://www.youtube.com/watch?v=zGdm69kBbWk'
    ],
    drawerOpen: true
  },
  getters: {
    sumLinks (state) {
      return state.links.length
    }
  },
  mutations: {
    TOGGLE_DRAWER: (state, value) => {
      state.drawerOpen = value
    }

  },
  actions: {

  }
})

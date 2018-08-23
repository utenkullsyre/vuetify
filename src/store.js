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
    drawerOpen: true,
    snack: {
      open: false,
      text: 'Sidepanelet ble åpnet. Denne meldingen vil slette seg selv etter seks sekunder'
    },
    modalsynlig: true
  },
  getters: {
    sumLinks (state) {
      return state.links.length;
    },
  },
  mutations: {
    TOGGLE_DRAWER: (state, value) => {
      state.drawerOpen = value;
    },
    TOGGLE_SNACK: (state, value) => {
      state.snack.open = value;
    },
    TOGGLE_MODAL: (state, value) => {
      state.modalsynlig = value
    },
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
  },
  actions: {

  }
})

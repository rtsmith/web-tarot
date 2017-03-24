import Vue from 'vue'
import Vuex from 'vuex'
import cards from '../cards.json'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    deck: cards,
    drawnCard: {}
  },
  mutations: {
    draw (state) {
      let index = Math.floor(Math.random() * state.deck.length)
      state.drawnCard = state.deck[index]
      state.deck.splice(index, 1)
    }
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'
import cards from '../cards.json'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    cards: cards
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'
import cards from '../cards.json'

Vue.use(Vuex)

let layout = [
  {x: 0, y: 0, order: null},
  {x: 1, y: 0, order: 2},
  {x: 2, y: 0, order: null},
  {x: 0, y: 1, order: 5},
  {x: 1, y: 1, order: 1},
  {x: 2, y: 1, order: 4},
  {x: 0, y: 2, order: null},
  {x: 1, y: 2, order: 3},
  {x: 2, y: 2, order: null},
]

let store = new Vuex.Store({
  state: {
    deck: Object.create(cards),
    layout: layout,
    drawnCards: []
  },
  mutations: {
    draw (state) {
      let index = Math.floor(Math.random() * state.deck.length)
      state.drawnCards.push(state.deck[index])
      state.deck.splice(index, 1)
    },
    shuffle (state) {
      state.deck = Object.create(cards)
      state.drawnCards = []
    }
  }
})

export default store

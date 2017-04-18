import Vue from 'vue'
import Vuex from 'vuex'
import cards from '../cards.json'

Vue.use(Vuex)

let layouts = {
  basic: [
    {x: 2, y: 2, order: null},
    {x: 0, y: 1, order: 5},
    {x: 1, y: 1, order: 1},
    {x: 0, y: 0, order: null},
    {x: 1, y: 0, order: 2},
    {x: 2, y: 1, order: 4},
    {x: 0, y: 2, order: null},
    {x: 2, y: 0, order: null},
    {x: 1, y: 2, order: 3},
  ],
  celtic: [
    {x: 0, y: 0, order: null},
    {x: 1, y: 0, order: 3},
    {x: 1, y: 2, order: 4},
    {x: 2, y: 2, order: null},
    {x: 0, y: 3, order: 10},
    {x: 1, y: 3, order: 9},
    {x: 2, y: 0, order: null},
    {x: 0, y: 1, order: 6},
    {x: 1, y: 1, order: 1},
    {x: 1, y: 1, order: 2, cross: true},
    {x: 2, y: 1, order: 5,},
    {x: 0, y: 2, order: null},
    {x: 2, y: 3, order: 8},
    {x: 3, y: 3, order: 7},
  ]
}

let store = new Vuex.Store({
  state: {
    deck: Object.create(cards),
    layouts: layouts,
    layout: layouts.basic,
    drawnCards: [],
    focus: -1
  },
  mutations: {
    changeLayout (state, layout) {
      state.layout = state.layouts[layout]
    },
    draw (state) {
      let index = Math.floor(Math.random() * state.deck.length)
      state.drawnCards.push(state.deck[index])
      state.deck.splice(index, 1)
    },
    shuffle (state) {
      state.deck = Object.create(cards)
      state.drawnCards = []
      state.focus = -1
    },
    focus (state, index) {
      state.focus = index
    }
  }
})

export default store

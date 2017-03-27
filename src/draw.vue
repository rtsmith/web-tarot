<template>
  <div class=draw>
    <h1>drawn card:</h1>
    <p v-if="card">{{ card.name || "_no name_" }}</p>
    <img v-if="card" :src="imgPath(card.path)" />
    <button v-on:click="drawCard">Draw Card</button>
  </div>
</template>
<script>
export default {
  computed: {
    card () { 
      return this.$store.state.drawnCards.slice(-1)[0]
    }
  },
  methods: {
    drawCard () {
      this.$store.commit('draw')
    },
    imgPath (path) {
      // use this to get the webpack'd reference
      if (path) // no drawnCard on init
        return require(`./${path}`)
    }
  }
}
</script>

<style lang="scss">
.draw {
  max-height: 300px;
  img {
    height: 200px;
  }
}
</style>

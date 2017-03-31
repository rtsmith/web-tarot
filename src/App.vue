<template>
  <div id="app">
    <draw />
    <shuffle />
    <div class="drawn-card">
      <img v-if="drawnCard" :src="imgPath(drawnCard.path)" />
    </div>
    <field />
  </div>
</template>

<script>
import Draw from './draw.vue'
import Shuffle from './shuffle.vue'
import Field from './field.vue'

export default {
  name: 'app',
  components: {
    Draw,
    Shuffle,
    Field,
  },
  computed: {
    drawnCard () {
      return this.$store.state.drawnCards.slice(-1)[0]
    }
  },
  methods: {
    imgPath (path) {
      // use this to get the webpack'd reference
      if (path)
        return require(`./${path}`)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.drawn-card {
  max-height: 300px;
  img {
    height: 200px;
  }
}
</style>

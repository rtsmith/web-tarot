<template>
  <div id="app">
    <draw />
    <div class="field">
      <div v-for="card in drawnCards">
        <p v-if="card.name">{{ card.name }}</p>
        <img :src="imgPath(card.path)" />
      </div>
    </div>
  </div>
</template>

<script>
import Draw from './draw.vue'
export default {
  name: 'app',
  components: { Draw },
  computed: {
    drawnCards () { return this.$store.state.drawnCards }
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
.field {
  display: flex;
  flex-wrap: wrap-reverse;
  text-align: center;
  img {
    max-width: 200px;
  }
}
.field > div {
  width: 25%;
}
</style>

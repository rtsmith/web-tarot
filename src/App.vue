<template>
  <div id="app">
    <draw />
    <div v-for="card in deck">
      Name: {{ card.name }}
      <img :src="imgPath(card.path)" />
    </div>
  </div>
</template>

<script>
import Draw from './draw.vue'
export default {
  name: 'app',
  components: { Draw },
  computed: {
    deck () { return this.$store.state.deck }
  },
  methods: {
    imgPath (url) {
      // use this to get the webpack'd reference
      return require(`./${url}`)
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

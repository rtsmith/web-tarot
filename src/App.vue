<template>
  <div id="app">
    <div class="controls container">
      <layout />
      <hr>
      <draw />
      <shuffle />
      <div v-if="inspectedCard" class="inspected-card">
        <img :src="imgPath(inspectedCard.path)" />
        <p>{{ inspectedCard.name }}</p>
      </div>
    </div>
    <div class="layout container">
      <field />
    </div>
  </div>
</template>

<script>
import Draw from './draw.vue'
import Shuffle from './shuffle.vue'
import Field from './field.vue'
import Layout from './layout.vue'

export default {
  name: 'app',
  components: {
    Draw,
    Shuffle,
    Field,
    Layout
  },
  computed: {
    inspectedCard () {
      return this.$store.getters.inspectedCard
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
  font-size: 20px;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
.inspected-card {
  max-height: 300px;
  padding: 1em;
  img {
    height: 200px;
  }
}
.container {
  display: inline-block;
  vertical-align: top;
}
.controls {
  width: 20%;
  max-width: 300px;
  margin-right: -1em;
  & > div {
    display: inline-block;
  }
}
.layout {
  width: 80%;
}
button {
  font-size: .8em;
  background: white;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 0 1px 2px gray;
  &.active {
    background: white;
    border: 2px solid purple;
  }
  &:focus {
    outline: none;
  }
}
</style>

<template>
  <div class=draw>
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

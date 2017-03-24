<template>
  <div>
    <h1>drawn card:</h1>
    <p>{{ card.name || "_no name_" }}</p>
    <button v-on:click="drawCard">Draw Card</button>
  </div>
</template>
<script>
export default {
  computed: {
    card () { return this.$store.state.drawnCard }
  },
  methods: {
    drawCard () {
      this.$store.commit('draw')
    }
  }
}
</script>

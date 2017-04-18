<template>
  <div class=draw>
    <button v-on:click="drawCard">Draw Card</button>
  </div>
</template>

<script>
export default {
  methods: {
    drawCard () {
      this.$store.commit('draw')
    }
  }
}
</script>

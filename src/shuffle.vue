<template>
  <div>
    <button v-on:click="shuffle">Shuffle</button>
  </div>
</template>

<script>
export default {
  methods: {
    shuffle () {
      this.$store.commit('shuffle')
    }
  }
}
</script>

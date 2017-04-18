<template>
  <div>
    <h4>Layouts</h4>
    <button 
      v-for="layout in layouts" 
      v-on:click="changeLayout(layout)"
      :class="{ active: layout === activeLayout }"
    >
      {{ layout }}
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    layouts () {
      return Object.keys(this.$store.state.layouts)
    },
    activeLayout () {
      let layout = (this.$store.state.layout)
      return layout
    }
  },
  methods: {
    changeLayout (layout) {
      this.$store.commit('changeLayout', layout)
    }
  }
}
</script>

<style lang="scss">
  button.active {
    background: purple;
  }
</style>

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
      return this.$store.state.layouts
    },
    activeLayout () {
      return this.$store.state.layout
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
button {
  &.active {
    background: white;
    border: 1px solid purple;
    border-radius: 5px;
  }
  &:focus {
    outline: none;
  }
}
</style>

<template>
  <div class=field :style="style">
    <div v-for="cell in layout">
      <div if="cell.order">
        <p>{{ cell.order }}</p>
        <div v-if="drawnCards[cell.order - 1]">
          <img :src="imgPath(drawnCards[cell.order - 1].path)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      style: {
        // make these dynamic
        "grid-template-columns": "1fr 1fr 1fr",
        "grid-template-rows": "1fr 1fr 1fr"
      }
    }
  },
  computed: {
    drawnCards () {
      return this.$store.state.drawnCards 
    },
    layout () {
      return this.$store.state.layout
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
.field {
  display: grid;
  width: 800px;
  height: 500px;
  color: white;
  img {
    max-width: 200px;
  }
}
.field > div {
  background: purple;
  padding: 4px;
}
</style>

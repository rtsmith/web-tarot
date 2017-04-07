<template>
  <div class=field :style="containerStyle">
    <div v-for="cell in layout" :style="cellStyle(cell)">
        <p>{{ cell.order }}</p>
        <div v-if="drawnCards[cell.order - 1]">
          <img :src="imgPath(drawnCards[cell.order - 1].path)" />
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cellStyle (cell) {
        let style = {
          "grid-row-start": cell.x + 1,
          "grid-column-start": cell.y + 1
        }
        if (cell.cross)
          style["transform"] = "rotate(90deg)"

        return style
      }
    }
  },
  computed: {
    drawnCards () {
      return this.$store.state.drawnCards 
    },
    containerStyle () {
      let x = Math.max(...this.$store.state.layout.map(v => v.x)) + 1
      let y = Math.max(...this.$store.state.layout.map(v => v.y)) + 1
      return {
        "grid-template-rows": `repeat(${ x } 1fr)`,
        "grid-template-columns": `repeat(${ y } 1fr)`
      }
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
  color: black;
  img {
    max-width: 200px;
  }
}
.field > div {
  padding: 4px;
}
</style>

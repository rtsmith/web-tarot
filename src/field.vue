<template>
  <div class=field :style="containerStyle()">
    <div v-for="cell in layout" :style="cellStyle(cell)">
      <transition name="fade">
        <div v-if="drawnCards[cell.order - 1]"
             v-on:mousedown="focusCard(cell.order)"
             class="card">
          <img :src="imgPath(drawnCards[cell.order - 1].path)" />
        </div>
      </transition>
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

        if (cell.order === this.$store.state.focus) 
          style["background"] = "purple"
          
        if (cell.cross)
          style["transform"] = "rotate(90deg)"

        return style
      },
      containerStyle () {
        let layout = this.$store.getters.layoutData
        if (layout) {
          // find the number of rows & columns from arbitrary rectangular layout
          // then return some CSS
          let x = Math.max(...layout.map(v => v.x)) + 1
          let y = Math.max(...layout.map(v => v.y)) + 1
          return {
            "grid-template-rows": `repeat(${ x }, 1fr)`,
            "grid-template-columns": `repeat(${ y }, 1fr)`
          }
        }
      }
    }
  },
  computed: {
    drawnCards () {
      return this.$store.state.drawnCards 
    },
    layout () {
      return this.$store.getters.layoutData
    }
  },
  methods: {
    imgPath (path) {
      // use this to get the webpack'd reference
      if (path)
        return require(`./${path}`)
    },
    focusCard (index) {
      this.$store.commit('focus', index)
    }
  }
}
</script>

<style lang="scss">
.field {
  display: grid;
  color: black;
  width: 400px;
  img {
    max-width: 100%;
  }
}
.field .card {
  display: inline-block;
  padding: 4px;
}
.fade-enter-active .fade-leave-active {
  opacity: 1;
  transition: opacity 1s;
}
.fade-enter .fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'currentPage',
      'currentShuttle',
      'allBtn'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_SHUTTLE',
      'CLEAR_SHUTTLE',
      'TRIGGER_SHUTTLE_METHOD'
    ])
  },
  mounted() {
    document.onmousewheel = (e) => {
      if (e.deltaY > 0) {
        this.SET_SHUTTLE(false)
      } else {
        this.SET_SHUTTLE(true)
      }
      // const target = this.$store.state.common
      // console.log(target.allBtn[target.currentPage][target.currentShuttle])
    }
    document.addEventListener('keydown', e => {
      console.log('keydown.code', e, e.keyCode)
      if (e.keyCode === 13 && this.currentShuttle >= 0) this.TRIGGER_SHUTTLE_METHOD()
    })
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100vh;
  background-color: #000;
}
</style>

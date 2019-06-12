<template>
  <div class="d-dialog-panel" v-if="show">
    <div class="d-mask"></div>
    <div class="dialog-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.d-dialog-panel {
  .d-mask{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .5);
  }
  .dialog-wrap{
    z-index: 21;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }
}
</style>

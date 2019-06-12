<template>
  <div id="full-screen-panel" v-if="show">
    <div class="round"
        v-for="(item, index) in allBtn['changeType']"
        :key="index"
        :style="
          currentPage === 'changeType'
          && currentShuttle >= 0
          && currentShuttle === index ? 'background: orange;color: #fff' : 'color: #000'">
          {{ item.key }}
        {{ _setThat($store.state.common.allBtn['changeType'][index], that) }}
    </div>
  </div>
</template>
<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    show: {
        type: Boolean,
        default: false
    }
  },
  components: {
  },
  data () {
    return {
      dialogShow: false
    }
  },
  computed: {
    ...mapGetters([
      'currentPage',
      'currentShuttle',
      'allBtn'
    ]),
    that () {
      return this
    }
  },
  methods: {
    ...mapMutations([
      'SET_NOW_CONTROL', // 设置现在的操作项
      'SET_CURRENTPAGE', // 设置当前页，用于控制飞梭
      'CLEAR_SHUTTLE' // 清楚飞梭在当前页的索引
    ]),
    typeChange() {
      console.log('typeChange')
    },
    cancel() {
      this.$emit('on-close')
      this.CLEAR_SHUTTLE()
    }
  },
  beforeDestroy () {
  },
  created () {
  },
  mounted () {
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
#full-screen-panel{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .round{
    width: 150px;
    height: 150px;
    border: 1px solid #43cd80;
    border-radius: 50%;
  }
}
</style>

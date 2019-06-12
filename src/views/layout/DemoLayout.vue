<template>
  <div class="demo-tab-panel">
    <router-view/>
    <div class="bottom-btn-panel">
        <template v-for="(item, index) in allBtn['common']">
            <div class="tab-item" @click="excute(item.key)" :key="index" v-if="index < 4">
                <!-- 把对象绑定其中 -->
                {{ _setThat($store.state.common.allBtn['common'][index], that) }}
                <div class="tab-item-icon"
                :style="
                  currentPage === 'common'
                  && currentShuttle >= 0
                  && currentShuttle === index ? 'background: orange;color: #fff' : ''">
                <span>{{ item.key }}</span>
                </div>
            </div>
        </template>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'nowControl',
      'allBtn',
      'currentShuttle',
      'currentPage'
    ]),
    that() {
      return this
    }
  },
  created () {
  },
  methods: {
    ...mapMutations(['SET_NOW_CONTROL']),
    excute(method) {
      this[method]()
    },
    tabBtn1() {
      console.log('tabBtn1')
    },
    tabBtn2() {
      console.log('tabBtn2')
    },
    tabBtn3() {
      console.log('tabBtn3')
    },
    tabBtn4() {
      console.log('tabBtn4')
    }
  }
}
</script>
<style lang="scss" scoped>
  .demo-tab-panel {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
    .bottom-btn-panel{
      width: 100%;
      height: 48px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #fff;
    }
  }
</style>

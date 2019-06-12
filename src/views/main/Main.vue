<template>
  <div id="main-monitor-panel">
    <d-dialog :show="dialogShow">
      <div class="confirm-panel">
        <div class="msg-wrap">是否?</div>
        <div class="button-wrap">
          <div class="cancel"
            @click="cancel"
            :style="
            currentPage === 'confirm'
            && currentShuttle === 0 ? 'background: orange;color: #fff' : ''">否</div>
          <div class="ok"
            @click="ok"
            :style="
            currentPage === 'confirm'
            && currentShuttle === 1 ? 'background: orange;color: #fff' : ''">是</div>
        </div>
      </div>
    </d-dialog>
    {{ _setThat($store.state.common.allBtn['confirm'][0], that) }}
    {{ _setThat($store.state.common.allBtn['confirm'][1], that) }}
    {{ _setThat($store.state.common.allBtn['common'][4], that) }}
    {{ _setThat($store.state.common.allBtn['common'][5], that) }}
    <div class="other-btn-panel">
      <div class="round"
        :style="
          currentPage === 'common'
          && currentShuttle === 4 ? 'background: orange;' : ''">{{ allBtn['common'][4].key }}</div>
      <div class="square"
        :style="
          currentPage === 'common'
          && currentShuttle === 5 ? 'background: orange;' : ''">{{ allBtn['common'][5].key }}</div>
    </div>
    <full-screen :show="fullShow"
      @on-close="onClose"></full-screen>
  </div>
</template>
<script>

import { mapGetters, mapMutations } from 'vuex'
import dDialog from '@/components/DDialog'
import fullScreen from './components/FullScreen.vue'


export default {
  props: {
  },
  components: {
    dDialog,
    fullScreen
  },
  data () {
    return {
      dialogShow: false,
      fullShow: false
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
    stop () {
      this.SET_NOW_CONTROL('')
    },
    ok() {
      this.dialogShow = false
      this.CLEAR_SHUTTLE()
      this.SET_CURRENTPAGE('common')
    },
    cancel() {
      this.dialogShow = false
      this.CLEAR_SHUTTLE()
      this.SET_CURRENTPAGE('common')
    },
    otherBtn1() {
      console.log('otherBtn1')
      this.fullShow = true
      this.CLEAR_SHUTTLE()
      this.SET_CURRENTPAGE('changeType')
    },
    otherBtn2() {
      console.log('otherBtn2')
      this.dialogShow = true
      this.CLEAR_SHUTTLE()
      this.SET_CURRENTPAGE('confirm')
    },
    onClose() {
      this.fullShow = false
      this.CLEAR_SHUTTLE()
      this.SET_CURRENTPAGE('common')
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
  #main-monitor-panel{
    float: left;
    width: 100%;
    height: calc(759px - 48px);
    overflow: hidden;
    .confirm-panel{
      width: 300px;
      height: 150px;
      background-color: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .msg-wrap{
        height: 70%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .button-wrap{
        height: 30%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .ok, .cancel{
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border-top: 1px solid #999;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ok{
          border-left: 1px solid #999;
        }
      }
    }
    .start-confirm-panel{
      width: 400px;
      height: 200px;
      background: #fff;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .start-btn{
        margin-top: 12px;
        padding: 8px 15px;
        border-radius: 8px;
        color: #fff;
        background-color: #4380cd;
      }
    }
    .other-btn-panel{
      position: relative;
      .round{
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #43cd80;
        top: 100px;
        left: 50px;
        border-radius: 50%;
        color: #fff;
      }
      .square{
        position: absolute;
        width: 100px;
        height: 100px;
        border: 1px solid #ff8080;
        top: 400px;
        right: 80px;
        color: #fff;
      }
    }
  }
</style>

/* eslint-disable */
  import { shuttleParam } from '@/assets/constant'
  
  const state = {
    // 当前飞梭索引
    currentShuttle: -1,
    // 当前飞梭页
    currentPage: 'common',
    // 所有飞梭能到的按钮
    allBtn: shuttleParam
  };
  const getters = {
    allBtn: (state) => state.allBtn,
    currentShuttle: (state) => state.currentShuttle,
    currentPage: (state) => state.currentPage,
  };
  const actions = {
  
  };
  const mutations = {
    SET_SHUTTLE(state, direction) {
      const len = state.allBtn[state.currentPage].length
      if (state.currentShuttle >= 0) {
        if (direction) {
          // 顺时针
          if (state.currentShuttle === len - 1) state.currentShuttle = 0
          else state.currentShuttle += 1
        } else {
          // 逆时针
          if (state.currentShuttle === 0) state.currentShuttle = len - 1
          else state.currentShuttle -= 1
        }
      } else state.currentShuttle = 0
      console.log('currentShuttle', state.currentShuttle)
    },
    CLEAR_SHUTTLE(state) {
      state.currentShuttle = -1
    },
    TRIGGER_SHUTTLE_METHOD(state) {
      // if (state.currentShuttle >= 0) state.currentThat.excute(state.allBtn[state.currentPage][state.currentShuttle].key)
      const target = state.allBtn[state.currentPage][state.currentShuttle]
      if (state.currentShuttle >= 0) target.that[target.key]()
    },
    SET_CURRENTPAGE(state, currentPage) {
      state.currentPage = currentPage
    }
  };
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  
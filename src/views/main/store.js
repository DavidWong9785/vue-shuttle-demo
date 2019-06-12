/* eslint-disable */
const state = {
  nowControl: '',
}

const getters = {
  nowControl: state => state.nowControl,
}

const actions = {
}

const mutations = {
  SET_NOW_CONTROL(state, nowControl) {
    state.nowControl = nowControl
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

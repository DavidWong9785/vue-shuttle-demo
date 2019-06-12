import Vue from 'vue'
const requireAll = (requireContext) => {
  console.info('插件加载中...', requireContext.keys())
  return requireContext.keys().map(requireContext).filter((plugin) => {
    console.log(plugin, '插件加载中...')
    if (plugin.default && plugin.default.enable) {
      Vue.use(plugin.default)
    }
    return plugin
  })
}

const req = require.context('../views', true, /\.plugin\.js$/)
requireAll(req)

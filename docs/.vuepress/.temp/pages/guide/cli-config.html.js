import comp from "D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/cli-config.html.vue"
const data = JSON.parse("{\"path\":\"/guide/cli-config.html\",\"title\":\"配置 CLI 工具\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1770619996000,\"contributors\":[{\"name\":\"wlphp\",\"username\":\"wlphp\",\"email\":\"613154514@qq.com\",\"commits\":1,\"url\":\"https://github.com/wlphp\"}],\"changelog\":[{\"hash\":\"094118ff2ee3da84eab8ae504d717fb2c7c0c042\",\"time\":1770619996000,\"email\":\"613154514@qq.com\",\"author\":\"wlphp\",\"message\":\"初始化魔板\"}]},\"filePathRelative\":\"guide/cli-config.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

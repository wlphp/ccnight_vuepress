import comp from "D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/common-config.html.vue"
const data = JSON.parse("{\"path\":\"/guide/common-config.html\",\"title\":\"通用配置\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"guide/common-config.md\"}")
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

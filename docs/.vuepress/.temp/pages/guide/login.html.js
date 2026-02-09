import comp from "D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/login.html.vue"
const data = JSON.parse("{\"path\":\"/guide/login.html\",\"title\":\"登录账号\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"guide/login.md\"}")
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

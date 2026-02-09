export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎使用 night cc 中转站"} }],
  ["/guide/api-token.html", { loader: () => import(/* webpackChunkName: "guide_api-token.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/api-token.html.js"), meta: {"title":"创建 API 令牌"} }],
  ["/guide/cc-switch.html", { loader: () => import(/* webpackChunkName: "guide_cc-switch.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/cc-switch.html.js"), meta: {"title":"cc-switch 使用"} }],
  ["/guide/claude-code-config.html", { loader: () => import(/* webpackChunkName: "guide_claude-code-config.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/claude-code-config.html.js"), meta: {"title":"Claude Code 配置"} }],
  ["/guide/cli-config.html", { loader: () => import(/* webpackChunkName: "guide_cli-config.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/cli-config.html.js"), meta: {"title":"配置 CLI 工具"} }],
  ["/guide/common-config.html", { loader: () => import(/* webpackChunkName: "guide_common-config.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/common-config.html.js"), meta: {"title":"通用配置"} }],
  ["/guide/faq-claude-code.html", { loader: () => import(/* webpackChunkName: "guide_faq-claude-code.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/faq-claude-code.html.js"), meta: {"title":"Claude Code 常见问题"} }],
  ["/guide/faq-codex.html", { loader: () => import(/* webpackChunkName: "guide_faq-codex.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/faq-codex.html.js"), meta: {"title":"Codex 常见问题"} }],
  ["/guide/faq-gemini.html", { loader: () => import(/* webpackChunkName: "guide_faq-gemini.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/faq-gemini.html.js"), meta: {"title":"Gemini 常见问题"} }],
  ["/guide/faq.html", { loader: () => import(/* webpackChunkName: "guide_faq.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/faq.html.js"), meta: {"title":"常见问题"} }],
  ["/guide/gemini-config.html", { loader: () => import(/* webpackChunkName: "guide_gemini-config.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/gemini-config.html.js"), meta: {"title":"Gemini 配置"} }],
  ["/guide/login.html", { loader: () => import(/* webpackChunkName: "guide_login.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/login.html.js"), meta: {"title":"登录账号"} }],
  ["/guide/purchase.html", { loader: () => import(/* webpackChunkName: "guide_purchase.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/purchase.html.js"), meta: {"title":"购买额度充值"} }],
  ["/guide/quick-start.html", { loader: () => import(/* webpackChunkName: "guide_quick-start.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/quick-start.html.js"), meta: {"title":"快速开始"} }],
  ["/guide/register.html", { loader: () => import(/* webpackChunkName: "guide_register.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/guide/register.html.js"), meta: {"title":"注册账号"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/wwwroot/wanglei/ccnight_vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

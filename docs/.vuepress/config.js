import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'CCNight 使用文档',
  description: '我的 VuePress 站点',
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar: [
      {
        text: '快速开始',
        children: [
          '/guide/register.md',
          '/guide/login.md',
          '/guide/purchase.md',
          '/guide/api-token.md',
          '/guide/cli-config.md',
        ],
      },
      {
        text: 'cc-switch 使用',
        children: [
          '/guide/common-config.md',
        ],
      },
      {
        text: '常见问题',
        children: [
          '/guide/faq-claude-code.md',
          '/guide/faq-codex.md',
          '/guide/faq-gemini.md',
        ],
      },
    ],
    sidebarDepth: 2,
  }),
})

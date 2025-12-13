import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Just4fun",
  description: "Armbian and Linux",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '文档和教程', link: '/docs/armbian-basic/armbian-introduction' },
    ],

    sidebar: [
      {
        text: 'Armbian - Ubuntu noble',
        items: [
          { text: 'Armbian 介绍', link: '/docs/armbian-basic/armbian-introduction' },
          { text: '初始化 Armbian', link: '/docs/armbian-basic/initialize-armbian' },
          { text: '开发和运维工具', link: '/docs/armbian-basic/devops' },
          { text: 'LNMP 环境搭建', link: '/docs/armbian-basic/lnmp-environment' },
          { text: 'Docker 安装和基础使用', link: '/docs/armbian-basic/docker-basic' },
          { text: 'CloudFlared 开放公网访问', link: '/docs/armbian-basic/cloudflared' },
        ]
      },
      {
        text: 'ARM 小主机',
        items: [
          { text: '玩客云 Pro / 斐讯 N1 对比', link: '/docs/arm-box/arm-box-comparison' },
          { text: '淘宝小店', link: '/docs/arm-box/taobao-store' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '微信交流群', link: '/docs/others/wechat-group' },
          { text: '社交媒体帐号', link: '/docs/others/social-media-accounts' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

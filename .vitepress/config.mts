import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite';
import UnoCssConfig from '../unocss.config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LYuanC'Blog",
  description: "A simpl blog",
  // 参考自 https://github.com/vuejs/vitepress/issues/2424
  vite: {
    optimizeDeps: {
      exclude: ['vitepress']
    },
    server: {
      hmr: {
        overlay: false
      }
    },
    plugins: [
      UnoCSS(UnoCssConfig)
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/posts/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/posts/markdown-examples' },
          { text: 'Runtime API Examples', link: '/posts/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ]
  }
})

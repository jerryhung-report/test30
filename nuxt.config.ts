// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      // Public keys if needed
    },
    geminiApiKey: process.env.GEMINI_API_KEY || process.env.API_KEY || ''
  },
  build: {
    transpile: ['lucide-vue-next']
  },
  vite: {
    ssr: {
      noExternal: ['lucide-vue-next']
    },
    optimizeDeps: {
      exclude: ['lucide-vue-next']
    },
    server: {
      hmr: {
        protocol: 'wss',
        clientPort: 443,
        path: 'hmr/'
      }
    }
  },
  app: {
    head: {
      title: '基金人格測驗 - CMoneyFund',
      meta: [
        { name: 'description', content: '準備好探索你的基金人格了嗎？30題測驗，完成後即可獲得您的投資風格分析報告與最適配基金。' }
      ]
    }
  }
})

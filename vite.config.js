import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// Local dev middleware for serverless API (Only active during `vite` dev server)
function apiDevPlugin() {
  return {
    name: 'api-dev-server',
    apply: 'serve', // Only run during dev server, never during build
    configureServer(server) {
      if (process.loadEnvFile) {
        try {
          process.loadEnvFile()
        } catch {}
      } else {
        try {
          const env = loadEnv('development', process.cwd(), '')
          Object.assign(process.env, env)
        } catch {}
      }

      server.middlewares.use(async (req, res, next) => {
        if (req.url.startsWith('/api/events')) {
          try {
            const { default: handler } = await import('./api/events.js')
            await handler(req, res)
            return
          } catch (err) {
            console.error('API Events Dev Error:', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err.message }))
            return
          }
        }
        if (req.url.startsWith('/api/auth')) {
          try {
            const { default: handler } = await import('./api/auth.js')
            await handler(req, res)
            return
          } catch (err) {
            console.error('API Auth Dev Error:', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err.message }))
            return
          }
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [vue(), apiDevPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})

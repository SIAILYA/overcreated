import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({mode}) => {
    return defineConfig({
        plugins: [vue()],
        base: mode === 'production' ? '/admin/' : '/',
        resolve: {
            alias: {
                '@': '/src',
                '@components': '/src/components',
                '@stores': '/src/stores',
                '@data': '/src/data',
            }
        }
    })
}

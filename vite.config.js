  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import { resolve } from 'path'

  export default defineConfig({
    plugins: [react()],
    base: '/hayohio-portfolio/',
    
    resolve: {
      alias: [
        // ✅ 기본 alias
        { find: '@', replacement: resolve(__dirname, 'src') },
        
        // ✅ 컴포넌트 alias
        { find: '@components', replacement: resolve(__dirname, 'src/components') },
        { find: '@components/layout', replacement: resolve(__dirname, 'src/components/layout') },
        
        // ✅ 페이지 alias
        { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
        
        // ✅ 데이터/스토어 alias
        { find: '@data', replacement: resolve(__dirname, 'src/data') },
        { find: '@store', replacement: resolve(__dirname, 'src/store') },
        
        // ✅ 훅/유틸리티 alias
        { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
        { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
        { find: '@theme', replacement: resolve(__dirname, 'src/theme') },
        
        // ✅ 스타일 alias
        { find: '@styles', replacement: resolve(__dirname, 'src/styles') }
      ]
    },
    
    build: {
      outDir: 'dist',
      sourcemap: true,
      target: 'es2020'
    }
  })

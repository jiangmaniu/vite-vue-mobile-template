import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

import { configCompressPlugin } from './compress'
import { configImageMinPlugin } from './imageMin'
import { configStyleImportPlugin } from './styleImport'

type Plugins = (Plugin | Plugin[])[]

export function configVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: Plugins = [vue()]

  // 生产环境
  if (isBuild) {
    // 代码压缩 vite-plugin-compression
    vitePlugins.push(configCompressPlugin())

    // 图片压缩 vite-plugin-imagemin
    vitePlugins.push(configImageMinPlugin())

    // 样式按需导入 vite-plugin-style-import
    vitePlugins.push(configStyleImportPlugin())
  }

  console.log(viteEnv)

  return vitePlugins
}

/**
 * 组件库按需导入样式
 *
 */
import type { Plugin } from 'vite'
import styleImportPlugin from 'vite-plugin-style-import'

export function configStyleImportPlugin() {
  const plugin: Plugin = styleImportPlugin({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => {
          return `vant/es/${name}/style`
        },
      },
    ],
  })
  return plugin
}

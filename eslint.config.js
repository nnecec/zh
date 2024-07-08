import pluginNext from '@next/eslint-plugin-next'
import nnecec from '@nnecec/eslint-config'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...nnecec({
    typescript: true,
  }),
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs['core-web-vitals'].rules,
    },
    settings: {
      next: {
        rootDir: ['apps/*/'],
      },
    },
  },
]

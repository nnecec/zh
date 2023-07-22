import { parsers as babelParsers } from 'prettier/plugins/babel'
import { parsers as acornParsers } from 'prettier/plugins/acorn'
import { parsers as flowParsers } from 'prettier/plugins/flow'
import { parsers as glimmerParsers } from 'prettier/plugins/glimmer'
import { parsers as htmlParsers } from 'prettier/plugins/html'
import { parsers as meriyahParsers } from 'prettier/plugins/meriyah'
import { parsers as postcssParsers } from 'prettier/plugins/postcss'
import { parsers as typescriptParsers } from 'prettier/plugins/typescript'
import { parsers as markdownParsers } from 'prettier/plugins/markdown'

export function getBasePlugins() {
  return {
    parsers: {
      html: htmlParsers.html,
      glimmer: glimmerParsers.glimmer,
      lwc: htmlParsers.lwc,
      angular: htmlParsers.angular,
      vue: htmlParsers.vue,
      css: postcssParsers.css,
      scss: postcssParsers.scss,
      less: postcssParsers.less,
      babel: babelParsers.babel,
      'babel-flow': babelParsers['babel-flow'],
      flow: flowParsers.flow,
      typescript: typescriptParsers.typescript,
      'babel-ts': babelParsers['babel-ts'],
      acorn: acornParsers.acorn,
      meriyah: meriyahParsers.meriyah,
      markdown: markdownParsers.markdown,
      mdx: markdownParsers.mdx,
      __js_expression: babelParsers.__js_expression,
      // ...getAdditionalParsers(),
    },
    printers: {
      // ...getAdditionalPrinters(),
    },
  }
}

export type ParserFormat = keyof ReturnType<typeof getBasePlugins>['parsers']

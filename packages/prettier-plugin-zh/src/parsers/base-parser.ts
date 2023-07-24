import { parsers as acornParsers } from 'prettier/plugins/acorn'
import { parsers as babelParsers } from 'prettier/plugins/babel'
import { parsers as flowParsers } from 'prettier/plugins/flow'
import { parsers as glimmerParsers } from 'prettier/plugins/glimmer'
import { parsers as htmlParsers } from 'prettier/plugins/html'
import { parsers as markdownParsers } from 'prettier/plugins/markdown'
import { parsers as meriyahParsers } from 'prettier/plugins/meriyah'
import { parsers as typescriptParsers } from 'prettier/plugins/typescript'

import { parsers as postcssParsers } from 'prettier/plugins/postcss'

export function getBasePlugins() {
  return {
    parsers: {
      // __js_expression: babelParsers.__js_expression,
      acorn: acornParsers.acorn,
      angular: htmlParsers.angular,
      babel: babelParsers.babel,
      'babel-flow': babelParsers['babel-flow'],
      'babel-ts': babelParsers['babel-ts'],
      css: postcssParsers.css,
      flow: flowParsers.flow,
      glimmer: glimmerParsers.glimmer,
      html: htmlParsers.html,
      less: postcssParsers.less,
      lwc: htmlParsers.lwc,
      markdown: markdownParsers.markdown,
      mdx: markdownParsers.mdx,
      meriyah: meriyahParsers.meriyah,
      scss: postcssParsers.scss,
      typescript: typescriptParsers.typescript,
      vue: htmlParsers.vue,
      // ...getAdditionalParsers(),
    },
    printers: {
      // ...getAdditionalPrinters(),
    },
  }
}

export type ParserFormat = keyof ReturnType<typeof getBasePlugins>['parsers']

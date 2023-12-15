import type { Parser, Plugin } from 'prettier'

import type { Transform } from '../transforms/types'
import type { ParserFormat } from './base-parser'

import { defaultTransform, transformMarkdown } from '../transforms'
import { getBasePlugins } from './base-parser'

const base = getBasePlugins()

export function createParser(parserFormat: ParserFormat, transform: Transform = defaultTransform): Parser {
  return {
    ...base.parsers[parserFormat],
    async parse(text, options) {
      const original = base.parsers[parserFormat]
      const ast = await original.parse(text, options)

      transform(ast, options)

      return ast
    },
  }
}

export const parsers: Plugin['parsers'] = {
  markdown: createParser('markdown', transformMarkdown),
}

import type { Parser, Plugin } from 'prettier'

import { defaultTransform, transformMarkdown } from '../transforms'

import { getBasePlugins } from './base-parser'

import type {ParserFormat } from './base-parser';

const base = getBasePlugins()

export function createParser(parserFormat: ParserFormat, transform = defaultTransform): Parser {
  return {
    ...base.parsers[parserFormat],
    async parse(text, options) {
      const original = base.parsers[parserFormat]
      const ast = await original.parse(text, options)

      transform(ast)

      return ast
    },
  }
}

export const parsers: Plugin['parsers'] = {
  markdown: createParser('markdown', transformMarkdown),
  mdx: createParser('mdx'),
}

import { Parser, Plugin } from 'prettier'
import { ParserFormat, getBasePlugins } from './base-parser'
import { defaultTransform, transformMarkdown } from '../transforms'

const base = getBasePlugins()

export function createParser(parserFormat: ParserFormat, transform = defaultTransform): Parser {
  return {
    ...base.parsers[parserFormat],
    async parse(text, options) {
      const original = base.parsers[parserFormat]
      let ast = await original.parse(text, options)

      transform(ast)

      return ast
    },
  }
}

export const parsers: Plugin['parsers'] = {
  markdown: createParser('markdown', transformMarkdown),
  mdx: createParser('mdx'),
}

import { parsers as markdownParsers } from 'prettier/plugins/markdown'

export function getBasePlugins() {
  return {
    parsers: {
      markdown: markdownParsers.markdown,
      mdx: markdownParsers.mdx,
    },
    printers: {
      // ...getAdditionalPrinters(),
    },
  }
}

export type ParserFormat = keyof ReturnType<typeof getBasePlugins>['parsers']

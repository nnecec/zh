import {
  noDuplicatePunctuation,
  noSpaceAroundFullwidth,
  noSpaceBetweenNumberUnit,
  parseIgnorePatterns,
  spaceAroundAlphabet,
  spaceAroundAlphabet as spaceAroundAlphabetFn,
  spaceAroundCode,
  spaceAroundLink,
  spaceAroundNumber,
  spaceAroundNumber as spaceAroundNumberFn,
} from 'core'

import type { MarkdownAST, ZhOptions } from '../types'
import type { Transform } from './types'

import { compose, traverseChildren } from '../utils'

export const transformMarkdown: Transform<MarkdownAST> = (ast, options) => {
  const zhOptions = options as ZhOptions
  const ignorePatterns = parseIgnorePatterns(zhOptions.zhIgnorePatterns as string | undefined)

  traverseChildren<MarkdownAST>(ast, ({ child, nextSibling, prevSibling }) => {
    switch (child.type) {
      case 'text': {
        const fns = [
          options.spaceAroundAlphabet === true && ((text: string) => spaceAroundAlphabetFn(text, ignorePatterns)),
          options.spaceAroundNumber === true && ((text: string) => spaceAroundNumberFn(text, ignorePatterns)),
          options.noDuplicatePunctuation === true && ((text: string) => noDuplicatePunctuation(text, ignorePatterns)),
          options.noSpaceBetweenNumberUnit && options.noSpaceBetweenNumberUnit.length > 0 && ((text: string, units?: string[]) => noSpaceBetweenNumberUnit(text, units, ignorePatterns)),
          options.noSpaceAroundFullwidth === true && ((text: string) => noSpaceAroundFullwidth(text, ignorePatterns)),
        ].filter(fn => !!fn)
        child.value = compose(...fns)(child.value, options.noSpaceBetweenNumberUnit)
        break
      }
      case 'inlineCode': {
        if (options.spaceAroundCode) {
          const [prevSiblingValue, nextSiblingValue] = spaceAroundCode(prevSibling?.value, nextSibling?.value)
          if (prevSibling && prevSiblingValue) prevSibling.value = prevSiblingValue
          if (nextSibling && nextSiblingValue) nextSibling.value = nextSiblingValue
        }
        break
      }
      case 'link': {
        if (options.spaceAroundLink) {
          const [prevSiblingValue, nextSiblingValue] = spaceAroundLink(prevSibling?.value, nextSibling?.value)
          if (prevSibling && prevSiblingValue) prevSibling.value = prevSiblingValue
          if (nextSibling && nextSiblingValue) nextSibling.value = nextSiblingValue
        }
        break
      }
      default: {
        break
      }
    }
  })
}

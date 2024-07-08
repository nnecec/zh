import {
  noDuplicatePunctuation,
  noSpaceAroundFullwidth,
  noSpaceBetweenNumberUnit,
  spaceAroundAlphabet,
  spaceAroundCode,
  spaceAroundLink,
  spaceAroundNumber,
} from 'core'

import type { MarkdownAST } from '../types'
import type { Transform } from './types'

import { compose, traverseChildren } from '../utils'

export const transformMarkdown: Transform<MarkdownAST> = (ast, options) => {
  traverseChildren<MarkdownAST>(ast, ({ child, nextSibling, prevSibling }) => {
    switch (child.type) {
      case 'text': {
        const fns = [
          options.spaceAroundAlphabet === true && spaceAroundAlphabet,
          options.spaceAroundNumber === true && spaceAroundNumber,
          options.noDuplicatePunctuation === true && noDuplicatePunctuation,
          options.noSpaceBetweenNumberUnit && options.noSpaceBetweenNumberUnit.length > 0 && noSpaceBetweenNumberUnit,
          options.noSpaceAroundFullwidth === true && noSpaceAroundFullwidth,
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

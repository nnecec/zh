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

import { traverseChildren } from '../utils'

export const transformMarkdown: Transform<MarkdownAST> = (ast, options) => {
  traverseChildren<MarkdownAST>(ast, ({ child, nextSibling, prevSibling }) => {
    switch (child.type) {
      case 'text': {
        if (options.spaceAroundAlphabet === true) child.value = spaceAroundAlphabet(child.value)
        if (options.spaceAroundNumber === true) child.value = spaceAroundNumber(child.value)

        if (options.noDuplicatePunctuation === true) {
          child.value = noDuplicatePunctuation(child.value)
        }

        if (options.noSpaceBetweenNumberUnit && options.noSpaceBetweenNumberUnit.length > 0) {
          child.value = noSpaceBetweenNumberUnit(child.value, options.noSpaceBetweenNumberUnit)
        }
        if (options.noSpaceAroundFullwidth === true) {
          child.value = noSpaceAroundFullwidth(child.value)
        }
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

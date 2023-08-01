import {
  noDuplicatePunctuation,
  noSpaceAroundFullwidth,
  noSpaceBetweenNumberUnit,
  spaceAroundAlphabet,
  spaceAroundNumber,
} from 'core'

import { traverseChildren } from '../utils'

import type { Transform } from './types'

export const transformMarkdown: Transform = (ast, options) => {
  traverseChildren(ast, child => {
    if (child.type === 'text') {
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
    }
  })
}

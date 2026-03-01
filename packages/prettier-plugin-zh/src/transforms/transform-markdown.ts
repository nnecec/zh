import {
  noDuplicatePunctuation,
  noSpaceAroundFullwidth,
  noSpaceBetweenNumberUnit,
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

// Parse ignore patterns from options
// Support formats:
// - JSON string: '["天若OCR", "r:ChatGPT"]'
// - Comma-separated: "天若OCR,r:ChatGPT"
function parseIgnorePatterns(patternsInput: string | undefined): (string | RegExp)[] {
  if (!patternsInput) return []
  try {
    // Try JSON format first
    if (patternsInput.startsWith('[')) {
      const parsed = JSON.parse(patternsInput)
      if (Array.isArray(parsed)) {
        return parsed.map((p: string) => {
          if (typeof p === 'string' && p.startsWith('r:')) {
            try {
              return new RegExp(p.slice(2))
            } catch {
              return p.slice(2)
            }
          }
          return p
        })
      }
    }
  } catch {
    // Fall through to comma-separated
  }
  // Comma-separated format
  return patternsInput.split(',').map(p => {
    const trimmed = p.trim()
    if (trimmed.startsWith('r:')) {
      try {
        return new RegExp(trimmed.slice(2))
      } catch {
        return trimmed.slice(2)
      }
    }
    return trimmed
  })
}

export const transformMarkdown: Transform<MarkdownAST> = (ast, options) => {
  const zhOptions = options as ZhOptions
  const ignorePatterns = parseIgnorePatterns(zhOptions.zhIgnorePatterns as string | undefined)

  traverseChildren<MarkdownAST>(ast, ({ child, nextSibling, prevSibling }) => {
    switch (child.type) {
      case 'text': {
        const fns = [
          options.spaceAroundAlphabet === true && ((text: string) => spaceAroundAlphabetFn(text, ignorePatterns)),
          options.spaceAroundNumber === true && ((text: string) => spaceAroundNumberFn(text, ignorePatterns)),
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

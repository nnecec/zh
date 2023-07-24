import { spaceAroundAlphabet } from 'core'

import type { AST } from 'prettier'

import { traverseChildren } from '../utils'

export function transformMarkdown(ast: AST) {
  traverseChildren(ast, child => {
    if (child.type === 'text') {
      child.value = spaceAroundAlphabet(child.value)
    }
  })
}

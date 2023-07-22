import { AST } from 'prettier'
import { traverseChildren } from '../utils'
import { spaceAroundAlphabet } from 'core'

export function transformMarkdown(ast: AST) {
  traverseChildren(ast, child => {
    if (child.type === 'text') {
      child.value = spaceAroundAlphabet(child.value)
    }
  })
}

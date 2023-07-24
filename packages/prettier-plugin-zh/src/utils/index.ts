import type { AST } from 'prettier'

export function traverseChildren(ast: AST, fn: (child: AST) => void) {
  if (!ast.children) return

  for (const child of ast.children) {
    fn(child)
    traverseChildren(child, fn)
  }
}

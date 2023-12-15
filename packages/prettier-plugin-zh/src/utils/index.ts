type TraverseContext<T> = {
  child: T
  nextSibling?: T
  parent: T
  prevSibling?: T
}

type WithChildren = {
  children?: any[]
}

export function traverseChildren<T extends WithChildren>(ast: T, fn: (context: TraverseContext<T>) => void) {
  if (!ast.children) return

  for (const [index, child] of ast.children.entries()) {
    fn({
      child,
      nextSibling: ast.children[index + 1],
      parent: ast,
      prevSibling: ast.children[index - 1],
    })
    traverseChildren(child, fn)
  }
}

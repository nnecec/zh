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

export function compose(...fns: ((...args: any[]) => any)[]) {
  if (fns.length === 0) {
    return (arg: any) => arg
  }
  if (fns.length === 1) {
    return fns[0]!
  }
  return fns.reduce((a, b) => {
    return (...args) => a(b(...args))
  })
}

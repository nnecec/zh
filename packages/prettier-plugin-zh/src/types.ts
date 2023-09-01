import type { AST as PrettierAST } from 'prettier'

export interface ZhOptions {
  noDuplicatePunctuation?: boolean
  noSpaceAroundFullwidth?: boolean
  noSpaceBetweenNumberUnit?: string[]
  spaceAroundAlphabet?: boolean
  spaceAroundCode?: boolean
  spaceAroundLink?: boolean
  spaceAroundNumber?: boolean
}

export type MarkdownAST = {
  children?: MarkdownAST[]
  type: string
  value: string
}

export type AST = MarkdownAST | PrettierAST

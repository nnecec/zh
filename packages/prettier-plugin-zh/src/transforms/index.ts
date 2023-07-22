import { AST } from 'prettier'

export * from './transform-markdown'

export const defaultTransform = (ast: AST): AST => ast

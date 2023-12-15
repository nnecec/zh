import type { ParserOptions } from 'prettier'

import type { AST, ZhOptions } from '../types'

export type Transform<T extends AST = any> = (ast: T, options: ParserOptions & ZhOptions) => void

import type { ParserOptions } from 'prettier'

import type { AST, ZhOptions } from '../types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Transform<T extends AST = any> = (ast: T, options: ParserOptions & ZhOptions) => void

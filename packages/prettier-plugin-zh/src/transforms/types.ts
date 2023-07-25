import type { AST, ParserOptions } from 'prettier'

import type { ZhOptions } from '../types'

export type Transform = (text: AST, options: ParserOptions & ZhOptions) => void

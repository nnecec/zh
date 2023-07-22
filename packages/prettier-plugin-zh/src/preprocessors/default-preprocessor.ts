import { PrettierOptions } from '../types'
import { preprocessor } from './preprocessor'

export function defaultPreprocessor(code: string, options: PrettierOptions) {
  return preprocessor(code, options)
}

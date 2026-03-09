import { FULLWIDTH_PUNCTUATION } from '../utils/helpers'
import { IgnorePattern, isIgnored } from '../utils/ignore-patterns'

const SPACE_FULLWIDTH_REGEX = new RegExp(`\\s*[${FULLWIDTH_PUNCTUATION}]+\\s*`, 'g')

export function noSpaceAroundFullwidth(text: string, ignorePatterns: IgnorePattern[] = []) {
  // If text matches ignorePatterns, skip processing
  if (ignorePatterns.length > 0 && isIgnored(text, ignorePatterns)) {
    return text
  }

  return text.replaceAll(SPACE_FULLWIDTH_REGEX, match => {
    return match.replaceAll(' ', '')
  })
}

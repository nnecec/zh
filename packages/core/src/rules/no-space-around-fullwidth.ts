import { FULLWIDTH_PUNCTUATION } from '../utils/helpers'

const SPACE_FULLWIDTH_REGEX = new RegExp(`\\s*[${FULLWIDTH_PUNCTUATION}]+\\s*`, 'g')

export function noSpaceAroundFullwidth(text: string) {
  return text.replaceAll(SPACE_FULLWIDTH_REGEX, match => {
    return match.replaceAll(' ', '')
  })
}

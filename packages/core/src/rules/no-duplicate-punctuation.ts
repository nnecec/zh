import { FULLWIDTH_REGEX } from '../utils/helpers'

export function noDuplicatePunctuation(text: string) {
  let prev: null | string = null
  const boundaries: number[] = []
  const textArr = [...text]

  for (const [i, char] of textArr.entries()) {
    // eslint-disable-next-line unicorn/prefer-regexp-test
    if (char.match(FULLWIDTH_REGEX)) {
      if (prev === char) {
        boundaries.push(i)
      } else {
        prev = char
      }
    } else {
      prev = null
    }
  }
  for (const pos of boundaries.reverse()) textArr.splice(pos, 1)
  return textArr.join('')
}

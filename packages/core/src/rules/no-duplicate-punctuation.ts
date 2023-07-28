import { isFullwidth } from '../utils/helpers'

export function noDuplicatePunctuation(text: string) {
  let stack: string[] = []
  const boundaries: number[] = []
  const textArr = [...text]

  for (const [i, char] of textArr.entries()) {
    if (isFullwidth(char)) {
      if (stack.length > 0 && stack.at(-1) !== char) {
        stack = [char]
      } else if (stack.length > 0 && stack.at(-1) === char) {
        boundaries.push(i)
      } else {
        stack.push(char)
      }
    }
  }

  for (const pos of boundaries.reverse()) textArr.splice(pos, 1)
  return textArr.join('')
}

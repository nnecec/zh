import { convertText } from '../utils'

export function spaceAroundAlphabet(text: string) {
  const convertedText = convertText(text)

  const boundaries: number[] = []

  const close = convertedText.matchAll(/AZ|ZA/g)

  for (const item of close) {
    boundaries.push(item.index as number)
  }

  if (boundaries.length > 0) {
    let lastMatchPos = 0

    let newContent = ''

    for (const boundary of boundaries) {
      lastMatchPos = boundary + 1
      newContent += text.slice(lastMatchPos, boundary + 1)
    }

    newContent += text.slice(lastMatchPos)
    return newContent
  }
  return text
}

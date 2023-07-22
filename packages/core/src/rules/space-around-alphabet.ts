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

    let newContent = boundaries.reduce((content, boundary) => {
      console.log(content)
      const str = `${content}${text.slice(lastMatchPos, boundary + 1)} `
      lastMatchPos = boundary + 1
      return str
    }, '')

    newContent += text.slice(lastMatchPos)
    return newContent
  }
  return text
}

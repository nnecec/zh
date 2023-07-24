import { convertText } from '../utils'

function spaceAround(text: string, reg: RegExp) {
  const convertedText = convertText(text)
  console.log(text, convertText)
  const boundaries: number[] = []

  const close = convertedText.matchAll(reg)

  for (const item of close) {
    boundaries.push(item.index as number)
  }

  if (boundaries.length > 0) {
    let lastMatchPos = 0

    let newContent = ''

    for (const boundary of boundaries) {
      newContent += `${text.slice(lastMatchPos, boundary + 1)} `
      lastMatchPos = boundary + 1
    }

    newContent += text.slice(lastMatchPos)
    return newContent
  }
  return text
}

export function spaceAroundAlphabet(text: string) {
  return spaceAround(text, /AZ|ZA/g)
}
export function spaceAroundNumber(text: string) {
  return spaceAround(text, /NZ|ZN/g)
}

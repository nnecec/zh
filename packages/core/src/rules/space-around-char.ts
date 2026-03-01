import { convertText } from '../utils'

export type IgnorePattern = string | RegExp

function isWithinIgnoredPattern(text: string, index: number, patterns: IgnorePattern[]): boolean {
  for (const pattern of patterns) {
    if (typeof pattern === 'string') {
      const matchIndex = text.indexOf(pattern)
      if (matchIndex !== -1 && index >= matchIndex && index < matchIndex + pattern.length) {
        return true
      }
    } else if (pattern instanceof RegExp) {
      const match = text.match(pattern)
      if (match) {
        for (const m of match) {
          const matchIndex = text.indexOf(m)
          if (matchIndex !== -1 && index >= matchIndex && index < matchIndex + m.length) {
            return true
          }
        }
      }
    }
  }
  return false
}

function spaceAround(text: string, reg: RegExp, ignorePatterns: IgnorePattern[] = []) {
  const convertedText = convertText(text)

  const boundaries: number[] = []

  const close = convertedText.matchAll(reg)

  for (const item of close) {
    boundaries.push(item.index as number)
  }

  if (boundaries.length > 0) {
    let lastMatchPos = 0

    let newContent = ''

    for (const boundary of boundaries) {
      // Check if this boundary is within an ignored pattern
      if (ignorePatterns.length > 0 && isWithinIgnoredPattern(text, boundary, ignorePatterns)) {
        // Skip adding space, keep the text as is
        newContent += text.slice(lastMatchPos, boundary + 1)
      } else {
        newContent += `${text.slice(lastMatchPos, boundary + 1)} `
      }
      lastMatchPos = boundary + 1
    }

    newContent += text.slice(lastMatchPos)
    return newContent
  }
  return text
}

export function spaceAroundAlphabet(text: string, ignorePatterns: IgnorePattern[] = []) {
  return spaceAround(text, /AZ|ZA/g, ignorePatterns)
}
export function spaceAroundNumber(text: string, ignorePatterns: IgnorePattern[] = []) {
  return spaceAround(text, /NZ|ZN/g, ignorePatterns)
}

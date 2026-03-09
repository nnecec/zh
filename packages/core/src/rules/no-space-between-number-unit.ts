import { IgnorePattern, isIgnored } from '../utils/ignore-patterns'

export function noSpaceBetweenNumberUnit(text: string, units?: string[], ignorePatterns: IgnorePattern[] = []) {
  if (!units || units.length === 0) return text

  // If text matches ignorePatterns, skip processing
  if (ignorePatterns.length > 0 && isIgnored(text, ignorePatterns)) {
    return text
  }

  return text.replaceAll(new RegExp(`\\d+\\s+(${units.join('|')})`, 'g'), match => {
    return match.replaceAll(' ', '')
  })
}

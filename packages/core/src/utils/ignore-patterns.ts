export type IgnorePattern = string | RegExp

/**
 * Parse ignore patterns from configuration format.
 * Supports:
 * - JSON string: '["天若OCR", "r:ChatGPT"]'
 * - Comma-separated: "天若OCR,r:ChatGPT"
 */
export function parseIgnorePatterns(patternsInput: string | undefined): IgnorePattern[] {
  if (!patternsInput) return []
  try {
    // Try JSON format first
    if (patternsInput.startsWith('[')) {
      const parsed = JSON.parse(patternsInput)
      if (Array.isArray(parsed)) {
        return parsed.map((p: string) => {
          if (typeof p === 'string' && p.startsWith('r:')) {
            try {
              return new RegExp(p.slice(2))
            } catch {
              return p.slice(2)
            }
          }
          return p
        })
      }
    }
  } catch {
    // Fall through to comma-separated
  }
  // Comma-separated format
  return patternsInput.split(',').map(p => {
    const trimmed = p.trim()
    if (trimmed.startsWith('r:')) {
      try {
        return new RegExp(trimmed.slice(2))
      } catch {
        return trimmed.slice(2)
      }
    }
    return trimmed
  })
}

/**
 * Check if any pattern in the ignorePatterns list matches the given text.
 * Returns true if any pattern matches.
 */
export function isIgnored(text: string, ignorePatterns: IgnorePattern[]): boolean {
  for (const pattern of ignorePatterns) {
    if (typeof pattern === 'string') {
      if (text.includes(pattern)) {
        return true
      }
    } else if (pattern instanceof RegExp) {
      if (pattern.test(text)) {
        return true
      }
    }
  }
  return false
}

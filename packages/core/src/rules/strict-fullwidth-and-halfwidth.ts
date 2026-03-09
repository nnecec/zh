// Halfwidth to Fullwidth punctuation mapping
const HALFWIDTH_TO_FULLWIDTH: Record<string, string> = {
  ',': '，',
  '.': '．',
  ':': '：',
  ';': '；',
  '!': '！',
  '?': '？',
  '(': '（',
  ')': '）',
  '[': '［',
  ']': '］',
  '{': '｛',
  '}': '｝',
}

// Fullwidth numbers mapping
const FULLWIDTH_NUMBERS: Record<string, string> = {
  '0': '０',
  '1': '１',
  '2': '２',
  '3': '３',
  '4': '４',
  '5': '５',
  '6': '６',
  '7': '７',
  '8': '８',
  '9': '９',
}

// CJK Unicode ranges
const CJK_RANGES = [
  // CJK Unified Ideographs
  [0x4e00, 0x9fff],
  // CJK Unified Ideographs Extension A
  [0x3400, 0x4dbf],
  // CJK Unified Ideographs Extension B
  [0x20000, 0x2a6df],
  // CJK Unified Ideographs Extension C
  [0x2a700, 0x2b73f],
  // CJK Unified Ideographs Extension D
  [0x2b740, 0x2b81f],
  // CJK Compatibility Ideographs
  [0xf900, 0xfaff],
  // Halfwidth and Fullwidth Forms
  [0xff00, 0xffef],
  // CJK Symbols and Punctuation
  [0x3000, 0x303f],
]

/**
 * Check if a character is a CJK character
 */
function isCJK(char: string): boolean {
  const code = char.codePointAt(0)
  if (code === undefined) return false

  return CJK_RANGES.some(([start, end]) => code >= start && code <= end)
}

/**
 * Calculate the ratio of CJK characters in text
 */
function calculateCJKRatio(text: string): number {
  if (text.length === 0) return 0

  let cjkCount = 0
  for (const char of text) {
    if (isCJK(char)) {
      cjkCount++
    }
  }

  return cjkCount / text.length
}

/**
 * Check if text is in Chinese context (majority CJK characters)
 */
function isChineseContext(text: string): boolean {
  return calculateCJKRatio(text) > 0.3
}

/**
 * Check if character is a halfwidth punctuation that needs conversion
 */
function isHalfwidthPunctuation(char: string): boolean {
  return char in HALFWIDTH_TO_FULLWIDTH
}

/**
 * Check if character is a halfwidth number
 */
function isHalfwidthNumber(char: string): boolean {
  return char in FULLWIDTH_NUMBERS
}

/**
 * Check if the number at position is part of a special number sequence
 * that should not be converted (e.g., degrees 90°, percentages 15%, decimals 3.14)
 * Returns the length of the special sequence to skip, or 0 if not special
 */
function getSpecialNumberSequenceLength(
  text: string,
  index: number,
): number {
  const remaining = text.slice(index)

  // Check for percentage (e.g., 15%)
  const percentMatch = remaining.match(/^(\d+)%/)
  if (percentMatch) {
    return percentMatch[1].length + 1 // digits + %
  }

  // Check for degree symbol (e.g., 90°)
  const degreeMatch = remaining.match(/^(\d+)°/)
  if (degreeMatch) {
    return degreeMatch[1].length + 1 // digits + °
  }

  // Check for decimal (e.g., 3.14)
  const decimalMatch = remaining.match(/^(\d+\.\d+)/)
  if (decimalMatch) {
    return decimalMatch[1].length
  }

  return 0
}

export interface StrictFullwidthOptions {
  /** Whether to convert numbers to fullwidth in Chinese context */
  convertNumbers?: boolean
  /** Minimum CJK ratio to consider text as Chinese context (0-1) */
  cjkThreshold?: number
}

/**
 * Transform halfwidth punctuation and numbers to fullwidth in Chinese context
 */
export function strictFullwidthAndHalfwidth(
  text: string,
  options: StrictFullwidthOptions = {},
): string {
  const { convertNumbers = true, cjkThreshold = 0.2 } = options

  // Check if text is in Chinese context
  const cjkRatio = calculateCJKRatio(text)
  const inChineseContext = cjkRatio > cjkThreshold

  // If not in Chinese context at all, return as-is
  // (cjkRatio === 0 means no CJK characters at all)
  if (cjkRatio === 0) {
    return text
  }

  const textArr = [...text]
  let result = ''

  for (let i = 0; i < textArr.length; i++) {
    const char = textArr[i]

    // Convert halfwidth punctuation to fullwidth only in Chinese context
    if (inChineseContext && isHalfwidthPunctuation(char)) {
      result += HALFWIDTH_TO_FULLWIDTH[char]
      continue
    }

    // Convert numbers to fullwidth in Chinese context
    if (convertNumbers && inChineseContext && isHalfwidthNumber(char)) {
      // Check if this number is in a special context that should not be converted
      const skipLength = getSpecialNumberSequenceLength(text, i)
      if (skipLength > 0) {
        // Skip the entire special sequence without conversion
        result += text.slice(i, i + skipLength)
        i += skipLength - 1
      } else {
        result += FULLWIDTH_NUMBERS[char]
      }
      continue
    }

    result += char
  }

  return result
}

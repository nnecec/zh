export const isNumberCharacter = (value: string) => {
  return /^\d$/.test(value)
}

export const isChineseCharacter = (value: string) => {
  return /^[\u4E00-\u9FA5]$/.test(value)
}

export const isEnglishCharacter = (value: string) => {
  return /^[A-Za-z]$/.test(value)
}

export const FULLWIDTH_PUNCTUATION = '，、。；：？！（）“”‘’《》【】{}〔〕「」｜…～'
export const FULLWIDTH_REGEX = new RegExp(`[${FULLWIDTH_PUNCTUATION}]`, 'g')

export const HALFWIDTH_PUNCTUATION = '!"\'(),.:;<>?\\[\\]`|~'
export const HALFWIDTH_REGEXP = new RegExp(`[${HALFWIDTH_PUNCTUATION}]`, 'g')

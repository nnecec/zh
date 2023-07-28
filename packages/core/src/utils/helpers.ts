export const isNumberCharacter = (value: string) => {
  return /^\d$/.test(value)
}

export const isChineseCharacter = (value: string) => {
  return /^[\u4E00-\u9FA5]$/.test(value)
}

export const isEnglishCharacter = (value: string) => {
  return /^[A-Za-z]$/.test(value)
}

export const isFullwidth = (value: string) => {
  // eslint-disable-next-line unicorn/better-regex
  return /[，。；：？！（）“”‘’《》【】{}〔〕「」·—…¥]/g.test(value)
}

export const isHalfwidth = (value: string) => {
  // eslint-disable-next-line unicorn/better-regex, no-useless-escape
  return /[,。;:?!\[\]\(\){}【】「」·—...¥]/g.test(value)
}

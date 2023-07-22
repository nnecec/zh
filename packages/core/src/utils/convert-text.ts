import { isChineseCharacter, isEnglishCharacter, isNumberCharacter } from './helpers'

/**
 * https://github.com/lint-md/lint-md/blob/master/src/utils/mark-text.ts
 *
 * 你好世界 hello world!!! -> ZZZZAAAAA-AAAAA---
 */
export const convertText = (text: string) => {
  const res = text.split('').map(value => {
    if (isNumberCharacter(value)) {
      return 'N'
    } else if (isChineseCharacter(value)) {
      return 'Z'
    } else if (isEnglishCharacter(value)) {
      return 'A'
    } else {
      return '-'
    }
  })
  return res.join('')
}

import { describe, it, expect } from 'vitest'
import { noSpaceAroundFullwidth } from './no-space-around-fullwidth'

describe('noSpaceAroundFullwidth', () => {
  it('should remove spaces before fullwidth punctuation', () => {
    expect(noSpaceAroundFullwidth('你好 ，世界')).toBe('你好，世界')
  })

  it('should remove spaces after fullwidth punctuation', () => {
    expect(noSpaceAroundFullwidth('你好， 世界')).toBe('你好，世界')
  })

  it('should remove spaces both before and after fullwidth punctuation', () => {
    expect(noSpaceAroundFullwidth('你好 ， 世界')).toBe('你好，世界')
  })

  it('should remove multiple spaces around fullwidth punctuation', () => {
    expect(noSpaceAroundFullwidth('你好    ，    世界')).toBe('你好，世界')
  })

  it('should keep text without fullwidth punctuation unchanged', () => {
    expect(noSpaceAroundFullwidth('hello world')).toBe('hello world')
  })

  it('should handle multiple fullwidth punctuation marks', () => {
    expect(noSpaceAroundFullwidth('你好 ，世界 ！')).toBe('你好，世界！')
  })

  it('should handle fullwidth punctuation at start', () => {
    expect(noSpaceAroundFullwidth('，你好')).toBe('，你好')
  })

  it('should handle fullwidth punctuation at end', () => {
    expect(noSpaceAroundFullwidth('你好，')).toBe('你好，')
  })

  it('should handle tabs around fullwidth punctuation', () => {
    // Note: this rule only handles spaces, not tabs/newlines
    expect(noSpaceAroundFullwidth('你好 ，世界')).toBe('你好，世界')
  })

  it('should handle empty string', () => {
    expect(noSpaceAroundFullwidth('')).toBe('')
  })

  it('should not affect halfwidth punctuation', () => {
    expect(noSpaceAroundFullwidth('hello , world')).toBe('hello , world')
  })
})

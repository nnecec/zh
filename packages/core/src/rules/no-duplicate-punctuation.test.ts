import { describe, it, expect } from 'vitest'
import { noDuplicatePunctuation } from './no-duplicate-punctuation'

describe('noDuplicatePunctuation', () => {
  it('should remove duplicate fullwidth commas', () => {
    expect(noDuplicatePunctuation('你好，，世界')).toBe('你好，世界')
  })

  it('should remove duplicate fullwidth periods', () => {
    expect(noDuplicatePunctuation('你好。。世界')).toBe('你好。世界')
  })

  it('should remove duplicate fullwidth exclamation marks', () => {
    expect(noDuplicatePunctuation('你好！！世界')).toBe('你好！世界')
  })

  it('should remove duplicate fullwidth question marks', () => {
    expect(noDuplicatePunctuation('你好？？世界')).toBe('你好？世界')
  })

  it('should keep single punctuation marks', () => {
    expect(noDuplicatePunctuation('你好，世界！')).toBe('你好，世界！')
  })

  it('should handle multiple types of duplicates', () => {
    expect(noDuplicatePunctuation('你好，，世界！！')).toBe('你好，世界！')
  })

  it('should handle duplicate punctuation at start', () => {
    expect(noDuplicatePunctuation('，，你好')).toBe('，你好')
  })

  it('should handle duplicate punctuation at end', () => {
    expect(noDuplicatePunctuation('你好，，')).toBe('你好，')
  })

  it('should not remove halfwidth duplicates', () => {
    // Halfwidth punctuation is not handled by this rule
    expect(noDuplicatePunctuation('hello,, world')).toBe('hello,, world')
  })

  it('should handle mixed fullwidth and halfwidth', () => {
    expect(noDuplicatePunctuation('你好,，世界')).toBe('你好,，世界')
  })

  it('should handle empty string', () => {
    expect(noDuplicatePunctuation('')).toBe('')
  })

  it('should handle string without punctuation', () => {
    expect(noDuplicatePunctuation('你好世界')).toBe('你好世界')
  })
})

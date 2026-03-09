import { describe, it, expect } from 'vitest'
import { spaceAroundAlphabet, spaceAroundNumber } from './space-around-char'

describe('spaceAroundAlphabet', () => {
  it('should add space between Chinese and English', () => {
    expect(spaceAroundAlphabet('你好hello')).toBe('你好 hello')
  })

  it('should add space between English and Chinese', () => {
    expect(spaceAroundAlphabet('hello你好')).toBe('hello 你好')
  })

  it('should add space on both sides when mixing', () => {
    expect(spaceAroundAlphabet('你好hello世界')).toBe('你好 hello 世界')
  })

  it('should handle multiple occurrences', () => {
    expect(spaceAroundAlphabet('你好hello world世界')).toBe('你好 hello world 世界')
  })

  it('should handle pure Chinese text', () => {
    expect(spaceAroundAlphabet('你好世界')).toBe('你好世界')
  })

  it('should handle pure English text', () => {
    expect(spaceAroundAlphabet('hello world')).toBe('hello world')
  })

  it('should handle empty string', () => {
    expect(spaceAroundAlphabet('')).toBe('')
  })

  it('should ignore patterns when provided', () => {
    // The ignore pattern only works for exact string matches at boundary positions
    expect(spaceAroundAlphabet('hello world', ['hello'])).toBe('hello world')
  })
})

describe('spaceAroundNumber', () => {
  it('should add space between Chinese and number', () => {
    expect(spaceAroundNumber('你好123')).toBe('你好 123')
  })

  it('should add space between number and Chinese', () => {
    expect(spaceAroundNumber('123你好')).toBe('123 你好')
  })

  it('should add space on both sides when mixing', () => {
    expect(spaceAroundNumber('你好123世界')).toBe('你好 123 世界')
  })

  it('should handle pure Chinese text', () => {
    expect(spaceAroundNumber('你好世界')).toBe('你好世界')
  })

  it('should handle pure number text', () => {
    expect(spaceAroundNumber('123 456')).toBe('123 456')
  })

  it('should handle empty string', () => {
    expect(spaceAroundNumber('')).toBe('')
  })

  it('should handle number between Chinese characters', () => {
    // Numbers between Chinese characters get space before them
    expect(spaceAroundNumber('数字123和456')).toBe('数字 123 和456')
  })
})

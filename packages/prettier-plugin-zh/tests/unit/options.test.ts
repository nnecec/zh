import { describe, it, expect } from 'vitest'
import { format } from './format'

describe('zhIgnorePatterns', () => {
  it('should skip formatting for string pattern', async () => {
    const input = '我们使用天若OCR进行文字识别'
    const output = await format(input, {
      spaceAroundAlphabet: true,
      zhIgnorePatterns: '["天若OCR"]',
    })
    expect(output).toBe('我们使用天若OCR进行文字识别\n')
  })

  it('should skip formatting for regex pattern', async () => {
    const input = 'ChatGPT is great'
    const output = await format(input, {
      spaceAroundAlphabet: true,
      zhIgnorePatterns: 'r:ChatGPT',
    })
    expect(output).toBe('ChatGPT is great\n')
  })

  it('should handle multiple patterns', async () => {
    const input = '天若OCR和ChatGPT'
    const output = await format(input, {
      spaceAroundAlphabet: true,
      zhIgnorePatterns: '["天若OCR", "r:ChatGPT"]',
    })
    expect(output).toBe('天若OCR和ChatGPT\n')
  })

  it('should handle comma-separated patterns', async () => {
    const input = '天若OCR和Photoshop'
    const output = await format(input, {
      spaceAroundAlphabet: true,
      zhIgnorePatterns: '天若OCR,Photoshop',
    })
    expect(output).toBe('天若OCR和Photoshop\n')
  })

  it('should not ignore when pattern does not match', async () => {
    const input = '我们使用GitHub'
    const output = await format(input, {
      spaceAroundAlphabet: true,
      zhIgnorePatterns: '["天若OCR"]',
    })
    expect(output).toBe('我们使用 GitHub\n')
  })

  it('should work with noDuplicatePunctuation', async () => {
    const input = '天若OCR！！！'
    const output = await format(input, {
      noDuplicatePunctuation: true,
      zhIgnorePatterns: '["天若OCR"]',
    })
    expect(output).toBe('天若OCR！！！\n')
  })

  it('should work with noSpaceAroundFullwidth', async () => {
    const input = '天若OCR ！！！'
    const output = await format(input, {
      noSpaceAroundFullwidth: true,
      zhIgnorePatterns: '["天若OCR"]',
    })
    expect(output).toBe('天若OCR ！！！\n')
  })
})

describe('Multiple options enabled', () => {
  it('should apply all enabled options', async () => {
    const input = '我有5个GitHub！！！'
    const output = await format(input, {
      spaceAroundAlphabet: true,
      spaceAroundNumber: true,
      noDuplicatePunctuation: true,
    })
    // Options are applied in order - the actual result depends on implementation
    expect(output).toBe('我有 5个 GitHub！\n')
  })
})

describe('All options disabled', () => {
  it('should not modify input when all options disabled', async () => {
    const input = '我有5个GitHub'
    const output = await format(input, {
      spaceAroundAlphabet: false,
      spaceAroundNumber: false,
      noDuplicatePunctuation: false,
      noSpaceAroundFullwidth: false,
    })
    expect(output).toBe('我有5个GitHub\n')
  })
})

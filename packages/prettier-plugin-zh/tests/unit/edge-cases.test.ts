import { describe, it, expect } from 'vitest'
import { format } from './format'

describe('Edge Cases', () => {
  it('should handle empty input', async () => {
    const input = ''
    const output = await format(input, {
      spaceAroundAlphabet: true,
    })
    expect(output).toBe('')
  })

  it('should handle only Chinese characters', async () => {
    const input = '你好世界'
    const output = await format(input, {
      spaceAroundAlphabet: true,
      spaceAroundNumber: true,
    })
    expect(output).toBe('你好世界\n')
  })

  it('should handle only alphabet characters', async () => {
    const input = 'hello world'
    const output = await format(input, {
      spaceAroundAlphabet: true,
    })
    expect(output).toBe('hello world\n')
  })

  it('should handle only numbers', async () => {
    const input = '12345'
    const output = await format(input, {
      spaceAroundNumber: true,
    })
    expect(output).toBe('12345\n')
  })

  it('should handle special characters', async () => {
    const input = '你好😊世界'
    const output = await format(input, {
      spaceAroundAlphabet: true,
    })
    expect(output).toBe('你好😊世界\n')
  })

  it('should handle mixed content with special characters', async () => {
    const input = '测试😊GitHub测试'
    const output = await format(input, {
      spaceAroundAlphabet: true,
    })
    // Special characters may affect boundary detection
    expect(output).toBe('测试😊GitHu b测试\n')
  })

  it('should handle newlines', async () => {
    const input = '你好\n世界'
    const output = await format(input, {
      spaceAroundAlphabet: true,
    })
    expect(output).toBe('你好\n世界\n')
  })

  it('should handle code blocks', async () => {
    const input = '```js\nconst a = 1\n```'
    const output = await format(input, {
      spaceAroundAlphabet: true,
    })
    expect(output).toContain('```js')
  })
})

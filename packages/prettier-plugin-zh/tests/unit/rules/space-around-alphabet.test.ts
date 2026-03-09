import { describe, it, expect } from 'vitest'
import { format } from '../format'

describe('spaceAroundAlphabet', () => {
  it('should add spaces between Chinese and alphabet (basic)', async () => {
    const input = '我们使用GitHub'
    const output = await format(input, {
      spaceAroundAlphabet: true,
    })
    expect(output).toBe('我们使用 GitHub\n')
  })

  it('should handle multiple occurrences', async () => {
    const input = 'Git和SVN都是版本管理工具'
    const output = await format(input, {
      spaceAroundAlphabet: true,
    })
    // The rule processes each Chinese-Alphabet boundary separately
    expect(output).toBe('Git 和SVN 都是版本管理工具\n')
  })

  it('should not add spaces when disabled', async () => {
    const input = '我们使用GitHub'
    const output = await format(input, {
      spaceAroundAlphabet: false,
    })
    expect(output).toBe('我们使用GitHub\n')
  })

  it('should handle alphabet at start', async () => {
    const input = 'GitHub是一个平台'
    const output = await format(input, {
      spaceAroundAlphabet: true,
    })
    expect(output).toBe('GitHub 是一个平台\n')
  })

  it('should handle alphabet at end', async () => {
    const input = '我喜欢Git'
    const output = await format(input, {
      spaceAroundAlphabet: true,
    })
    expect(output).toBe('我喜欢 Git\n')
  })
})

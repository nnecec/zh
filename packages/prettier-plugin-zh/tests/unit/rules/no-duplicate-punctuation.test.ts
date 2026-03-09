import { describe, it, expect } from 'vitest'
import { format } from '../format'

describe('noDuplicatePunctuation', () => {
  it('should remove duplicate exclamation marks', async () => {
    const input = '太棒了！！！'
    const output = await format(input, {
      noDuplicatePunctuation: true,
    })
    expect(output).toBe('太棒了！\n')
  })

  it('should remove duplicate question marks', async () => {
    const input = '真的吗？？？'
    const output = await format(input, {
      noDuplicatePunctuation: true,
    })
    expect(output).toBe('真的吗？\n')
  })

  it('should handle mixed duplicates', async () => {
    const input = '这是！！！和？？？'
    const output = await format(input, {
      noDuplicatePunctuation: true,
    })
    expect(output).toBe('这是！和？\n')
  })

  it('should not modify when disabled', async () => {
    const input = '太棒了！！！'
    const output = await format(input, {
      noDuplicatePunctuation: false,
    })
    expect(output).toBe('太棒了！！！\n')
  })

  it('should handle single punctuation', async () => {
    const input = '你好！'
    const output = await format(input, {
      noDuplicatePunctuation: true,
    })
    expect(output).toBe('你好！\n')
  })
})

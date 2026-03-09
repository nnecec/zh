import { describe, it, expect } from 'vitest'
import { format } from '../format'

describe('spaceAroundNumber', () => {
  it('should add spaces between Chinese and numbers (basic)', async () => {
    const input = '我有5个苹果'
    const output = await format(input, {
      spaceAroundNumber: true,
    })
    expect(output).toBe('我有 5个苹果\n')
  })

  it('should handle multiple numbers', async () => {
    const input = '第1次和第2次'
    const output = await format(input, {
      spaceAroundNumber: true,
    })
    expect(output).toBe('第 1次和第 2次\n')
  })

  it('should not add spaces when disabled', async () => {
    const input = '我有5个苹果'
    const output = await format(input, {
      spaceAroundNumber: false,
    })
    expect(output).toBe('我有5个苹果\n')
  })

  it('should handle number at start', async () => {
    const input = '5个苹果'
    const output = await format(input, {
      spaceAroundNumber: true,
    })
    expect(output).toBe('5 个苹果\n')
  })

  it('should handle number at end', async () => {
    const input = '我有5'
    const output = await format(input, {
      spaceAroundNumber: true,
    })
    expect(output).toBe('我有 5\n')
  })
})

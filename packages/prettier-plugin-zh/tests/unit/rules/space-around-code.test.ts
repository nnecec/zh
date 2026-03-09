import { describe, it, expect } from 'vitest'
import { format } from '../format'

describe('spaceAroundCode', () => {
  it('should add spaces around inline code', async () => {
    const input = '使用`code`功能'
    const output = await format(input, {
      spaceAroundCode: true,
    })
    expect(output).toBe('使用 `code` 功能\n')
  })

  it('should not add spaces when disabled', async () => {
    const input = '使用`code`功能'
    const output = await format(input, {
      spaceAroundCode: false,
    })
    expect(output).toBe('使用`code`功能\n')
  })

  it('should handle code at start', async () => {
    const input = '`code` is good'
    const output = await format(input, {
      spaceAroundCode: true,
    })
    expect(output).toBe('`code` is good\n')
  })

  it('should handle code at end', async () => {
    const input = 'use `code`'
    const output = await format(input, {
      spaceAroundCode: true,
    })
    expect(output).toBe('use `code`\n')
  })
})

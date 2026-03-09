import { describe, it, expect } from 'vitest'
import { format } from '../format'

describe('noSpaceAroundFullwidth', () => {
  it('should remove spaces around fullwidth punctuation', async () => {
    const input = '你好 ，世界'
    const output = await format(input, {
      noSpaceAroundFullwidth: true,
    })
    expect(output).toBe('你好，世界\n')
  })

  it('should handle multiple spaces', async () => {
    const input = '你好   ，   世界'
    const output = await format(input, {
      noSpaceAroundFullwidth: true,
    })
    expect(output).toBe('你好，世界\n')
  })

  it('should not modify when disabled', async () => {
    const input = '你好 ，世界'
    const output = await format(input, {
      noSpaceAroundFullwidth: false,
    })
    expect(output).toBe('你好 ，世界\n')
  })

  it('should handle multiple punctuation marks', async () => {
    const input = '你好 ，世界 ！'
    const output = await format(input, {
      noSpaceAroundFullwidth: true,
    })
    expect(output).toBe('你好，世界！\n')
  })
})

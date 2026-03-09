import { describe, it, expect } from 'vitest'
import { format } from '../format'

describe('noSpaceBetweenNumberUnit', () => {
  it('should remove space between number and unit', async () => {
    const input = '5px'
    const output = await format(input, {
      noSpaceBetweenNumberUnit: ['px', 'em'],
    })
    expect(output).toBe('5px\n')
  })

  it('should handle multiple units', async () => {
    const input = '10px 20em'
    const output = await format(input, {
      noSpaceBetweenNumberUnit: ['px', 'em'],
    })
    expect(output).toBe('10px 20em\n')
  })

  it('should not modify when no unit matched', async () => {
    const input = '5 abc'
    const output = await format(input, {
      noSpaceBetweenNumberUnit: ['px', 'em'],
    })
    expect(output).toBe('5 abc\n')
  })

  it('should handle empty unit array', async () => {
    const input = '5 px'
    const output = await format(input, {
      noSpaceBetweenNumberUnit: [],
    })
    expect(output).toBe('5 px\n')
  })

  it('should handle Chinese units', async () => {
    const input = '5px' // Already without space
    const output = await format(input, {
      noSpaceBetweenNumberUnit: ['px'],
    })
    expect(output).toBe('5px\n')
  })
})

import { describe, it, expect } from 'vitest'
import { format } from '../format'

describe('spaceAroundLink', () => {
  it('should add spaces around link', async () => {
    const input = '访问[网站](http://example.com)'
    const output = await format(input, {
      spaceAroundLink: true,
    })
    expect(output).toContain(' ')
  })

  it('should not add spaces when disabled', async () => {
    const input = '访问[网站](http://example.com)'
    const output = await format(input, {
      spaceAroundLink: false,
    })
    expect(output).toBe('访问[网站](http://example.com)\n')
  })

  it('should handle link at start', async () => {
    const input = '[网站](http://example.com) is good'
    const output = await format(input, {
      spaceAroundLink: true,
    })
    expect(output).toBe('[网站](http://example.com) is good\n')
  })

  it('should handle link at end', async () => {
    const input = 'visit [网站](http://example.com)'
    const output = await format(input, {
      spaceAroundLink: true,
    })
    expect(output).toBe('visit [网站](http://example.com)\n')
  })
})

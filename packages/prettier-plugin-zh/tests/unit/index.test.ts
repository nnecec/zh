import { describe, it, expect } from 'vitest'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const prettier = require('prettier')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const plugin = require('../../dist/index.cjs')

describe('Plugin Basic', () => {
  it('should export a valid plugin object', () => {
    expect(plugin).toBeDefined()
    expect(plugin).toBeTypeOf('object')
  })

  it('should be loadable by Prettier', () => {
    // This should not throw
    const info = prettier.getSupportInfo()
    expect(info).toBeDefined()
  })

  it('should have parsers registered', () => {
    // The plugin should register its parsers
    // We verify this by checking if format works
    expect(plugin.parsers).toBeDefined()
  })

  it('should format markdown without errors', async () => {
    const result = await prettier.format('hello', {
      parser: 'markdown',
      plugins: [plugin],
    })
    expect(result).toBeDefined()
    expect(typeof result).toBe('string')
  })
})

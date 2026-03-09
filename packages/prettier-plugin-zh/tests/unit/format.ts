// eslint-disable-next-line @typescript-eslint/no-require-imports
const prettier = require('prettier')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const plugin = require('../../dist/index.cjs')

/**
 * Helper function to format text using prettier-plugin-zh
 */
export async function format(
  text: string,
  options: prettier.Options = {}
): Promise<string> {
  return prettier.format(text, {
    parser: 'markdown',
    plugins: [plugin],
    ...options,
  })
}

/**
 * Helper function to format text using prettier-plugin-zh (sync version)
 */
export function formatSync(
  text: string,
  options: prettier.Options = {}
): string {
  return prettier.format(text, {
    parser: 'markdown',
    plugins: [plugin],
    ...options,
  })
}

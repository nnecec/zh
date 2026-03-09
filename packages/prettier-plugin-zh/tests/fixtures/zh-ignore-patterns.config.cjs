/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...require('@nnecec/prettier-config'),
  plugins: ['prettier-plugin-zh'],
  spaceAroundAlphabet: true,
  spaceAroundNumber: true,
  zhIgnorePatterns: '["天若OCR","r:ChatGPT"]',
}

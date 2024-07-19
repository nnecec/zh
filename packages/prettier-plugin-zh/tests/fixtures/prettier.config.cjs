const { defaultUnits } = require('../../dist/index.cjs')
/**
 * @type {import('prettier').Config&import('../../dist').ZhOptions}
 */
module.exports = {
  ...require('@nnecec/prettier-config'),
  noDuplicatePunctuation: true,
  noSpaceBetweenNumberUnit: defaultUnits,
  plugins: ['prettier-plugin-zh'],
  spaceAroundCode: true,
  spaceAroundLink: true,
}

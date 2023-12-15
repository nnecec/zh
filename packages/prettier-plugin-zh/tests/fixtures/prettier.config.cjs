const { defaultUnits } = require('../../dist')
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

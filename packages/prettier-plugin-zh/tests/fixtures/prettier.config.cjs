const { defaultUnits } = require('../..')
/**
 * @type {import('prettier').Config&import('../..').ZhOptions}
 */
module.exports = {
  ...require('@nnecec/prettier-config'),
  noDuplicatePunctuation: true,
  noSpaceBetweenNumberUnit: defaultUnits,
  plugins: ['prettier-plugin-zh'],
  spaceAroundCode: true,
  spaceAroundLink: true,
}

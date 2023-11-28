// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaultUnits } = require('../..')
/**
 * @type {import('prettier').Config&import('../..').ZhOptions}
 */
module.exports = {
  ...require('@nnecec/prettier-config'),
  noDuplicatePunctuation: true,
  noSpaceBetweenNumberUnit: defaultUnits,
  plugins: ['prettier-plugin-zh'],
  spaceAroundLink: true,
  spaceAroundCode: true,
}

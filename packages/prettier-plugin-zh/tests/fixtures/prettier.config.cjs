const { defaultUnits } = require('prettier-plugin-zh')
/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...require('@nnecec/prettier-config'),
  noDuplicatePunctuation: true,
  noSpaceBetweenNumberUnit: defaultUnits,
  plugins: ['prettier-plugin-zh'],
  spaceAroundCode: true,
  spaceAroundLink: true,
}

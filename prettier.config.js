const { defaultUnits } = require('prettier-plugin-zh')
/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...require('@nnecec/prettier-config'),
  noSpaceBetweenNumberUnit: defaultUnits,
  plugins: ['prettier-plugin-zh'],
}

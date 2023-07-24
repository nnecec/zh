module.exports = {
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['@nnecec/eslint-config/typescript'],
  root: true,
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}

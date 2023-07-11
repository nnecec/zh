let eslintPlugin = require("eslint-plugin-eslint-plugin/configs/all");

module.exports = [
  eslintPlugin,
  {
    ignores: ["**/.vitepress/cache/**/*"],
  },
  {
    rules: {
      "eslint-plugin/require-meta-docs-url": "off",
    },
  },
  {
    files: ["**/test/*", "**/rules/*", "**/docs/.vitepress/config.ts"],
    rules: {
      "perfectionist/sort-objects": "off",
    },
  },
];

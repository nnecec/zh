# Introduction

**Zh** is a monorepo for creating ESLint and Prettier plugins that format Chinese text according to modern Chinese documentation conventions.

## Features

- **Chinese-aware**: Specially designed for Chinese text, understanding the nuances of mixed Chinese and English content
- **Configurable**: Choose which rules to enable and customize options to match your project's style
- **Fast**: Built with performance in mind, format your Chinese documentation in milliseconds

## Tools

- **prettier-plugin-zh**: A Prettier plugin for formatting Chinese text in markdown files
- **eslint-plugin-zh**: (Coming soon) An ESLint plugin for linting Chinese text

## Rules

Zh provides various rules for formatting Chinese text:

| Rule | Description |
|------|-------------|
| `space-around-alphabet` | Place one space before/after English words |
| `space-around-number` | Place one space before/after numbers |
| `space-around-code` | Place one space before/after inline code block |
| `space-around-link` | Place one space before/after inline link block |
| `no-duplicate-punctuation` | Remove repetitive duplicate punctuation |
| `no-space-around-fullwidth` | Remove space around fullwidth characters |
| `no-space-between-number-unit` | Remove space between number and unit |
| `zhIgnorePatterns` | Ignore specific text from formatting |

## Credits

- [lint-md](https://github.com/lint-md/lint-md)
- [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)
- [document-style-guide](https://github.com/ruanyf/document-style-guide)
- [chinese-copywriting-guidelines](https://github.com/sparanoid/chinese-copywriting-guidelines)

## License

All packages are licensed under the [MIT License](https://opensource.org/licenses/MIT).

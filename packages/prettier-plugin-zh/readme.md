# prettier-plugin-zh

**prettier-plugin-zh** is a Prettier plugin designed to optimize Chinese text formatting.

## Features

- spaceAroundAlphabet: add spaces between Chinese and English characters.
- spaceAroundNumber: add spaces between Chinese and Number characters.
- In the future, more formatting options for Chinese text will be added.

## Installation

You can install **prettier-plugin-zh** using npm, yarn or pnpm:

```bash
# npm
npm install prettier prettier-plugin-zh --save-dev
# yarn
yarn add prettier prettier-plugin-zh --dev
# pnpm
pnpm add prettier prettier-plugin-zh --save-dev
```

## Usage

1. Create a [prettier config file](https://prettier.io/docs/en/configuration.html) in the root of your project.
2. Add the following configuration to enable the plugin:

```json
{
  "plugins": ["prettier-plugin-zh"]
}
```

## Configuration

```json
{
  "plugins": ["prettier-plugin-zh"],
  "spaceAroundAlphabet": true,
  "spaceAroundNumber": true
}
```

### `spaceAroundAlphabet`

- **Type:** `boolean`
- **Default:** `true`
- **Description:** When set to `true`, this option will enable the insertion of spaces between Chinese and English characters. If set to `false`, this feature will be disabled.

### `spaceAroundNumber`

- **Type:** `boolean`
- **Default:** `true`
- **Description:** When set to `true`, this option will enable the insertion of spaces between Chinese and Number characters. If set to `false`, this feature will be disabled.

## Contributing

Contributions to **prettier-plugin-zh** are welcome! If you want to add more formatting options or fix issues, feel free to open a pull request on our GitHub repository. We appreciate your help in making this plugin more robust and useful.

## License

**prettier-plugin-zh** is licensed under the [MIT License](https://opensource.org/licenses/MIT), making it open and free to use.

## Acknowledgments

We would like to express our gratitude to the Prettier team for their amazing work in developing such a powerful code formatting tool.

---

Thank you for using **prettier-plugin-zh**! If you have any questions or encounter any problems, please don't hesitate to reach out to us through the issue tracker on GitHub. Happy formatting!

## Credits

- <https://github.com/lint-md/lint-md>
- <https://github.com/trivago/prettier-plugin-sort-imports>

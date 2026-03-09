# prettier-plugin-zh

**prettier-plugin-zh** is a Prettier plugin of **Zh**.

> only support .md now.

## Installation

You can install **prettier-plugin-zh** using npm, yarn or pnpm:

```bash
npm i -D prettier prettier-plugin-zh
```

## Usage

1. Create a [prettier config file](https://prettier.io/docs/en/configuration.html) in the root of
   your project.
2. Add the following configuration to enable the plugin:

```json
{
  "plugins": ["prettier-plugin-zh"]
}
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `spaceAroundAlphabet` | `boolean` | `true` | Place one space before/after English words |
| `spaceAroundNumber` | `boolean` | `true` | Place one space before/after numbers |
| `spaceAroundCode` | `boolean` | `false` | Place one space before/after inline code block |
| `spaceAroundLink` | `boolean` | `false` | Place one space before/after inline link block |
| `noDuplicatePunctuation` | `boolean` | `false` | Remove repetitive duplicate punctuation |
| `noSpaceAroundFullwidth` | `boolean` | `true` | Remove space around fullwidth characters |
| `noSpaceBetweenNumberUnit` | `string[]` | `[]` | Remove space between number and unit |
| `zhIgnorePatterns` | `string` | `""` | Ignore specific text from formatting |

## Configuration Example

```json
{
  "plugins": ["prettier-plugin-zh"],
  "spaceAroundAlphabet": true,
  "spaceAroundNumber": true,
  "spaceAroundCode": true,
  "spaceAroundLink": true,
  "noDuplicatePunctuation": true,
  "noSpaceAroundFullwidth": true,
  "noSpaceBetweenNumberUnit": ["%", "°C", "°"],
  "zhIgnorePatterns": "[\"天若OCR\", \"r:ChatGPT\"]"
}
```

## Ignore Patterns

You can use `zhIgnorePatterns` to ignore specific text from formatting. This is useful when you want to preserve certain text as-is.

### Format

The option accepts:
- **JSON string**: `'["天若OCR", "r:ChatGPT"]'`
- **Comma-separated**: `"天若OCR,Photoshop"`
- **Regex pattern**: Prefix with `r:` to use regex (e.g., `"r:ChatGPT"`)

### Examples

```json
{
  "plugins": ["prettier-plugin-zh"],
  "zhIgnorePatterns": "天若OCR"
}
```

```json
{
  "plugins": ["prettier-plugin-zh"],
  "zhIgnorePatterns": "[\"天若OCR\", \"r:ChatGPT\"]"
}
```

The first example ignores any text containing "天若OCR". The second example ignores both "天若OCR" and any text matching the regex pattern "ChatGPT".

## Acknowledgements

We would like to express our gratitude to the Prettier team for their amazing work in developing
such a powerful code formatting tool.

Thank you for using **prettier-plugin-zh**! If you have any questions or encounter any problems,
please don't hesitate to reach out to us through the issue tracker on GitHub. Happy formatting!

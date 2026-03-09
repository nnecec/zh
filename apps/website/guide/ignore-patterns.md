# ignore-patterns

::: tip Config Required
This rule requires configuration.
:::

## Rule Details

The `zhIgnorePatterns` option allows you to ignore specific text from formatting. This is useful when you want to preserve certain text as-is, such as product names, brand names, or specific terminology that should not be modified.

### Format

The option accepts:
- **JSON string**: `'["天若OCR", "r:ChatGPT"]'`
- **Comma-separated**: `"天若OCR,Photoshop"`
- **Regex pattern**: Prefix with `r:` to use regex (e.g., `"r:ChatGPT"`)

### How It Works

- **String pattern**: Matches if the text contains the specified string
- **Regex pattern**: Matches using regular expression (prefix with `r:`)

### Partial Ignore

The ignore pattern only affects the matched region. Other parts of the text will still be formatted normally.

```md
<!-- zhIgnorePatterns: "天若OCR" -->

<!-- ✅ Correct -->
我们使用天若OCR和 AI 技术进行文字识别。

<!-- Input -->
我们使用天若OCR和AI技术进行文字识别。

<!-- Output -->
我们使用天若OCR和 AI 技术进行文字识别。
```

## Usage

```json
{
  "zhIgnorePatterns": "天若OCR"
}
```

```json
{
  "zhIgnorePatterns": "[\"天若OCR\", \"r:ChatGPT\"]"
}
```

- **Type:** `string` (JSON string or comma-separated)
- **Default:** `""`
- **Description:** Specify patterns to ignore during formatting. Use `r:` prefix for regex patterns.

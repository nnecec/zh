# space-around-number

::: tip Recommended
This rule is recommended.
:::

::: info Auto-fix
This rule is automatically fixable.
:::

## Rule Details

Place one space before/after numbers

```md
// ✅ Correct
今天出去買菜花了 5000 元。

// ❌ Incorrect
今天出去買菜花了 5000元。

今天出去買菜花了5000元。

// 🔧 Fixed
今天出去買菜花了 5000 元。

今天出去買菜花了 5000 元。
```

## Usage

```json
{
  "spaceAroundNumber": true
}
```

- **Type:** `boolean`
- **Default:** `true`
- **Description:** When set to `true`, this option will enable the insertion of spaces between
  Chinese and Number characters. If set to `false`, this feature will be disabled.

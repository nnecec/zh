# space-around-alphabet

::: tip Recommended
This rule is recommended.
:::

::: info Auto-fix
This rule is automatically fixable.
:::

## Rule Details

Place one space before/after English words

```md
// ✅ Correct
在 LeanCloud 上，數據儲存是圍繞 AVObject 進行的。

// ❌ Incorrect
在LeanCloud上，數據儲存是圍繞AVObject進行的。

在 LeanCloud上，數據儲存是圍繞AVObject 進行的。

// 🔧 Fixed
在 LeanCloud 上，數據儲存是圍繞 AVObject 進行的。

在 LeanCloud 上，數據儲存是圍繞 AVObject 進行的。
```

## Usage

```json
{
  "spaceAroundAlphabet": true
}
```

- **Type:** `boolean`
- **Default:** `true`
- **Description:** When set to `true`, this option will enable the insertion of spaces between
  Chinese and English characters. If set to `false`, this feature will be disabled.

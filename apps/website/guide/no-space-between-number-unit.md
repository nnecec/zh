# no-space-between-number-unit

::: tip Config Required
This rule requires configuration.
:::

::: info Auto-fix
This rule is automatically fixable.
:::

## Rule Details

The option allows configuring which unit symbols will have spaces removed between the unit and a
number. This can be used to control spacing for things like currency symbols, percent signs,
temperature units, etc.

```md
<!-- "noSpaceBetweenNumberUnit": ["%", "°"] -->

<!-- ✅ Correct -->

角度為 90° 的角，就是直角。

新 MacBook Pro 有 15% 的 CPU 性能提升。

<!-- ❌ Incorrect -->

角度為 90 ° 的角，就是直角。

新 MacBook Pro 有 15 % 的 CPU 性能提升。

 <!-- 🔧 Fixed -->

角度為 90° 的角，就是直角。

新 MacBook Pro 有 15% 的 CPU 性能提升。
```

## Usage

```json
{
  "noSpaceBetweenNumberUnit": ["%", "°"]
}
```

- **Type:** `string[]`
- **Default:** `[]`
- **Description:** You have to set an array of strings, where each string is a unit symbol to apply
  the behavior to, for example: `['%', '°']`.

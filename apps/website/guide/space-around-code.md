# space-around-code

::: tip Config Required
This rule requires configuration.
:::

::: info Auto-fix
This rule is automatically fixable.
:::

## Rule Details

Place one space before/after inline code block.

```md
 <!-- ✅ Correct -->

今天使用了 `Vite` 来打包应用

<!-- ❌ Incorrect -->

今天使用了`Vite`来打包应用

<!-- 🔧 Fixed  -->

今天使用了 `Vite` 来打包应用
```

## Usage

```json
{
  "spaceAroundCode": true
}
```

- **Type:** `boolean`
- **Default:** `false`
- **Description:** When set to `true`, this option will enable the insertion of spaces around inline
  code block. If set to `false`, this feature will be disabled.

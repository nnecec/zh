# space-around-link

::: tip Config Required
This rule requires configuration.
:::

::: info Auto-fix
This rule is automatically fixable.
:::

## Rule Details

Place one space before/after inline link block.

```md
 <!-- ✅ Correct -->

查看 Awesome Vite 仓库的 [社区维护模板](https://github.com/vitejs/awesome-vite#templates) ，里面包含
各种工具和不同框架的模板。

<!-- ❌ Incorrect -->

查看 Awesome Vite 仓库的[社区维护模板](https://github.com/vitejs/awesome-vite#templates)，里面包含各
种工具和不同框架的模板。

<!-- 🔧 Fixed  -->

查看 Awesome Vite 仓库的 [社区维护模板](https://github.com/vitejs/awesome-vite#templates)，里面包含
各种工具和不同框架的模板。
```

## Usage

```json
{
  "spaceAroundLink": true
}
```

- **Type:** `boolean`
- **Default:** `false`
- **Description:** When set to `true`, this option will enable the insertion of spaces around inline
  link block. If set to `false`, this feature will be disabled.

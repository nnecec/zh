# no-space-around-fullwidth

::: tip Recommended
This rule is recommended.
:::

::: info Auto-fix
This rule is automatically fixable.
:::

## Rule Details

The `noSpaceAroundFullwidth` configuration option is a Boolean value that determines whether spaces
around fullwidth characters should be removed.

Removing spaces around fullwidth characters is most useful for Asian languages that mix fullwidth
and halfwidth characters, such as Japanese and Chinese. It can help improve alignment and make text
more compact.

```md
<!-- ✅ Correct -->
剛剛買了一部 iPhone，好開心！

<!-- ❌ Incorrect -->
剛剛買了一部 iPhone ，好開心！

剛剛買了一部 iPhone， 好開心！

 <!-- 🔧 Fixed -->
剛剛買了一部 iPhone，好開心！

剛剛買了一部 iPhone，好開心！
```

## Usage

```json
{
  "noSpaceAroundFullwidth": true
}
```

- **Type:** `boolean`
- **Default:** `true`
- **Description:** Set option to true to remove any spaces before and after fullwidth characters.

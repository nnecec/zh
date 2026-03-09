# no-duplicate-punctuation

::: tip Recommended
This rule is recommended.
:::

::: info Auto-fix
This rule is automatically fixable.
:::

## Rule Details

remove repetitive duplicate punctuation.

```md
// ✅ Correct
德國隊竟然戰勝了巴西隊！

她竟然對你說「喵」？！

// ❌ Incorrect
德國隊竟然戰勝了巴西隊！！

德國隊竟然戰勝了巴西隊！！！！！！

她竟然對你說「喵」？？？！

她竟然對你說「喵」？！？！？？？！

// 🔧 Fixed
德國隊竟然戰勝了巴西隊！

德國隊竟然戰勝了巴西隊！

她竟然對你說「喵」？！

她竟然對你說「喵」？！？！？！
```

## Usage

```json
{
  "noDuplicatePunctuation": true
}
```

- **Type:** `boolean`
- **Default:** `false`
- **Description:** When set to `true`, this option will remove duplicate punctuation marks.

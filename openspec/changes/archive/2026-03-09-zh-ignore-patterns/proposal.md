## Why

当前的中英文空格格式化会在所有中英文交界处自动添加空格，但在软件名称等场景下，例如 "天若OCR" 这样的品牌名称，中间不应该添加空格，否则会破坏名称的完整性。用户希望能够通过自定义词库（支持字符串和正则表达式）来忽略特定模式的空格格式化，同时保持其他部分的正常格式化。

## What Changes

1. 在 Prettier 插件配置中新增 `zhIgnorePatterns` 选项
2. 支持字符串数组和正则表达式数组两种模式
3. 在空格格式化规则执行时，跳过匹配 `zhIgnorePatterns` 的文本区域
4. 更新相关类型定义和文档

## Capabilities

### New Capabilities

- `zh-ignore-patterns`: 支持用户配置自定义忽略模式，在这些模式内部不添加中英文空格

## Impact

- 修改 `packages/prettier-plugin-zh` 的配置解析逻辑
- 修改 `packages/core` 的空格格式化规则
- 新增配置选项类型定义

## Why

当前 `zhIgnorePatterns` 功能只在 `prettier-plugin-zh` 中实现，且仅影响空格格式化规则。用户希望在 `core` 包中实现通用的 `ignorePatterns` 功能，当文本匹配忽略模式时，跳过所有中文格式化规则（不仅仅是空格规则）。这样可以：
1. 统一在不同插件中的行为
2. 支持更多场景（如 ESLint 插件）
3. 实现更彻底的忽略逻辑

## What Changes

1. 在 `packages/core` 中新增 `ignorePatterns` 功能
   - 新增 `ignorePatterns` 选项（类型：`(string | RegExp)[]`）
   - 解析配置文件中的 ignorePatterns（支持 JSON 数组和逗号分隔格式）
   - 当文本匹配 ignorePatterns 时，跳过所有格式化规则

2. Prettier 插件配置保持 `zhIgnorePatterns` 名称，内部使用 core 的 `ignorePatterns`
   - Prettier 配置选项名称保持不变：`zhIgnorePatterns`
   - 内部将解析后的模式传递给 core 包的规则函数

3. 扩展忽略逻辑
   - 当前仅在 `spaceAroundAlphabet` 和 `spaceAroundNumber` 中支持
   - 扩展到所有规则：`noDuplicatePunctuation`, `noSpaceAroundFullwidth`, `noSpaceBetweenNumberUnit`

4. 更新 Prettier 插件
   - 使用 core 包的 ignorePatterns 功能
   - 更新选项定义

## Capabilities

### New Capabilities
- `ignore-patterns`: 通用忽略模式功能，支持在 core 包中配置，当文本匹配模式时跳过所有中文格式化规则

### Modified Capabilities
- (无 - 新功能)

## Impact

- 修改 `packages/core`: 新增 ignorePatterns 解析和应用逻辑
- 修改 `packages/prettier-plugin-zh`: 使用 core 包的 ignorePatterns 逻辑，配置名称保持 zhIgnorePatterns
- 修改 `packages/eslint-plugin-zh`: 未来可使用 core 包的 ignorePatterns

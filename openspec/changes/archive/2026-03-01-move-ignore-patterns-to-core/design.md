## Context

当前 `zhIgnorePatterns` 功能只在 `prettier-plugin-zh` 中实现，且仅在空格格式化规则（`spaceAroundAlphabet`, `spaceAroundNumber`）中生效。用户希望在 `core` 包中实现通用的 `ignorePatterns` 功能，使其能够跳过所有中文格式化规则。

## Goals / Non-Goals

**Goals:**
- 在 `packages/core` 中实现通用的 `ignorePatterns` 功能
- 支持配置 `(string | RegExp)[]` 类型的忽略模式
- 当文本匹配 ignorePatterns 时，跳过所有格式化规则（不仅仅是空格规则）
- 统一 Prettier 和 ESLint 插件的 ignorePatterns 行为

**Non-Goals:**
- 不修改现有的格式化规则核心逻辑（只在调用层添加跳过逻辑）
- 不提供默认词库
- 不支持动态更新 ignorePatterns

## Decisions

1. **配置结构**: 在 core 中定义 `IgnorePatternsOptions` 接口，包含 `ignorePatterns: (string | RegExp)[]`
2. **解析逻辑**: 将 `parseIgnorePatterns` 函数从 prettier-plugin-zh 移到 core 包
3. **应用策略**:
   - 在 core 包的 transforms 或规则入口处检查匹配
   - 如果文本整体匹配 ignorePatterns，则跳过所有规则
   - 或者在每条规则中检查并跳过匹配区域（当前实现方式）
4. **选项传递**: 通过 options 参数传递 ignorePatterns 到各规则函数

**实现方案**: 采用"在每条规则中检查"的方案，原因：
- 保持现有规则的独立性
- 与当前 prettier-plugin-zh 的实现一致
- 更容易迁移到 core

## Risks / Trade-offs

- [风险] 正则表达式可能带来性能问题 → Mitigation: 在文档中提示用户注意正则表达式的复杂度
- [风险] 多个规则都需要添加 ignorePatterns 检查，代码重复 → Mitigation: 提取通用函数到 core/utils
- [风险] 向后兼容性 → Mitigation: 在 prettier-plugin-zh 中保留 zhIgnorePatterns 作为配置选项名称，内部转换为 ignorePatterns 传递给 core

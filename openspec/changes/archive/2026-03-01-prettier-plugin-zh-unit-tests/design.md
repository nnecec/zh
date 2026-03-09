## Context

prettier-plugin-zh 目前没有单元测试，只有一些 fixture 文件用于手动测试。这使得难以验证插件功能是否正常工作，也无法确保修改代码后不会破坏现有功能。

## Goals / Non-Goals

**Goals:**
- 为 prettier-plugin-zh 添加完整的单元测试覆盖
- 测试 Prettier 与插件的集成是否正常
- 测试各个格式化规则是否按预期工作
- 测试配置选项是否正确生效

**Non-Goals:**
- 不测试 core 包的规则逻辑（core 已有独立测试）
- 不测试 CLI 用户交互
- 不测试性能问题

## Decisions

1. **测试框架选择 Vitest**: 理由：
   - 与 core 包使用的测试框架一致
   - 配置简单，与 Prettier 内置测试工具兼容性好

2. **测试方法**: 使用 Prettier 的 `format` 方法直接测试
   - 不依赖文件系统的测试
   - 可以精确控制输入和配置
   - 运行速度快

3. **测试结构**: 测试文件放在各包的 `tests` 目录下
   - `tests/unit/index.test.ts`: 测试插件入口和基本功能
   - `tests/unit/options.test.ts`: 测试配置选项
   - `tests/unit/rules/*.test.ts`: 测试各规则特性
   - `tests/fixtures/`: 保留用于手动测试的 fixture 文件

4. **测试覆盖内容**:
   - 插件加载测试
   - 各规则的输入/输出转换测试
   - ignorePatterns 功能测试
   - 选项开关测试
   - 边界情况测试（空输入、特殊字符等）

## Risks / Trade-Out

- [风险] Prettier 版本兼容性 → Mitigation: 使用 peerDependencies 中指定的版本范围
- [风险] 测试维护成本 → Mitigation: 保持测试简单，聚焦核心功能

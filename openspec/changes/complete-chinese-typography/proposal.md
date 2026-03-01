## Why

当前 core 包已实现部分中文排版规则（空格管理、重复标点检测等），但对照 [中文排版指南](https://github.com/sparanoid/chinese-copywriting-guidelines) 仍有多项功能缺失。此外，core 包缺少单元测试，无法保证代码质量和后续维护。需要在完善功能的同时建立完整的测试体系。

## What Changes

1. **新增规则实现**：
   - `strict-fullwidth-and-halfwidth`: 完善全角/半角转换规则（标点、数字）
   - `proper-noun-capitalization`: 专有名词大小写校验（如 GitHub、Microsoft）
   - `no-improper-abbreviation`: 缩写规范检测（如 h5、FED 等不规范缩写）
   - `straight-quote-replacement`: 直角引号替换（"" → "", '' → ''）

2. **测试体系建设**：
   - 为 core 包引入 Vitest 测试框架
   - 为所有现有规则编写单元测试
   - 为新规则同步编写测试

## Capabilities

### New Capabilities
- `fullwidth-halfwidth-conversion`: 全角/半角字符转换规则
- `proper-noun-capitalization`: 专有名词大小写校验规则
- `no-improper-abbreviation`: 不规范缩写检测规则
- `straight-quote-replacement`: 直角引号替换规则
- `core-unit-tests`: 使用 Vitest 的核心包单元测试

### Modified Capabilities
（无 - 现有规则行为不变，仅做功能补全）

## Impact

- **代码影响**：`packages/core/src/rules/` 目录
- **依赖影响**：在 `packages/core/package.json` 中添加 `vitest` 开发依赖
- **配置影响**：可能需要添加 `vitest.config.ts`

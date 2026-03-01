## Context

当前 core 包位于 `packages/core/src/rules/`，已实现以下规则：
- `no-duplicate-punctuation`: 避免重复标点
- `no-space-around-fullwidth`: 全角标点周围不添加空格
- `no-space-between-number-unit`: 数字与单位之间不添加空格
- `space-around-block`: 块级元素周围空格
- `space-around-char`: 中英文/数字之间空格管理
- `strict-fullwidth-and-halfwidth`: 空文件，待实现

根据中文排版指南，还需实现：
- 全角/半角转换（标点、数字）
- 专有名词大小写校验
- 缩写规范检测
- 直角引号替换

## Goals / Non-Goals

**Goals:**
- 实现 4 个新规则：`strict-fullwidth-and-halfwidth`、`proper-noun-capitalization`、`no-improper-abbreviation`、`straight-quote-replacement`
- 使用 Vitest 为所有规则编写单元测试
- 测试覆盖率目标：所有导出的规则函数

**Non-Goals:**
- 不修改现有已实现规则的行为（保持向后兼容）
- 不实现 ESLint 规则的 fixable 功能（仅保持 transform 功能）
- 不修改 Prettier 插件或 ESLint 插件的实现

## Decisions

### 1. 测试框架选择 Vitest
**决定**: 使用 Vitest 而非 Jest
**理由**: Vitest 与项目使用的 bunchee 构建工具同属 Vite 生态，配置简洁、运行速度快，且支持 TypeScript 原生。

### 2. 规则导出结构
**决定**: 每个规则独立文件，通过 `rules/index.ts` 统一导出
**理由**: 现有代码已采用此模式，保持一致便于维护。每个规则文件包含：
- 主转换函数（如 `transform(text): string`）
- 规则选项类型（可选）
- 单元测试文件同目录下的 `*.test.ts`

### 3. 专有名词校验方式
**决定**: 使用内置常见专有名词列表 + 可扩展配置
**理由**: 实时查询外部 API 不可行，内置列表覆盖常见技术词汇（GitHub、Microsoft、TypeScript 等）即可满足大部分场景。可通过配置参数扩展。

### 4. 缩写检测范围
**决定**: 检测常见不规范缩写（h5、fed、tm、rpa 等）
**理由**: 缩写规范因领域而异，内置最常见的 Web/前端开发领域不规范缩写，支持用户通过 ignorePatterns 扩展。

## Risks / Trade-offs

- **[风险] 专有名词列表不完整** → 通过配置参数让用户可扩展，或未来支持加载外部词典
- **[风险] 缩写检测可能产生误报** → 支持配置白名单，用户可标记特定缩写为合规
- **[权衡] 全角/半角转换可能影响英文内容** → 仅在中文语境（检测到 CJK 字符）时应用转换

## Migration Plan

1. 添加 `vitest` 依赖到 `packages/core/package.json`
2. 创建 `vitest.config.ts` 配置文件
3. 实现 4 个新规则文件
4. 为每个规则创建对应的 `*.test.ts` 测试文件
5. 运行 `pnpm test` 验证所有测试通过
6. 构建确认无破坏性变更

## Context

当前 prettier-plugin-zh 在处理中英文混排时，会在所有中文和英文/数字之间添加空格。这对于一般文档是合理的，但在软件名称、品牌名等场景下，某些中英文组合不应该被分开，例如 "天若OCR"、"ChatGPT" 等。

用户希望通过配置自定义模式来跳过这些特定区域的空格格式化，同时保持其他部分的格式化能力。

## Goals / Non-Goals

**Goals:**
- 支持通过配置 `zhIgnorePatterns` 选项指定忽略模式
- 支持字符串和正则表达式两种模式
- 在空格格式化时跳过匹配忽略模式的文本区域
- 保持其他部分的正常格式化行为

**Non-Goals:**
- 不支持复杂的中文分词或 NLP 分析
- 不提供默认的词库（由用户自定义）

## Decisions

1. **配置结构**: 采用 `zhIgnorePatterns` 作为配置键，支持 `(string | RegExp)[]` 类型
2. **实现位置**: 在 core 包的空格规则中添加 ignorePatterns 检查逻辑
3. **匹配策略**: 使用 String.prototype.match() 进行字符串匹配，使用 RegExp.test() 进行正则匹配

## Risks / Trade-offs

- [风险] 正则表达式可能带来性能问题 →  Mitigation: 在文档中提示用户注意正则表达式的复杂度
- [风险] 忽略模式可能与正常格式化冲突 →  Mitigation: 忽略模式优先处理

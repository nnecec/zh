## ADDED Requirements

### Requirement: zhIgnorePatterns 配置选项
Prettier 插件 SHALL 支持通过 `zhIgnorePatterns` 配置项指定忽略模式数组，该数组可以包含字符串或正则表达式。

#### Scenario: 配置字符串模式
- **WHEN** 用户配置 `{ "zhIgnorePatterns": ["天若OCR"] }`
- **THEN** 文本 "我们使用天若OCR进行文字识别" 中的 "天若OCR" 不会添加空格

#### Scenario: 配置正则表达式模式
- **WHEN** 用户配置 `{ "zhIgnorePatterns": [/天若[a-zA-Z]+/] }`
- **THEN** 文本 "我们使用天若OCR进行文字识别" 不会添加空格（匹配 "天若OCR"）

#### Scenario: 配置多个模式
- **WHEN** 用户配置 `{ "zhIgnorePatterns": ["天若OCR", /ChatGPT/] }`
- **THEN** 文本中所有匹配的模式都不会添加空格

### Requirement: 忽略模式不影响的区域
zhIgnorePatterns SHALL 只影响匹配区域的空格格式化，不影响文本其他部分的中英文空格格式化。

#### Scenario: 部分区域被忽略
- **WHEN** 用户配置 `{ "zhIgnorePatterns": ["天若OCR"] }` 且文本为 "我们使用天若OCR和AI技术"
- **THEN** 结果为 "我们使用天若OCR和 AI 技术"（"天若OCR" 内部无空格，"AI" 与中文之间有空格）

#### Scenario: 未匹配模式时正常格式化
- **WHEN** 用户配置 `{ "zhIgnorePatterns": ["天若OCR"] }` 且文本为 "我们使用Photoshop"
- **THEN** 结果为 "我们使用 Photoshop"（未匹配忽略模式，正常添加空格）

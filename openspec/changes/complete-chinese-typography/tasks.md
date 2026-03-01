## 1. 测试环境搭建

- [ ] 1.1 在 packages/core/package.json 添加 vitest 开发依赖
- [ ] 1.2 创建 packages/core/vitest.config.ts 配置文件
- [ ] 1.3 在 packages/core/package.json 添加 test 脚本
- [ ] 1.4 验证 vitest 配置正确（运行测试确认框架可用）

## 2. 完善全角/半角转换规则

- [ ] 2.1 实现 `strict-fullwidth-and-halfwidth.ts` 标点转换逻辑
- [ ] 2.2 实现数字全角转半角功能
- [ ] 2.3 处理英文语境下保留半角标点
- [ ] 2.4 处理度数/百分比特殊场景（90°, 15%）
- [ ] 2.5 创建 `strict-fullwidth-and-halfwidth.test.ts` 测试文件

## 3. 实现专有名词大小写校验

- [ ] 3.1 创建 `proper-noun-capitalization.ts` 规则文件
- [ ] 3.2 实现常见技术专有名词列表（GitHub, Microsoft, TypeScript, Google, Apple 等）
- [ ] 3.3 实现大小写检测与修正逻辑
- [ ] 3.4 创建 `proper-noun-capitalization.test.ts` 测试文件

## 4. 实现缩写规范检测

- [ ] 4.1 创建 `no-improper-abbreviation.ts` 规则文件
- [ ] 4.2 实现常见不规范缩写检测（h5, fed, tm 等）
- [ ] 4.3 支持 ignorePatterns 配置参数
- [ ] 4.4 创建 `no-improper-abbreviation.test.ts` 测试文件

## 5. 实现直角引号替换

- [ ] 5.1 创建 `straight-quote-replacement.ts` 规则文件
- [ ] 5.2 实现双引号转换（" " → " "）
- [ ] 5.3 实现单引号转换（' ' → ' '）
- [ ] 5.4 处理嵌套引号场景
- [ ] 5.5 创建 `straight-quote-replacement.test.ts` 测试文件

## 6. 现有规则补充测试

- [ ] 6.1 为 `no-duplicate-punctuation.ts` 补充测试
- [ ] 6.2 为 `no-space-around-fullwidth.ts` 补充测试
- [ ] 6.3 为 `no-space-between-number-unit.ts` 补充测试
- [ ] 6.4 为 `space-around-block.ts` 补充测试
- [ ] 6.5 为 `space-around-char.ts` 补充测试

## 7. 验证与构建

- [ ] 7.1 运行所有测试确保通过
- [ ] 7.2 运行 `pnpm build` 确保无破坏性变更
- [ ] 7.3 在 rules/index.ts 导出新规则（如需要）

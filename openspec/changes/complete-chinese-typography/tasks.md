## 1. 测试环境搭建

- [ ] 1.1 在 packages/core/package.json 添加 vitest 开发依赖
- [ ] 1.2 创建 packages/core/vitest.config.ts 配置文件
- [ ] 1.3 在 packages/core/package.json 添加 test 脚本
- [ ] 1.4 验证 vitest 配置正确（运行测试确认框架可用）

## 2. 完善全角/半角转换规则

- [ ] 2.1 实现 `strict-fullwidth-and-halfwidth.ts` 标点转换逻辑
  - 半角标点转全角：`,.:;!?()[]{}` → `，：；！？（）［］｛｝`
  - 中文语境检测算法（CJK 字符识别）
- [ ] 2.2 实现数字全角/半角转换功能
  - 全角数字：０１２３４５６７８９
  - 纯中文句子转换为全角数字
- [ ] 2.3 处理英文语境下保留半角标点
  - 纯英文段落不进行转换
  - 混合语境智能判断
- [ ] 2.4 处理度数/百分比特殊场景（90°, 15%）
- [ ] 2.5 创建 `strict-fullwidth-and-halfwidth.test.ts` 测试文件

## 3. 现有规则补充测试

- [ ] 3.1 为 `no-duplicate-punctuation.ts` 补充测试
- [ ] 3.2 为 `no-space-around-fullwidth.ts` 补充测试
- [ ] 3.3 为 `no-space-between-number-unit.ts` 补充测试
- [ ] 3.4 为 `space-around-block.ts` 补充测试
- [ ] 3.5 为 `space-around-char.ts` 补充测试

## 4. 验证与构建

- [ ] 4.1 运行所有测试确保通过
- [ ] 4.2 运行 `pnpm build` 确保无破坏性变更
- [ ] 4.3 在 rules/index.ts 导出新规则（如需要）

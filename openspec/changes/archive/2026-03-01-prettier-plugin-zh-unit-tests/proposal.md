## Why

prettier-plugin-zh 目前缺少单元测试，无法验证插件是否正确工作，也无法确保各规则特性按预期执行。添加单元测试可以提高代码质量，防止回归，并确保新功能正确实现。

## What Changes

1. 为 prettier-plugin-zh 添加测试框架（Vitest + Prettier 测试工具）
2. 添加插件加载测试：验证 Prettier 能正确加载插件
3. 添加各规则的集成测试：
   - spaceAroundAlphabet
   - spaceAroundNumber
   - noDuplicatePunctuation
   - noSpaceAroundFullwidth
   - noSpaceBetweenNumberUnit
   - spaceAroundCode
   - spaceAroundLink
4. 添加 ignorePatterns 功能测试
5. 添加配置选项测试：验证各选项是否正确生效
6. 添加边界情况和错误处理测试

## Capabilities

### New Capabilities
- `prettier-plugin-zh-unit-tests`: 为 prettier-plugin-zh 添加完整的单元测试覆盖

### Modified Capabilities
- (无)

## Impact

- 修改 `packages/prettier-plugin-zh`: 添加测试文件和测试配置（放在 `tests/` 目录下）
- 添加测试依赖：vitest, @testing-library/jest-dom 等

## 1. 添加配置类型定义

- [x] 1.1 在 packages/prettier-plugin-zh/src/types.ts 中添加 ZhIgnorePatterns 类型
- [x] 1.2 在 packages/core 中添加忽略模式的类型定义

## 2. 更新配置解析

- [x] 2.1 在 packages/prettier-plugin-zh/src/options.ts 中解析 zhIgnorePatterns 配置
- [x] 2.2 将 zhIgnorePatterns 传递到 core 包的规则中

## 3. 实现忽略逻辑

- [x] 3.1 在 packages/core 的空格格式化规则中添加 ignorePatterns 检查
- [x] 3.2 实现字符串模式匹配逻辑
- [x] 3.3 实现正则表达式模式匹配逻辑

## 4. 添加测试用例

- [x] 4.1 在 tests/fixtures/ 中添加忽略模式的测试 fixture
- [x] 4.2 验证字符串模式匹配
- [x] 4.3 验证正则表达式模式匹配
- [x] 4.4 验证部分区域被忽略时其他区域正常格式化

## 5. 构建和验证

- [x] 5.1 构建 packages/core
- [x] 5.2 构建 packages/prettier-plugin-zh
- [x] 5.3 验证实际格式化效果

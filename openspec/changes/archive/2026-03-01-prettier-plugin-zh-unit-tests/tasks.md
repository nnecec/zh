## 1. Setup

- [x] 1.1 Add vitest and @types/prettier to devDependencies
- [x] 1.2 Create vitest.config.ts in prettier-plugin-zh
- [x] 1.3 Add test script to package.json

## 2. Plugin Basic Tests

- [x] 2.1 Create tests/unit/index.test.ts
- [x] 2.2 Test plugin loads correctly
- [x] 2.3 Test plugin registers with Prettier

## 3. Rule Tests

- [x] 3.1 Create tests/unit/rules/space-around-alphabet.test.ts
- [x] 3.2 Create tests/unit/rules/space-around-number.test.ts
- [x] 3.3 Create tests/unit/rules/no-duplicate-punctuation.test.ts
- [x] 3.4 Create tests/unit/rules/no-space-around-fullwidth.test.ts
- [x] 3.5 Create tests/unit/rules/no-space-between-number-unit.test.ts
- [x] 3.6 Create tests/unit/rules/space-around-code.test.ts
- [x] 3.7 Create tests/unit/rules/space-around-link.test.ts

## 4. Feature Tests

- [x] 4.1 Create tests/unit/options.test.ts for zhIgnorePatterns
- [x] 4.2 Test zhIgnorePatterns with string patterns
- [x] 4.3 Test zhIgnorePatterns with regex patterns
- [x] 4.4 Test multiple options enabled simultaneously
- [x] 4.5 Test all options disabled

## 5. Edge Cases

- [x] 5.1 Test empty input
- [x] 5.2 Test only Chinese characters
- [x] 5.3 Test only alphabet characters
- [x] 5.4 Test only numbers
- [x] 5.5 Test special characters and emoji

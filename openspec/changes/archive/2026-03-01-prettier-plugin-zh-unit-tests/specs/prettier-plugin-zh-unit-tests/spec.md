## ADDED Requirements

### Requirement: Plugin loads correctly
The plugin SHALL be loadable by Prettier and register all formatters and parsers correctly.

#### Scenario: Plugin can be imported
- **WHEN** import the plugin from prettier-plugin-zh
- **THEN** the plugin object SHALL be returned with correct structure

#### Scenario: Plugin registers with Prettier
- **WHEN** Prettier loads the plugin
- **THEN** all formatters SHALL be registered without errors

### Requirement: spaceAroundAlphabet rule works
The plugin SHALL add spaces between Chinese and alphabet characters when enabled.

#### Scenario: Basic Chinese-Alphabet mixing
- **WHEN** input is "我们使用GitHub" with spaceAroundAlphabet enabled
- **THEN** output SHALL be "我们使用 GitHub"

#### Scenario: Multiple occurrences
- **WHEN** input is "Git和SVN都是版本管理工具"
- **THEN** output SHALL be "Git 和 SVN 都是版本管理工具"

#### Scenario: Disabled option
- **WHEN** spaceAroundAlphabet is disabled
- **THEN** no spaces SHALL be added between Chinese and alphabet

### Requirement: spaceAroundNumber rule works
The plugin SHALL add spaces between Chinese and numbers when enabled.

#### Scenario: Basic Chinese-Number mixing
- **WHEN** input is "我有5个苹果" with spaceAroundNumber enabled
- **THEN** output SHALL be "我有 5 个苹果"

#### Scenario: Numbers in sequence
- **WHEN** input is "第1次和第2次"
- **THEN** output SHALL be "第 1 次和第 2 次"

### Requirement: noDuplicatePunctuation rule works
The plugin SHALL remove duplicate fullwidth punctuation.

#### Scenario: Multiple exclamation marks
- **WHEN** input is "太棒了！！！"
- **THEN** output SHALL be "太棒了！"

#### Scenario: Multiple question marks
- **WHEN** input is "真的吗？？？"
- **THEN** output SHALL be "真的吗？"

#### Scenario: Mixed duplicates
- **WHEN** input is "这是！！！和？？？"
- **THEN** output SHALL be "这是！和？"

### Requirement: noSpaceAroundFullwidth rule works
The plugin SHALL remove spaces around fullwidth characters.

#### Scenario: Spaces around fullwidth punctuation
- **WHEN** input is "你好 ，世界"
- **THEN** output SHALL be "你好，世界"

#### Scenario: Multiple spaces
- **WHEN** input is "你好   ，   世界"
- **THEN** output SHALL be "你好，世界"

### Requirement: noSpaceBetweenNumberUnit rule works
The plugin SHALL remove spaces between numbers and units.

#### Scenario: Basic number-unit
- **WHEN** input is "5 px" with noSpaceBetweenNumberUnit: ["px", "em"]
- **THEN** output SHALL be "5px"

#### Scenario: Multiple units
- **WHEN** input is "10 px 20 em"
- **THEN** output SHALL be "10px 20em"

### Requirement: spaceAroundCode rule works
The plugin SHALL add spaces around inline code when enabled.

#### Scenario: Code with text before
- **WHEN** input is "使用`code`功能" with spaceAroundCode enabled
- **THEN** output SHALL be "使用 `code` 功能"

### Requirement: spaceAroundLink rule works
The plugin SHALL add spaces around links when enabled.

#### Scenario: Link with text before
- **WHEN** input is "访问[网站](http://example.com)" with spaceAroundLink enabled
- **THEN** output SHALL have spaces around the link

### Requirement: zhIgnorePatterns option works
The plugin SHALL skip formatting for text matching ignorePatterns.

#### Scenario: String pattern matching
- **WHEN** input is "天若OCR" with zhIgnorePatterns: ["天若OCR"]
- **THEN** no spaces SHALL be added to "天若OCR"

#### Scenario: Regex pattern matching
- **WHEN** input is "ChatGPT is great" with zhIgnorePatterns: "r:ChatGPT"
- **THEN** no spaces SHALL be added around "ChatGPT"

#### Scenario: Multiple patterns
- **WHEN** input is "天若OCR和ChatGPT" with zhIgnorePatterns: '["天若OCR", "r:ChatGPT"]'
- **THEN** no spaces SHALL be added around either pattern

### Requirement: Configuration options work correctly
The plugin SHALL respect all configuration options.

#### Scenario: All options disabled
- **WHEN** all formatting options are disabled
- **THEN** output SHALL match input exactly

#### Scenario: Multiple options enabled
- **WHEN** multiple options are enabled simultaneously
- **THEN** all enabled rules SHALL be applied in order

### Requirement: Edge cases handled correctly
The plugin SHALL handle edge cases without errors.

#### Scenario: Empty input
- **WHEN** input is empty string
- **THEN** output SHALL be empty string

#### Scenario: Only Chinese characters
- **WHEN** input is "你好世界"
- **THEN** output SHALL be "你好世界"

#### Scenario: Only alphabet characters
- **WHEN** input is "hello world"
- **THEN** output SHALL remain unchanged

#### Scenario: Only numbers
- **WHEN** input is "12345"
- **THEN** output SHALL remain unchanged

#### Scenario: Special characters
- **WHEN** input contains special characters like emoji or symbols
- **THEN** plugin SHALL NOT crash and SHALL handle gracefully

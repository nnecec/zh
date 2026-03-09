## ADDED Requirements

### Requirement: Core package supports ignorePatterns option
The core package SHALL support an `ignorePatterns` option of type `(string | RegExp)[]` that can be passed to formatting functions. When text matches any pattern in ignorePatterns, all Chinese formatting rules SHALL be skipped.

#### Scenario: String pattern matching
- **WHEN** `ignorePatterns` contains `["天若OCR"]` and input text is "天若OCR"
- **THEN** all formatting rules SHALL be skipped for this text

#### Scenario: Regex pattern matching
- **WHEN** `ignorePatterns` contains a regex pattern `r:ChatGPT` and input text is "ChatGPT is great"
- **THEN** all formatting rules SHALL be skipped for "ChatGPT" substring

#### Scenario: Mixed patterns
- **WHEN** `ignorePatterns` contains both string and regex patterns
- **THEN** matching SHALL work for both types

#### Scenario: No matching patterns
- **WHEN** `ignorePatterns` does not match any part of the input text
- **THEN** formatting rules SHALL be applied normally

### Requirement: Parse ignorePatterns from configuration
The core package SHALL provide a utility function to parse ignorePatterns from configuration format (JSON array string or comma-separated string).

#### Scenario: JSON array format
- **WHEN** input is `'["天若OCR", "r:ChatGPT"]'`
- **THEN** result SHALL be `["天若OCR", /ChatGPT/]`

#### Scenario: Comma-separated format
- **WHEN** input is `"天若OCR,ChatGPT"`
- **THEN** result SHALL be `["天若OCR", "ChatGPT"]`

#### Scenario: Regex prefix in comma-separated format
- **WHEN** input is `"r:^test,r:end$"`
- **THEN** result SHALL be `[/^test/, /end$/]`

### Requirement: Apply ignorePatterns to all formatting rules
All formatting rules in the core package SHALL check ignorePatterns and skip formatting when text matches.

#### Scenario: noDuplicatePunctuation respects ignorePatterns
- **WHEN** text matches ignorePatterns and contains duplicate punctuation
- **THEN** duplicate punctuation SHALL NOT be removed

#### Scenario: noSpaceAroundFullwidth respects ignorePatterns
- **WHEN** text matches ignorePatterns and contains spaces around fullwidth characters
- **THEN** spaces SHALL NOT be removed

#### Scenario: noSpaceBetweenNumberUnit respects ignorePatterns
- **WHEN** text matches ignorePatterns and contains space between number and unit
- **THEN** space SHALL NOT be removed

### Requirement: Prettier plugin uses core ignorePatterns
The prettier-plugin-zh package SHALL use the core package's ignorePatterns functionality. The configuration option name in Prettier SHALL remain `zhIgnorePatterns` for backward compatibility.

#### Scenario: zhIgnorePatterns option in Prettier config
- **WHEN** user configures `zhIgnorePatterns: ["天若OCR"]` in Prettier config
- **THEN** the core ignorePatterns logic SHALL be applied and matching text SHALL be skipped

#### Scenario: zhIgnorePatterns with comma-separated format
- **WHEN** user configures `zhIgnorePatterns: "天若OCR,ChatGPT"` in Prettier config
- **THEN** both patterns SHALL be parsed and applied

#### Scenario: zhIgnorePatterns with regex patterns
- **WHEN** user configures `zhIgnorePatterns: "r:^test,r:end$"` in Prettier config
- **THEN** regex patterns SHALL be parsed and applied

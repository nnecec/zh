## ADDED Requirements

### Requirement: Proper noun capitalization validation
The system SHALL validate that proper nouns follow correct capitalization conventions.

#### Scenario: Detect incorrect GitHub capitalization
- **WHEN** text contains "github" or "GITHUB" or "Github"
- **THEN** flag as incorrect and recommend "GitHub"

#### Scenario: Detect incorrect Microsoft capitalization
- **WHEN** text contains "microsoft" or "MICROSOFT"
- **THEN** flag as incorrect and recommend "Microsoft"

#### Scenario: Accept correctly capitalized proper nouns
- **WHEN** text contains correctly capitalized proper nouns like "GitHub", "Microsoft", "TypeScript", "HTML5"
- **THEN** accept as valid

#### Scenario: Handle proper nouns in Chinese sentences
- **WHEN** text contains proper nouns within Chinese sentences like "我在 GitHub 上提交了代码"
- **THEN** validate the capitalization is correct

### Requirement: Built-in proper noun list
The system SHALL include a built-in list of common proper nouns.

#### Scenario: Support common technology proper nouns
- **WHEN** checking text for "google", "apple", "amazon", "facebook" (lowercase)
- **THEN** flag as incorrect and recommend capitalized versions

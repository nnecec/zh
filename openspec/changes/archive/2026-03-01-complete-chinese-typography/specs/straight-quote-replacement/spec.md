## ADDED Requirements

### Requirement: Straight quote to Chinese quote conversion
The system SHALL convert straight quotes to Chinese-style corner brackets.

#### Scenario: Convert double straight quotes
- **WHEN** text contains double straight quotes like `""` or `"` (at beginning and end)
- **THEN** convert to Chinese corner brackets `""`

#### Scenario: Convert single straight quotes
- **WHEN** text contains single straight quotes like `''` or `'` (at beginning and end)
- **THEN** convert to Chinese corner brackets `'''`

#### Scenario: Preserve quotes in English content
- **WHEN** text contains English quotes used mid-sentence like He said "hello"
- **THEN** decide based on surrounding context (CJK or English)

### Requirement: Handle nested quotes
The system SHALL handle nested quote scenarios.

#### Scenario: Nested quotes in Chinese
- **WHEN** text contains "他说：'你好'"
- **THEN** convert to `他说：「你好」`

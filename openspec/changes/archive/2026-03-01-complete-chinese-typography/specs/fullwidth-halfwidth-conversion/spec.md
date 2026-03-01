## ADDED Requirements

### Requirement: Fullwidth and halfwidth punctuation conversion
The system SHALL convert fullwidth punctuation to halfwidth when used within English text, and convert halfwidth punctuation to fullwidth when used within Chinese text.

#### Scenario: Convert halfwidth punctuation in Chinese context
- **WHEN** text contains halfwidth punctuation (e.g., `,`, `.`, `?`) adjacent to Chinese characters
- **THEN** convert to fullwidth equivalents (e.g., `，`, `。`, `？`)

#### Scenario: Convert fullwidth punctuation in English context
- **WHEN** text contains fullwidth punctuation (e.g., `，`, `。`) within English sentences
- **THEN** convert to halfwidth equivalents (e.g., `,`, `.`)

### Requirement: Fullwidth number conversion
The system SHALL convert fullwidth numbers to halfwidth numbers.

#### Scenario: Convert fullwidth numbers
- **WHEN** text contains fullwidth numbers (e.g., `１２３４５`)
- **THEN** convert to halfwidth equivalents (e.g., `12345`)

### Requirement: Preserve valid cases
The system SHALL preserve halfwidth punctuation when it appears in valid English contexts.

#### Scenario: Keep English punctuation in English sentences
- **WHEN** text contains English sentence like "Stay hungry, stay foolish."
- **THEN** keep punctuation as halfwidth

#### Scenario: Handle degree and percentage symbols
- **WHEN** text contains "90°" or "15%"
- **THEN** keep as-is without adding spaces

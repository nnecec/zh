## ADDED Requirements

### Requirement: Vitest test framework integration
The system SHALL integrate Vitest as the testing framework for the core package.

#### Scenario: Vitest configuration exists
- **WHEN** the project includes vitest.config.ts
- **THEN** running "pnpm test" executes all test files

#### Scenario: Test files are colocated
- **WHEN** rule files exist in packages/core/src/rules/
- **THEN** corresponding test files exist at packages/core/src/rules/*.test.ts

### Requirement: All existing rules have tests
The system SHALL have unit tests for all existing rules.

#### Scenario: no-duplicate-punctuation has tests
- **WHEN** testing no-duplicate-punctuation rule
- **THEN** tests cover: basic duplicate removal, multiple duplicates, mixed punctuation

#### Scenario: no-space-around-fullwidth has tests
- **WHEN** testing no-space-around-fullwidth rule
- **THEN** tests cover: space removal around punctuation, preserving content

#### Scenario: no-space-between-number-unit has tests
- **WHEN** testing no-space-between-number-unit rule
- **THEN** tests cover: preserving no-space for unit combinations

#### Scenario: space-around-char has tests
- **WHEN** testing space-around-char rule
- **THEN** tests cover: Chinese-English spacing, Chinese-number spacing

### Requirement: All new rules have tests
The system SHALL have unit tests for all newly implemented rules.

#### Scenario: strict-fullwidth-and-halfwidth has tests
- **WHEN** testing strict-fullwidth-and-halfwidth rule
- **THEN** tests cover: punctuation conversion, number conversion, preserve English context

#### Scenario: proper-noun-capitalization has tests
- **WHEN** testing proper-noun-capitalization rule
- **THEN** tests cover: detection of incorrect capitalization, correct capitalization acceptance

#### Scenario: no-improper-abbreviation has tests
- **WHEN** testing no-improper-abbreviation rule
- **THEN** tests cover: h5 detection, fed detection, standard abbreviation acceptance

#### Scenario: straight-quote-replacement has tests
- **WHEN** testing straight-quote-replacement rule
- **THEN** tests cover: double quote conversion, single quote conversion, nested quotes

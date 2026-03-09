# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zh is a monorepo for creating ESLint and Prettier plugins that format Chinese text according to modern Chinese documentation conventions. The repository follows a pnpm workspaces structure with Turbo for build orchestration.

## Commands

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run development mode (watch mode)
pnpm dev

# Lint all packages
pnpm lint

# Test all packages
pnpm test

# Run a single test (package-specific)
# Navigate to package directory and run tests manually

# Create changeset for versioning
pnpm changeset

# Release packages
pnpm release
```

### Package-specific commands

Each package can be built individually:
```bash
# Core package
cd packages/core && pnpm build

# Prettier plugin
cd packages/prettier-plugin-zh && pnpm build

# Website (Next.js)
cd apps/website && pnpm dev
```

## Architecture

### Packages

- **`packages/core`**: Core formatting logic and rules for Chinese text. Exports transformation rules that can be used by any formatting tool (Prettier, ESLint, etc.). Built with bunchee.

- **`packages/prettier-plugin-zh`**: Prettier plugin that formats Chinese text. Depends on `core` package. Built with bunchee.

- **`packages/eslint-plugin-zh`**: ESLint plugin (JavaScript-based, early stage). Depends on `core` package for formatting rules.

- **`apps/website`**: Documentation website built with Next.js 13 and Nextra. Uses Tailwind CSS.

### Architecture Design Principles

The project follows a **plugin-based architecture** where:

1. **Core package** contains all formatting rules and transform logic
   - All transformation rules (e.g., `no-duplicate-punctuation`, spacing rules)
   - Core transformation utilities
   - Parser utilities for different content types
   - Helper functions

2. **Plugin packages** serve as adapters to connect core with specific tools
   - **`prettier-plugin-zh`**: Adapts core rules to Prettier's plugin API
   - **`eslint-plugin-zh`**: Adapts core rules to ESLint's rule API

This design ensures:
- **Rule Reusability**: Same rules work across different tools
- **Maintainability**: Rule changes only need to be made in one place
- **Extensibility**: Adding support for new tools (e.g., IDE extensions, other formatters) only requires creating a new adapter plugin

Example data flow:
```
New Tool → Adapter Plugin → Core Rules → Transforms → Formatted Output
```

### Data Flow

```
User Code → Prettier/ESLint → Plugin → Core Rules → Transforms → Formatted Output
```

The `core` package contains:
- `rules/`: Transformation rules (e.g., `no-duplicate-punctuation`, spacing rules)
- `transforms/`: Core transformation utilities
- `parsers/`: Custom parsers for different content types
- `utils/`: Helper functions

### Tooling

- **Package Manager**: pnpm 10.30.3 (configured in package.json)
- **Build System**: Turbo with bunchee for bundling
- **Versioning**: Changesets
- **Linting**: ESLint with custom config

## OpenSpec Workflow

This project uses a custom workflow system called OpenSpec for managing changes:

- **`/opsx:explore`**: Explore ideas and investigate problems (thinking mode, no implementation)
- **`/opsx:propose`**: Create a new change with proposal, design, and tasks artifacts
- **`/opsx:apply`**: Implement tasks from an OpenSpec change
- **`/opsx:archive`**: Archive a completed change

Changes are stored in `openspec/changes/<change-name>/`.

## Key Files

- `turbo.json`: Build task configuration
- `pnpm-workspace.yaml`: Workspace definition
- `packages/core/src/`: Core formatting rules and transforms
- `packages/prettier-plugin-zh/src/`: Prettier plugin implementation
- `apps/website/`: Next.js documentation site

## Testing

Tests use fixture files in `packages/*/tests/fixtures/`. The ESLint plugin package has no test script configured.
